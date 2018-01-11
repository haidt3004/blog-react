import React, { Component } from 'react'
import { compose } from 'redux'
import 'bootstrap/dist/css/bootstrap.css'

import withErrorBoundary from '../../common/widgets/withErrorBoundary'
import ErrorPage from '../pages/ErrorPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from './mui-theme'
import Alert from '../../common/widgets/Alert'
import Header from './AdminLayout/Header'
import Sidebar from './AdminLayout/Sidebar'

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
      return (
        <MuiThemeProvider muiTheme={MuiTheme}>
          <div>
            <Header onLeftIconButtonClick={this.toggleSideBar} />
            <Sidebar open={showSidebar} toggle={this.toggleSideBar} />
            <WrappedComponent layout={this} {...this.props} />
            <Alert/>
          </div>
        </MuiThemeProvider>
      )
    }
  }

  AdminLayout.propTypes = {
  }
  AdminLayout.displayName = 'AdminLayout'
  return AdminLayout
}

export default compose(
  withAdminLayout,
  withErrorBoundary(ErrorPage)
)
