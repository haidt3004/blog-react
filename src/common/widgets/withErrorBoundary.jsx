import React, { Component } from 'react'
import { getComponentName } from '../helpers'
import Raven from '../../common/sentry'

const withErrorBoundary = ErrorPage => WrappedComponent => {
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
      this.state = {
        hasError: false
      }
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

  ErrorBoundary.displayName = `ErrorBoundary(${getComponentName(WrappedComponent)})`
  return ErrorBoundary
}

export default withErrorBoundary