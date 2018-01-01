import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import * as admin from '../actions'
import LoginRequired from '../widgets/LoginRequired'
import AdminLayout from '../widgets/AdminLayout'
import Spinner from '../../common/widgets/Spinner'
import ProfileForm from '../widgets/ProfileForm'

class ProfilePage extends Component {

  componentDidMount() {
    this.props.layout.setTitle('Your profile settings')
    this.props.loadProfile()
  }

  render() {
    const { data, errors, isLoading, setProfile, saveProfile } = this.props
    return (
      <div>
        { isLoading ? <Spinner/> : null }
        { data ? (
          <div className="box box-primary">
            <div className="box-body">
              <ProfileForm data={data} errors={errors} onSubmit={saveProfile} onChange={setProfile} />
            </div>
          </div>
        ) : null }
      </div>
    )
  }
}

ProfilePage.propTypes = {
  layout: PropTypes.instanceOf(Component),
  data: PropTypes.object,
  errors: PropTypes.object,
  isLoading: PropTypes.bool,
  loadProfile: PropTypes.func,
  setProfile: PropTypes.func,
  saveProfile: PropTypes.func,
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

export default compose(
  LoginRequired,
  AdminLayout,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfilePage)