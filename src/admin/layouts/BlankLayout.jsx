import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import './BlankLayout.css'

import React, { Component } from 'react'
import { compose } from 'redux'

import withErrorBoundary from '../../common/widgets/withErrorBoundary'
import ErrorPage from '../pages/ErrorPage'
import Alert from '../../common/widgets/Alert'

function withBlankLayout(WrappedComponent) {

  class BlankLayout extends Component {
    render() {
      return (
        <div className="container">
          <Alert />
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }

  BlankLayout.displayName = 'BlankLayout'
  return BlankLayout
}

export default compose(
  withBlankLayout,
  withErrorBoundary(ErrorPage)
)
