import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Alert from '../../common/widgets/Alert'
import '../style.css'

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
      // TODO: log error to sentry
    }

    errorPage() {
      // TODO: render sentry feedback form
      return (
        <p>Something went wrong.</p>
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