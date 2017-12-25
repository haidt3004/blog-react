import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './UserLayout/Header'
import Sidebar from './UserLayout/Sidebar'
import TopButton from '../widgets/TopButton'
import Alert from '../../common/widgets/Alert'
import $ from 'jquery'
import '../style.css'

function UserLayout({ title }) {
  return WrappedComponent => {
    class LayoutComponent extends Component {
      constructor(props) {
        super(props)
        this.state = {
          title,
          hasError: false
        }
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
                <h1>{this.state.title}</h1>
              </section>

              <section className="content">
                <Alert/>
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