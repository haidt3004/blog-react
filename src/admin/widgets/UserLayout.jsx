import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './UserLayout/Header'
import Sidebar from './UserLayout/Sidebar'
import TopButton from '../widgets/TopButton'
import $ from 'jquery'
import '../style.css'

function UserLayout({ title }) {
  return WrappedComponent => {
    class LayoutComponent extends Component {
      constructor(props) {
        super(props)
        this.state = { hasError: false }
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

      componentDidMount() {
        $('body').addClass('skin-purple sidebar-mini')
      }

      componentWillUnmount() {
        $('body').removeClass('skin-purple sidebar-mini')
      }

      render() {
        return (
          <div className="wrapper">
            <Header />
            <Sidebar />
            <div className="content-wrapper">
              <section className="content-header">
                <h1>{title}</h1>
              </section>

              <section className="content">
                { this.state.hasError ?
                  this.errorPage()
                  :<WrappedComponent {...this.props} />
                }
              </section>
            </div>
            <TopButton />
          </div>
        )
      }
    }

    LayoutComponent.displayName = 'UserLayout'
    LayoutComponent.propTypes = {
      title: PropTypes.string,
    }

    // return BaseLayout(LayoutComponent)
    return LayoutComponent
  }
}

export default UserLayout