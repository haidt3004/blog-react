import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getObjectValue } from '../../services/helper'

class Form extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(field, value) {
    var data = { ...this.props.data }
    data[field] = value
    this.props.onChange(data)
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.props.data)
  }

  getChildContext() {
    return { form: this }
  }

  getFieldErrors(field) {
    return getObjectValue(this.props.errors, field, [])
  }

  getFieldValue(field) {
    return getObjectValue(this.props.data, field)
  }

  render() {
    const { data, errors, onSubmit, onChange, children, ...passThroughProps } = this.props
    return (<form onSubmit={this.onSubmit} {...passThroughProps}>{children}</form>)
  }
}

Form.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.any, // null or object
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

Form.defaultProps = {
  errors: null,
}

Form.childContextTypes = {
  form: PropTypes.instanceOf(Form)
}

export default Form
