import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as common from '../actions'
import Snackbar from 'material-ui/Snackbar'

class Alert extends Component {

  render() {
    var { alert: { type, message }, clearAlert } = this.props
    var style = {
      color: type==='error' ? 'red': 'green'
    }
    return (
      <Snackbar
        open={message.length>0}
        message={message}
        autoHideDuration={3000}
        onRequestClose={clearAlert}
        contentStyle={style}
      />
    )
  }
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error']),
  message: PropTypes.string,
  alert: PropTypes.object,
  clearAlert: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    alert: state.common.alert
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearAlert: () => dispatch(common.clearAlert())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)