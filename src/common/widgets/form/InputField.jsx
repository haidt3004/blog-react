import React from 'react'
import PropTypes from 'prop-types'
import ErrorList from './ErrorList'

const InputField = props => {
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

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default InputField
