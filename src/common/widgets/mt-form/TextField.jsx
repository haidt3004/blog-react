import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MTextField from 'material-ui/TextField'
import withForm from './withForm'

class TextField extends Component {

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
    return (<MTextField value={val} onChange={this.onChange} {...passThroughProps} />)
  }
}

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default withForm(TextField)