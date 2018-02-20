import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import withForm from './withForm'

class TagInput extends Component {

  constructor(props) {
    super(props)
    this.emitChange = true
  }

  componentDidMount() {
    this.element
      .select2({ tags: this.props.createTag !== undefined })
      .on("change", event => {
        if (!this.emitChange) {
          this.emitChange = true
          return
        }
        this.props.onChange(this.getFormValue(this.element.val()))
      })
  }

  componentWillUnmount() {
    this.element
      .off('change')
      .select2('destroy')
  }

  componentWillReceiveProps(props) {
    this.emitChange = false
    this.element
      .val(this.getViewValue(props.value))
      .trigger('change')
  }

  /**
   * convert input values of html tag to form value
   * @param {Array} viewValue
   */
  getFormValue(viewValue) {
    return viewValue.map(index => {
      let item = this.props.items[index]
      return item ? item.value : this.props.createTag(index)
    })
  }

  getViewValue(formValue) {
    return formValue.map(item => {
      return this.props.items.findIndex(option => option.value===item)
    })
  }

  render() {
    const { value, items } = this.props
    return (
      <select className="form-control"
        ref={el => this.element = $(el)}
        defaultValue={this.getViewValue(value)}
        style={{ width: '100%' }}
        multiple="multiple"
      >
        {items.map((item, index) =>
          <option value={index} key={index}>{item.label}</option>
        )}
      </select>
    )
  }
}

TagInput.propTypes = {
  value: PropTypes.array,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  createTag: PropTypes.func,
}

TagInput.defaultProps = {
  value: [],
}

export default withForm(TagInput)
