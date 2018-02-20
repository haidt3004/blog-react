import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { validateLoginData as validate } from '../helpers'
import InputField from '../../../common/widgets/form/InputField'
import SubmitButton from '../../../common/widgets/form/SubmitButton'

class LoginForm extends Component {

  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="loginId" component={InputField} type="text" label="Username" />
        <Field name="password" component={InputField} type="password" label="Password" />
        <div className="form-group">
          <SubmitButton type="submit" className="btn btn-primary" submitting={submitting}>Login</SubmitButton>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({
  form: 'adminLogin',
  validate
})(LoginForm)