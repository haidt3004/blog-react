import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './AdminLayout.scss'

import withErrorBoundary from '../../common/widgets/withErrorBoundary'
import ErrorPage from '../pages/ErrorPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from './mui-theme'
import Alert from '../../common/widgets/Alert'
import Header from './AdminLayout/Header'
import Sidebar from './AdminLayout/Sidebar'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'

function withAdminLayout(WrappedComponent) {

  class AdminLayout extends Component {

    constructor(props) {
      super(props)
      this.toggleSideBar = this.toggleSideBar.bind(this)
      this.state = {
        showSidebar: false,
        title: 'Page Title',
      }
    }

    componentDidMount() {
      $('body').addClass(styles.wrapper)
    }

    componentWillUnmount() {
      $('body').removeClass(styles.wrapper)
    }

    toggleSideBar() {
      this.setState((prevState, props) => ({
        showSidebar: !prevState.showSidebar
      }))
    }

    setTitle(title) {
      this.setState({ title })
    }

    render() {
      const { showSidebar } = this.state
      var headerProps = {
        onLeftIconButtonClick: this.toggleSideBar,
        title: 'React Blog',
      }

      if (this.props.isLoading) {
        headerProps.iconElementLeft = <CircularProgress size={30} style={{marginTop:5, marginRight:9, marginLeft:9 }}/>
      }

      return (
        <MuiThemeProvider muiTheme={MuiTheme}>
          <div>
            <Header {...headerProps} />
            <Sidebar open={showSidebar} toggle={this.toggleSideBar} />
            <div className={styles.main}>
              <Paper className={styles.container}>
                <h1 className={styles.pageTitle}>{this.state.title}</h1>
                <WrappedComponent layout={this} {...this.props} />
              </Paper>
            </div>
            <Alert/>
          </div>
        </MuiThemeProvider>
      )
    }
  }

  AdminLayout.propTypes = {
    isLoading: PropTypes.bool,
  }
  AdminLayout.displayName = 'AdminLayout'
  return connect(mapStateToProps)(AdminLayout)
}

function mapStateToProps(state) {
  return {
    isLoading: state.common.isLoading.default,
  }
}

export default compose(
  withAdminLayout,
  withErrorBoundary(ErrorPage)
)
