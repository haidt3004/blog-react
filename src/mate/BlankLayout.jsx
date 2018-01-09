import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import MuiTheme from './theme'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './BlankLayout.scss'

class BlankLayout extends Component {

  render() {
    const { title, children } = this.props
    return (
      <MuiThemeProvider muiTheme={MuiTheme}>
        <div className="container-fluid">
          <h1 className={styles.pageTitle}>{title}</h1>
          <div className="row">
            <div className="col-md-4 col-md-offset-4 col-sm-6  col-sm-offset-3">
              <Paper className={styles.container}>
                {children}
              </Paper>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default BlankLayout
