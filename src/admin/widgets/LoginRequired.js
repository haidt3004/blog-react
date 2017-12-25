import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { validateIdentity, getComponentName } from '../../common/services/helper'

function LoginRequired(ProtectedComponent) {

  const Protector = props => {
    const { identity, ...passthroughProps } = props

    return validateIdentity(identity) ?
      <ProtectedComponent {...passthroughProps} /> :
      (<Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>)
  }

  Protector.displayName = `LoginRequired(${getComponentName(ProtectedComponent)})`

  return connect(
    mapStateToProps
  )(Protector)
}

function mapStateToProps(state) {
  return {
    identity: state.common.identity
  }
}

export default LoginRequired