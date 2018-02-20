import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clearAlert } from '../actions'
import { Alert as BsAlert } from 'react-bootstrap'

class Alert extends Component {

  render() {
    const { message, onDismiss, type } = this.props
    const style = type == 'success' ? 'success' : 'danger'
    return message.length > 0 ? (
      <BsAlert bsStyle={style} onDismiss={onDismiss}>
        {message}
      </BsAlert>
    ) : null
  }
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error']),
  message: PropTypes.string,
  onDismiss: PropTypes.func,
}

export default connect(
  state => ({
    type: state.common.alert.type,
    message: state.common.alert.message,
  }),
  dispatch => ({
    onDismiss: () => dispatch(clearAlert())
  })
)(Alert)