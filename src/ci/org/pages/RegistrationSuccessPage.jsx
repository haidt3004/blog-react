import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Layout from '../../widgets/Layout'

class RegistrationPage extends Component {

  componentDidMount() {
    this.props.layout.setTitle('Registration success')
  }

  render() {
    const { user } = this.props
    if (!user.uid)
      return <Redirect to={{ pathname: '/' }} />

    return (
      <div>
        {`Your registration has been submitted successfully. Your organisation ID is ${user.uid}`}
      </div>
    )
  }
}

RegistrationPage.propTypes = {
  layout: PropTypes.instanceOf(Component),
  user: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    user: state.ci.organisation.registration.user,
  }
}

export default compose(
  Layout,
  connect(mapStateToProps)
)(RegistrationPage)