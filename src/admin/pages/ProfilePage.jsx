import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as admin from '../actions'
import LoginRequired from '../widgets/LoginRequired'
import UserLayout from '../layouts/UserLayout'
import Alert from '../../common/widgets/Alert'
import Spinner from '../../common/widgets/Spinner'
import ProfileForm from '../widgets/ProfileForm'

class ProfilePage extends Component {

  componentDidMount() {
    this.props.loadProfile()
  }

  render() {
    const { data, errors, isLoading, setProfile, saveProfile } = this.props
    return (
      <UserLayout title="Update Profile">
        { isLoading ? <Spinner/> : '' }
        <Alert/>
        { data ? (
          <div className="box box-primary">
            <div className="box-body">
              <ProfileForm data={data} errors={errors} onSubmit={saveProfile} onChange={setProfile} />
            </div>
          </div>
        ) : null }
      </UserLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.admin.profile.data,
    errors: state.admin.profile.errors,
    isLoading: state.common.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProfile: () => dispatch(admin.loadProfile()),
    setProfile: data => dispatch(admin.setProfile(data)),
    saveProfile: data => dispatch(admin.saveProfile(data)),
  }
}

export default LoginRequired(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage))