import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as common from '../actions'
import { delay } from '../helpers'

class Alert extends Component {

  componentWillReceiveProps(props) {
    if (props.alert.message.length>0) {
      delay(3000)
        .then(() => this.props.resetAlert())
    }
  }

  render() {
    var { alert: { type, message }, resetAlert } = this.props
    var bsClass = `alert alert-${type==='error' ? 'danger': type}`
    return message.length>0 ? (
      <div className={bsClass}>
        <button type="button" className="close" onClick={()=>resetAlert()}>
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
}

const mapStateToProps = state => {
  return {
    alert: state.common.alert
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetAlert: () => dispatch(common.setSuccess(''))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert)