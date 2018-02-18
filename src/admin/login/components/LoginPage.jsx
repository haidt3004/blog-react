import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubmissionError } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { login } from '../actions'
import LoginForm from './LoginForm'
import BlankLayout from '../../layouts/BlankLayout'
// import { Redirect } from 'react-router-dom'
// import { getObjectValue } from '../../common/helpers'

class LoginPage extends Component {
  state = {
    isAuthenticated: false,
    data: {
      loginId: 'demo',
      password: 'demo'
    }
  }

  onSubmit = async data => {
    try {
      await this.props.login(data)
      this.setState({ isAuthenticated: true })
    } catch (error) {
      throw new SubmissionError({
        ...error.errors,
        _error: error.message
      })
    }
  }

  render() {
    return (
      <LoginForm onSubmit={this.onSubmit} initialValues={this.state.data} />
    )
  }
}

LoginPage.propTypes = {
  login: PropTypes.func,
}

export default compose(
  BlankLayout,
  connect(
    undefined,
    dispatch => ({
      login: data => {
        var action = login(data)
        dispatch(action)
        return action.promise
      }
    })
  )
)(LoginPage)
