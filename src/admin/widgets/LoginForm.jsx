import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Form from '../../common/widgets/mt-form/Form'
import Checkbox from '../../common/widgets/mt-form/Checkbox'
import TextField from '../../common/widgets/mt-form/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import styles from './BlankLayout.scss'

class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit()
  }

  render() {
    const { onSubmit, ...formProps } = this.props

    return (
      <Form {...formProps}>
        <TextField
          hintText="E-mail"
          floatingLabelText="E-mail"
          fullWidth={true}
          field="loginId"
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
              <RaisedButton label="Sign In" primary={true} onClick={this.onSubmit}/>
            </Link>
          </div>
        </div>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default LoginForm