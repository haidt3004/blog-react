import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../style.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Alert from '../../common/widgets/Alert'
import Raven from '../../common/helpers/sentry'

function PublicLayout(WrappedComponent) {
  class LayoutComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: '',
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
      Raven.captureException(error, info)
    }

    errorPage() {
      // TODO: render sentry feedback form
      return (
        <div>
          <p>Something went wrong. Click <a role="button" onClick={() => Raven.lastEventId() && Raven.showReportDialog()}>here</a> to report your problem.</p>
        </div>
      )
    }

    render() {
      return (
        <div>
          <p>header</p>
          <p>sidebar</p>
          <div className="main">
            <h1>{this.state.title}</h1>

            <section className="content">
              <Alert/>
              { this.state.hasError ?
                this.errorPage()
                :<WrappedComponent layout={this} {...this.props}/>
              }
            </section>
          </div>
        </div>
      )
    }
  }

  LayoutComponent.displayName = 'PublicLayout'
  LayoutComponent.propTypes = {
    title: PropTypes.string,
  }

  return LayoutComponent
}

export default PublicLayout