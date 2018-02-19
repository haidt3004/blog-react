import React from 'react'
import PropTypes from 'prop-types'

const SubmitButton = props => {
  const { submitting, children, submitLabel = 'Loading...', ...otherProps } = props
  if (submitting) {
    return (
      <button disabled={true} {...otherProps}>
        <i className="fa fa-circle-o-notch fa-spin"></i>&nbsp;{submitLabel}
      </button>
    )
  } else {
    return (
      <button {...otherProps}>
        {children}
      </button>
    )
  }
}

SubmitButton.propTypes = {
  submitting: PropTypes.bool,
  submitLabel: PropTypes.string,
  children: PropTypes.any,
}

export default SubmitButton