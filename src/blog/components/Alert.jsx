import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setSuccess } from '../actions'

class Alert extends Component {

    getClassName(type) {
        let classes = {
            success: 'success',
            error: 'danger'
        }
        return `alert alert-${classes[type] || classes.success}`
    }

    render() {
        let { message, type } = this.props
        if (message) {
            setTimeout(this.props.resetAlert, 3000)
        }

        return message && (
            <div className={this.getClassName(type)} role="alert">
                <button type="button" className="close" onClick={this.props.resetAlert}>
                    <span aria-hidden="true">&times;</span>
                </button>
                {message}
            </div>
        )
    }
}

Alert.propTypes = {
    type: PropTypes.oneOf(['success', 'error', 'info']),
}

const mapStateToProps = state => {
    return {
        type: state.alert.type,
        message: state.alert.message,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetAlert: () => dispatch(setSuccess(''))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Alert)