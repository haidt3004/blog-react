import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'select2/dist/js/select2.min.js'
import 'select2/dist/css/select2.min.css'
import 'moment/min/moment-with-locales.min.js'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/skin-purple.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import React, { Component } from 'react'
import $ from 'jquery'

function BaseLayout(WrappedComponent) {

  class LayoutComponent extends Component {
    constructor(props) {
      super(props)
      this.state = { hasError: false }
    }

    componentDidMount() {
      $('body').addClass('login-page')
    }

    componentWillUnmount() {
      $('body').removeClass('login-page')
    }

    componentDidCatch(error, info) {
      this.setState({ hasError: true, error, info })
      // TODO: log error to sentry
    }

    errorPage() {
      // TODO: render sentry feedback form
      return (
        <div className="login-box">
          <div className="login-logo">
            <a role="button"><strong>Opps...</strong></a>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Something went wrong.</p>
          </div>
        </div>
      )
    }

    render() {
      if (this.state.hasError)
        return this.errorPage()

      return <WrappedComponent {...this.props} />
    }
  }

  LayoutComponent.displayName = 'BaseLayout'
  return LayoutComponent
}

export default BaseLayout
