import React from 'react'
import { Redirect } from 'react-router-dom'
import user from './auth'
import ErrorPage from './ErrorPage'

export function PermissionRequired(permission, ProtectedComponent) {
  return class extends React.Component {
    render() {
      var props = this.props
      if (user.can(permission)) {
        return <ProtectedComponent {...props} />
      } else {
        return user.isGuest() ?
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/> :
          <ErrorPage message="You don't have permissions to access this page" />
      }
    }
  }
}

export function AdminRequired(ProtectedComponent) {
  return PermissionRequired('admin', ProtectedComponent)
}