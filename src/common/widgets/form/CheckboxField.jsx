import React from 'react'
import PropTypes from 'prop-types'
import ErrorList from './ErrorList'

const CheckboxField = props => {
  const { input, meta: { touched, error, valid }, label } = props
  const className = touched ? (!valid ? 'has-error' : 'has-success') : ''
  return (
    <div className={className}>
      <div className="checkbox">
        <label>
          <input {...input} type="checkbox" /> {label}
        </label>
      </div>
      {touched && <ErrorList errors={error} />}
    </div>
  )
}

CheckboxField.propTypes = {
  label: PropTypes.string,
}

export default CheckboxField
