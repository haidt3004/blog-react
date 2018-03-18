import React from 'react'
import PropTypes from 'prop-types'

const ErrorList = ({ errors }) => (
  (errors && errors.length > 0) ? (<span className="help-block">{errors[0]}</span>) : null
)

ErrorList.propTypes = {
  errors: PropTypes.array
}

export default ErrorList
