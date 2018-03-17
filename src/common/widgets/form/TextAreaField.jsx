import React from 'react'
import PropTypes from 'prop-types'
import ErrorList from './ErrorList'

const TextAreaField = props => {
  const { input, meta: { touched, error, valid }, label, ...otherProps } = props
  const className = touched && error ? 'has-error' : ''
  return (
    <div className={`form-group ${className}`}>
      {label && <label className="control-label">{label}</label>}
      <textarea {...input} {...otherProps} className="form-control" />
      {touched && <ErrorList errors={error} />}
    </div>
  )
}

TextAreaField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
}

export default TextAreaField
