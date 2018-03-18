import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { validateLoginData as validate } from '../helpers'
import InputField from '../../../common/components/form/InputField'
import CheckboxField from '../../../common/components/form/CheckboxField'
import SubmitButton from '../../../common/components/form/SubmitButton'

const LoginForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <h1>Admin Login</h1>
    <div className="text-left">
      <Field name="loginId" component={InputField} type="text" placeholder="Username" />
    </div>
    <div className="text-left">
      <Field name="password" component={InputField} type="password" placeholder="Password" />
    </div>
    <div className="text-left">
      <Field name="remember" component={CheckboxField} label="Remember me" />
    </div>
    <div>
      <SubmitButton type="submit" className="btn btn-default submit" submitting={submitting} submitLabel="Logging...">Log in</SubmitButton>
      <a className="reset_pass" href="#">Lost your password?</a>
    </div>
  </form>
)

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({
  form: 'adminLogin',
  validate
})(LoginForm)