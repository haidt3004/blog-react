import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React, { Component } from 'react'
import $ from 'jquery'

function BlankLayout(WrappedComponent) {

  class LayoutComponent extends Component {
    constructor(props) {
      super(props)
      this.state = { hasError: false }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    errorPage() {
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
      return this.state.hasError ?
        this.errorPage() :
        <WrappedComponent {...this.props} />
    }
  }

  LayoutComponent.displayName = 'BlankLayout'
  return LayoutComponent
}

export default BlankLayout
