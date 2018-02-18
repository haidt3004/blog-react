import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { validateLoginData as validate } from '../helpers'
import ErrorList from '../../../common/widgets/form/ErrorList'

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
    const { handleSubmit, pristine, submitting, error } = this.props
    return (
      <form onSubmit={handleSubmit}>
        {error && (
          <p className="alert alert-danger" role="alert">{error}</p>
        )}
        <Field name="loginId" component={renderField} type="text" label="Username" />
        <Field name="password" component={renderField} type="password" label="Password" />
        <div className="form-group">
          <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({
  form: 'adminLogin',
  validate
})(LoginForm)