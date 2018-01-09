import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BlankLayout from './BlankLayout'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'

import styles from './BlankLayout.scss'

class LoginPage extends Component {

  render() {

    return (
      <BlankLayout title={'React Blog'}>
        <div className="text-center">Sign in to start your session</div>
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
          <div className={`row ${styles.bottom}`}>
            <div className="col-xs-7">
              <Checkbox label="Remember me" />
            </div>
            <div className="col-xs-5 text-right">
              <Link to="/">
                <RaisedButton label="Login" primary={true} />
              </Link>
            </div>
          </div>
        </form>
      </BlankLayout>
    )
  }
}

export default LoginPage
