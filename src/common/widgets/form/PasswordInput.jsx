import React, { Component } from 'react'
import withForm from './withForm'

class PasswordInput extends Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.props.onChange(event.target.value)
  }

  render() {
    const { value, onChange, ...passThroughProps } = this.props
    var val = value===undefined ? '' : value
    return (<input type="password" value={val} onChange={this.onChange} {...passThroughProps} />)
  }
}

export default withForm(PasswordInput)