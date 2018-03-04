import React, { Component } from 'react'
import { getComponentName } from '../helpers'
import Raven from '../../common/sentry'

const ErrorBoundary = ErrorPage => WrappedComponent => {

  class Wrapper extends Component {

    state = {
      hasError: false
    }

    componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        error,
        info
      })
      Raven.captureException(error, info)
    }

    render() {
      const { hasError, ...errorProps } = this.state
      return hasError ?
        <ErrorPage {...this.props} {...errorProps} /> :
        <WrappedComponent {...this.props} />
    }
  }

  Wrapper.displayName = `ErrorBoundary(${getComponentName(WrappedComponent)})`
  return Wrapper
}

export default ErrorBoundary