import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { clearAlert } from '../actions'

class Alert extends Component {

  render() {
    return this.props.message
  }
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error']),
  message: PropTypes.string,
  autoHideDuration: PropTypes.number,
  onRequestClose: PropTypes.func,
}

export default connect(
  state => ({
    type: state.common.alert.type,
    message: state.common.alert.message,
  }),
  dispatch => ({
    onRequestClose: () => dispatch(clearAlert())
  })
)(Alert)