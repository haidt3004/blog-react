import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getObjectValue } from '../../helpers'

class Form extends Component {

  constructor(props) {
    super(props)
  }

  onChange(field, value) {
    var data = { ...this.props.data }
    data[field] = value
    this.props.onChange(data)
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
    const { data, errors, onChange, children, ...passThroughProps } = this.props
    return (<form {...passThroughProps}>{children}</form>)
  }
}

Form.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.any, // null or object
  onChange: PropTypes.func.isRequired,
}

Form.defaultProps = {
  errors: null,
}

Form.childContextTypes = {
  form: PropTypes.instanceOf(Form)
}

export default Form
