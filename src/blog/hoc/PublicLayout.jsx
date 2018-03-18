import styles from './PublicLayout.scss'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import logo from './logo.png'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from './mui-theme'
import withErrorBoundary from '../../common/components/withErrorBoundary'
import Alert from '../../common/components/Alert'
import ErrorPage from '../pages/ErrorPage'

function withPublicLayout(WrappedComponent) {

  class PublicLayout extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: ''
      }
    }

    componentDidMount() {
      $('body').addClass(styles.wrapper)
    }

    componentWillUnmount() {
      $('body').removeClass(styles.wrapper)
    }

    setTitle(title) {
      this.setState({ title })
    }

    render() {
      return (
        <MuiThemeProvider muiTheme={MuiTheme}>
          <div>
            <header className={styles.header}>
              <div className="container">
                <a href="#" className={styles.logo}>
                  <img src={logo} alt="" />
                  <span>React blog</span>
                </a>
              </div>
            </header>
            <div className={styles.content}>
              <div className="container">
                <Alert />
                <WrappedComponent layout={this} {...this.props} />
              </div>
            </div>
          </div>

        </MuiThemeProvider>
      )
    }
  }

  PublicLayout.displayName = 'PublicLayout'
  PublicLayout.propTypes = {
    isLoading: PropTypes.bool,
  }

  return PublicLayout
}

export default compose(
  withPublicLayout,
  withErrorBoundary(ErrorPage)
)
