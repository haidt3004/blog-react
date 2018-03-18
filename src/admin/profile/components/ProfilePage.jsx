import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubmissionError } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { setTitle } from '../../../common/actions'
import { saveProfile, loadProfile } from '../actions'
import Spinner from '../../../common/components/Spinner'
import ProfileForm from './ProfileForm'
import AdminLayout from '../../hoc/AdminLayout'

class ProfilePage extends Component {

  state = {
    initialFormValues: {}
  }

  async componentDidMount() {
    const { setTitle, loadProfile } = this.props
    setTitle('Your profile settings')
    try {
      var response = await loadProfile()
      this.setState({
        initialFormValues: response.data
      })
    } catch (error) { }
  }

  onSubmit = async data => {
    try {
      var response = await this.props.saveProfile(data)
      this.setState({
        initialFormValues: response.data
      })
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
          (<div className="x_panel">
            <ProfileForm onSubmit={this.onSubmit} initialValues={this.state.initialFormValues} />
          </div>) :
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
