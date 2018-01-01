import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './AdminLayout/Header'
import Sidebar from './AdminLayout/Sidebar'
import TopButton from '../widgets/TopButton'
import Alert from '../../common/widgets/Alert'

function AdminLayout(WrappedComponent) {
  class LayoutComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: 'Page title',
        hasError: false
      }
    }

    setTitle(title) {
      this.setState({ title })
    }

    componentDidCatch(error, info) {
      this.setState({
        title: 'Opps...',
        hasError: true,
        error,
        info
      })
      // TODO: log error to sentry
    }

    errorPage() {
      // TODO: render sentry feedback form
      return (
        <p>Something went wrong.</p>
      )
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
      return (
        <div className="wrapper">
          <Header />
          <Sidebar />
          <div className="content-wrapper">
            <section className="content-header">
              <h1>{this.state.title}</h1>
            </section>

            <section className="content">
              <Alert/>
              { this.state.hasError ?
                this.errorPage()
                :<WrappedComponent layout={this} {...this.props}/>
              }
            </section>
          </div>
          <TopButton />
        </div>
      )
    }
  }

  LayoutComponent.displayName = 'AdminLayout'
  LayoutComponent.propTypes = {
    title: PropTypes.string,
  }

  return LayoutComponent
}

export default AdminLayout