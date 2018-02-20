import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withForm from './withForm'

class DropdownList extends Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.props.onChange(this.getFormValue(event.target.value))
  }

  getFormValue(viewValue) {
    return this.props.items[viewValue] ? this.props.items[viewValue].value : undefined
  }

  getViewValue(formValue) {
    return this.props.items.findIndex(option => option.value===formValue)
  }

  render() {
    const { value, items, onChange, prompt, ...passThroughProps } = this.props
    return (
      <select value={this.getViewValue(value)} onChange={this.onChange}
       {...passThroughProps}>
        {prompt && (<option value="">{prompt}</option>)}
        {items.map((item, index) =>
          <option value={index} key={index}>{item.label}</option>
        )}
      </select>)
  }
}

DropdownList.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  prompt: PropTypes.string,
}

DropdownList.defaultProps = {
  prompt: '',
}

export default withForm(DropdownList)