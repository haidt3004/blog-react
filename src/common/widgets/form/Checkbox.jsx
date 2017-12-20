import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withForm from './withForm'

class Checkbox extends Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.props.onChange(this.getFormValue(event.target.checked))
  }

  getFormValue(viewValue) {
    return viewValue ? this.props.checkValue : this.props.unCheckValue
  }

  getViewValue(formValue) {
    return formValue === this.props.checkValue
  }

  render() {
    const { onChange, value, checkValue, unCheckValue, ...passThroughProps } = this.props
    return (<input type="checkbox" checked={this.getViewValue(value)} onChange={this.onChange} {...passThroughProps} />)
  }
}

Checkbox.propTypes = {
  checkValue: PropTypes.any.isRequired,
  unCheckValue: PropTypes.any.isRequired,
}

Checkbox.defaultProps = {
  checkValue: true,
  unCheckValue: false,
}

export default withForm(Checkbox)