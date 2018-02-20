import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { validateIdentity, getComponentName } from '../../common/helpers'

const LoginRequired = loginUrl => ProtectedComponent => {
  var Protector = props => {
    const { identity, ...passthroughProps } = props

    return validateIdentity(identity) ?
      <ProtectedComponent {...passthroughProps} /> :
      <Redirect to={{
        pathname: loginUrl,
        state: { from: props.location }
      }} />
  }

  Protector.displayName = `LoginRequired(${getComponentName(ProtectedComponent)})`
  Protector.propTypes = {
    identity: PropTypes.object,
    location: PropTypes.object,
  }
  return connect(mapStateToProps)(Protector)
}

function mapStateToProps(state) {
  return {
    identity: state.common.identity
  }
}

export default LoginRequired
