import React, { Component } from 'react'

import Form from '../../common/widgets/form/Form'
import FormGroup from '../../common/widgets/form/FormGroup'
import ErrorList from '../../common/widgets/form/ErrorList'
import Checkbox from '../../common/widgets/form/Checkbox'
import TextInput from '../../common/widgets/form/TextInput'
import PasswordInput from '../../common/widgets/form/PasswordInput'

const LoginForm = props => (
  <Form {...props}>
    <FormGroup field="loginId" className="has-feedback">
      <TextInput name="loginId" className="form-control" placeholder="Email" />
      <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
      <ErrorList />
    </FormGroup>

    <FormGroup field="password" className="has-feedback">
      <PasswordInput name="password" className="form-control" placeholder="Password" />
      <span className="glyphicon glyphicon-lock form-control-feedback"></span>
      <ErrorList />
    </FormGroup>

    <div className="row">
      <div className="col-xs-8">
        <div className="checkbox">
          <label>
            <Checkbox name="remember" /> Remember Me
          </label>
        </div>
      </div>
      <div className="col-xs-4">
        <button type="submit" className="btn btn-primary btn-block btn-flat">
          Sign In
        </button>
      </div>
    </div>
  </Form>
)

export default LoginForm