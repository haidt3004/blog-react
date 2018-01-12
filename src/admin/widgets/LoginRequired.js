import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { validateIdentity, getComponentName } from '../../common/helpers'

function LoginRequired(ProtectedComponent) {

  var Protector = props => {
    const { identity, ...passthroughProps } = props

    return validateIdentity(identity) ?
      <ProtectedComponent {...passthroughProps} /> :
      (<Redirect to={{
        pathname: '/admin/login',
        state: { from: props.location }
      }}/>)
  }

  Protector.displayName = `LoginRequired(${getComponentName(ProtectedComponent)})`
  Protector.propTypes = {
    identity: PropTypes.object,
  }
  return connect(mapStateToProps)(Protector)
}

function mapStateToProps(state) {
  return {
    identity: state.common.identity
  }
}

export default LoginRequired
