import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BlankLayout from './BlankLayout'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from '../common/widgets/mt-form/Checkbox'
import TextField from '../common/widgets/mt-form/TextField'
import Form from '../common/widgets/mt-form/Form'

import styles from './BlankLayout.scss'

class LoginPage extends Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = { data: {} }
  }

  onChange(data) {
    this.setState({ data })
  }

  onSubmit() {
    console.log(this.state.data)
  }

  render() {

    return (
      <BlankLayout title={'React Blog'}>
        <div className="text-center">Sign in to start your session</div>
        <Form data={this.state.data} onChange={this.onChange}>
          <TextField
            hintText="E-mail"
            floatingLabelText="E-mail"
            fullWidth={true}
            field="email"
          />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            fullWidth={true}
            type="password"
            field="password"
          />
          <div className={`row ${styles.bottom}`}>
            <div className="col-xs-7">
              <Checkbox label="Remember me" field="remember"/>
            </div>
            <div className="col-xs-5 text-right">
              <Link to="/">
                <RaisedButton label="Login" primary={true} onClick={this.onSubmit}/>
              </Link>
            </div>
          </div>
        </Form>
      </BlankLayout>
    )
  }
}

export default LoginPage
