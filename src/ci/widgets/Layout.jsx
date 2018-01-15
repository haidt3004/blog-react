import './styles.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from './mui-theme'
import withErrorBoundary from '../../common/widgets/withErrorBoundary'
import Alert from '../../common/widgets/Alert'
import ErrorPage from '../pages/ErrorPage'

function withLayout(WrappedComponent) {

  class LayoutComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: ''
      }
    }

    setTitle(title) {
      this.setState({ title })
    }

    render() {
      return (
        <MuiThemeProvider muiTheme={MuiTheme}>
          <div>
            <header className="bs-docs-nav navbar navbar-static-top" id="top">
              <div className="container">
                <div className="navbar-header">
                  <button aria-controls="bs-navbar" aria-expanded="false" className="collapsed navbar-toggle" data-target="#bs-navbar" data-toggle="collapse" type="button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a href="#" className="navbar-brand">Logo</a>
                </div>
                <nav className="collapse navbar-collapse" id="bs-navbar">
                  <ul className="nav navbar-nav">
                    <li className="active"> <a href="../getting-started/">Menu 1</a></li>
                    <li> <a href="../css/">Menu 2</a> </li>
                    <li> <a href="../components/">Menu 3</a> </li>
                  </ul>
                </nav>
              </div>
            </header>
            <div className="container">
              <h1 className="page-header">{this.state.title}</h1>
              <WrappedComponent layout={this} {...this.props} />
            </div>
            <Alert/>
          </div>

        </MuiThemeProvider>
      )
    }
  }

  LayoutComponent.displayName = 'LayoutComponent'
  LayoutComponent.propTypes = {
    isLoading: PropTypes.bool,
  }

  return LayoutComponent
}

export default compose(
  withLayout,
  withErrorBoundary(ErrorPage)
)
