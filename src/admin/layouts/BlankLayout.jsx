import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'gentelella/build/css/custom.min.css'
import './BlankLayout.css'

import React, { Component } from 'react'
import { compose } from 'redux'
import $ from 'jquery'
import withErrorBoundary from '../../common/widgets/withErrorBoundary'
import ErrorPage from './ErrorPage'
import Alert from '../../common/widgets/Alert'

function withBlankLayout(WrappedComponent) {

  class BlankLayout extends Component {

    componentDidMount() {
      $('body').addClass('login')
    }

    componentWillUnmount() {
      $('body').removeClass('login')
    }

    render() {
      return (
        <div>
          <div className="login_wrapper">
            <div className="animate form login_form">
              <section className="login_content">
                <Alert />
                <WrappedComponent {...this.props} />
              </section>
            </div>
          </div>
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
