import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as common from '../actions'

class Alert extends Component {

  render() {
    var { alert: { type, message }, clearAlert } = this.props
    var bsClass = `alert alert-${type==='error' ? 'danger': type}`
    return message.length>0 ? (
      <div className={bsClass}>
        <button type="button" className="close" onClick={()=>clearAlert()}>
          <span aria-hidden="true">&times;</span>
        </button>
        {message}
      </div>
    ) : null
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert)