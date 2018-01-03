import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import MuiTheme from './theme'

import styles from './BlankLayout.scss'

class BlankLayout extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={MuiTheme}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <Paper>
                <form>
                  <TextField
                    hintText="E-mail"
                    floatingLabelText="E-mail"
                    fullWidth={true}
                  />
                  <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    fullWidth={true}
                    type="password"
                  />

                  <div>
                    <Checkbox label="Remember me" />
                    <Link to="/">
                      <RaisedButton label="Login" primary={true} />
                    </Link>
                  </div>
                </form>
              </Paper>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default BlankLayout
