import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from './Form'

class FormGroup extends Component {

  getChildContext() {
    return { formGroup: this }
  }

  getForm() {
    var form = this.context.form
    if (!form) {
      throw new Error('FormGroup component must be defined within Form component')
    }
    return form
  }

  /**
   * return Array
   */
  getFieldErrors() {
    return this.getForm().getFieldErrors(this.props.field)
  }

  getClassName() {
    var { className='' } = this.props
    var classes = className.split(/\s+/)
    classes.push('form-group')
    if (this.getFieldErrors().length>0) {
      classes.push('has-error')
    }
    return classes.join(' ')
  }

  render() {
    return (<div className={this.getClassName()}>{this.props.children}</div>)
  }
}

FormGroup.contextTypes = {
  form: PropTypes.instanceOf(Form)
}

FormGroup.childContextTypes = {
  formGroup: PropTypes.instanceOf(FormGroup)
}

FormGroup.propTypes = {
  field: PropTypes.string.isRequired,
}

export default FormGroup
