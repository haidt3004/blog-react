import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubmissionError } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { setTitle } from '../../../common/actions'
import { saveProfile, loadProfile } from '../actions'
import Spinner from '../../../common/widgets/Spinner'
import ProfileForm from './ProfileForm'
import AdminLayout from '../../hoc/AdminLayout'

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
    const { profileLoaded } = this.props
    return (
      <div>
        {profileLoaded ?
          <ProfileForm onSubmit={this.onSubmit} initialValues={this.state.initialValues} /> :
          <Spinner />
        }
      </div>
    )
  }
}

ProfilePage.propTypes = {
  profileLoaded: PropTypes.bool,
  loadProfile: PropTypes.func,
  saveProfile: PropTypes.func,
  setTitle: PropTypes.func,
}

export default compose(
  AdminLayout,
  connect(
    state => ({
      profileLoaded: state.common.request.loadProfile,
    }),
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
