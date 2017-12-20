import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import $ from 'jquery'
import withForm from './withForm'

class DatePicker extends Component {

  componentDidMount() {
    var el = $(this.element)
    el.datetimepicker({
      format: this.props.format,
      sideBySide: true,
      toolbarPlacement: 'top',
      showClear: true,
      showClose: true
    })

    // notify parent component when user select a date in date picker
    el.on("dp.change", event => {
      this.props.onChange(this.getFormValue(el.find('input').val()))
    })
  }

  componentWillReceiveProps(props) {
    // update the html input when props change
    var el = $(this.element)
    el.find('input').val(this.getViewValue(props.value))
  }

  getFormValue(viewValue) {
    return viewValue ? moment(viewValue, this.props.format).toDate() : null;
  }

  getViewValue(formValue) {
    return formValue ? moment(formValue).format(this.props.format) : ''
  }

  render() {
    return (
      <div className="input-group" ref={element => this.element = element}>
        <input defaultValue={this.getViewValue(this.props.value)} type="text" className="form-control" />
        <span className="input-group-addon">
          <span className="glyphicon glyphicon-time"></span>
        </span>
      </div>
    )
  }
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string,
}

DatePicker.defaultProps = {
  format: 'DD/MM/YYYY',
}

export default withForm(DatePicker)