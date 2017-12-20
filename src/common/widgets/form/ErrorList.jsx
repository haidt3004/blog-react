import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormGroup from './FormGroup'

class ErrorList extends Component {

  getFormGroup() {
    var formGroup = this.context.formGroup
    if (!formGroup) {
      throw new Error('ErrorList component must be defined within FormGroup component')
    }
    return formGroup
  }

  render() {
    var errors = this.getFormGroup().getFieldErrors()
    return errors.length>0 ? (<span className="help-block">{errors[0]}</span>) : null
  }

}

ErrorList.contextTypes = {
  formGroup: PropTypes.instanceOf(FormGroup)
}

export default ErrorList
