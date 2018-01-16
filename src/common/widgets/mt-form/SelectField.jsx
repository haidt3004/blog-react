import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withForm from './withForm'
import MSelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class SelectField extends Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(event, index, value) {
    this.props.onChange(value)
  }

  render() {
    const { items, onChange, ...passThroughProps } = this.props
    return (
      <MSelectField onChange={this.onChange} {...passThroughProps}>
        <MenuItem value={null} primaryText={''} />
        {items.map((item) =>
          <MenuItem value={item.value} key={item.value} primaryText={item.label} />
        )}
      </MSelectField>)
  }
}

SelectField.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default withForm(SelectField)