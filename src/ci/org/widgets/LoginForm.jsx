import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Form from '../../../common/widgets/mt-form/Form'
import Checkbox from '../../../common/widgets/mt-form/Checkbox'
import TextField from '../../../common/widgets/mt-form/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class LoginForm extends Component {

  render() {
    const { onSubmit, ...formProps } = this.props

    return (
      <Form {...formProps}>
        <TextField
          hintText="Username"
          floatingLabelText="Username"
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
        <div className="row">
          <div className="col-xs-7">
            <Checkbox label="Remember me" field="remember"/>
          </div>
          <div className="col-xs-5 text-right">
            <RaisedButton label="Sign In" primary={true} onClick={onSubmit}/>
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