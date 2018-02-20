import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { validateLoginData as validate } from '../helpers'
import ErrorList from '../../../common/widgets/form/ErrorList'
import SubmitButton from '../../../common/widgets/form/SubmitButton'

const renderField = props => {
  const { input, meta: { touched, error, valid }, label, type } = props
  const className = touched && (!valid ? 'has-error' : 'has-success')
  return (
    <div className={`form-group ${className}`}>
      <label className="control-label">{label}</label>
      <input {...input} className="form-control" type={type} />
      {touched && <ErrorList errors={error} />}
    </div>
  )
}

class LoginForm extends Component {

  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="loginId" component={renderField} type="text" label="Username" />
        <Field name="password" component={renderField} type="password" label="Password" />
        <div className="form-group">
          <SubmitButton type="submit" className="btn btn-primary" submitting={submitting}>Submit</SubmitButton>
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