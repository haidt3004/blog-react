import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubmissionError } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { setTitle } from '../../../common/actions'
import { saveProfile, loadProfile } from '../actions'
import Spinner from '../../../common/widgets/Spinner'
import ProfileForm from './ProfileForm'
import BlankLayout from '../../layouts/BlankLayout'

class ProfilePage extends Component {

  state = {
    initialValues: {}
  }

  async componentDidMount() {
    this.props.setTitle('Your profile settings')
    try {
      var response = await this.props.loadProfile()
      this.setState({
        initialValues: response.data
      })
    } catch (error) { }
  }

  onSubmit = async data => {
    try {
      await this.props.saveProfile(data)
    } catch (error) {
      throw new SubmissionError({
        ...error.errors,
        _error: error.message
      })
    }
  }

  render() {
    const { isLoading } = this.props
    return (
      <div>
        {isLoading || isLoading === undefined ?
          <Spinner /> :
          <ProfileForm onSubmit={this.onSubmit} initialValues={this.state.initialValues} />}
      </div>
    )
  }
}

ProfilePage.propTypes = {
  isLoading: PropTypes.bool,
  loadProfile: PropTypes.func,
  saveProfile: PropTypes.func,
  setTitle: PropTypes.func,
}

export default compose(
  BlankLayout,
  connect(
    state => {
      return {
        isLoading: state.common.isLoading.default,
      }
    },
    dispatch => ({
      // set page title
      setTitle: title => dispatch(setTitle(title)),

      // load current profile data to form
      loadProfile: () => {
        var action = loadProfile()
        dispatch(action)
        return action.promise
      },

      // update profile data
      saveProfile: data => {
        var action = saveProfile(data)
        dispatch(action)
        return action.promise
      },
    })
  )
)(ProfilePage)
