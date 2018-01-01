import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from './theme'
import Header from './Header'
import Sidebar from './Sidebar'
import './style.scss'

class MaterialUiExample extends Component {

  constructor(props) {
    super()
    this.toggleSideBar = this.toggleSideBar.bind(this)
    this.state = {
      showSidebar: true,
    }
  }

  toggleSideBar() {
    this.setState((prevState, props) => ({
      showSidebar: !prevState.showSidebar
    }))
  }

  render() {
    const { showSidebar } = this.state
    // shrink content when showing sidebar
    var style = {
      paddingLeft: showSidebar ?
        MuiTheme.appBar.padding+MuiTheme.drawer.width :
        MuiTheme.appBar.padding
    }
    return (
      <MuiThemeProvider muiTheme={MuiTheme}>
        <div>
          <Header onLeftIconClick={this.toggleSideBar} style={style} />
          <Sidebar visible={showSidebar} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default MaterialUiExample