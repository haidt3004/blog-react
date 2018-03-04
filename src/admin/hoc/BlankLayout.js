import React, { Component } from 'react'
import { compose } from 'redux'
import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import 'gentelella/build/css/custom.min.css'
import './BlankLayout.css'
import Alert from '../../common/widgets/Alert'
import ErrorBoundary from '../../common/hoc/ErrorBoundary'
import ErrorPage from '../components/ErrorPage'

function BlankLayout(WrappedComponent) {

  class Wrapper extends Component {

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

  Wrapper.displayName = 'BlankLayout'
  return Wrapper
}

export default compose(
  BlankLayout,
  ErrorBoundary(ErrorPage)
)
