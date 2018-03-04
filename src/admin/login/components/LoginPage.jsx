import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubmissionError } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { login } from '../actions'
import LoginForm from './LoginForm'
import BlankLayout from '../../hoc/BlankLayout'
import Alert from '../../../common/widgets/Alert'

class LoginPage extends Component {
  state = {
    isAuthenticated: false,
    data: {
      loginId: 'demo',
      password: '123123'
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
    const { from: returnUrl } = this.props.location.state || { from: { pathname: '/admin/profile' } }
    return this.state.isAuthenticated ?
      <Redirect to={returnUrl} /> :
      <LoginForm onSubmit={this.onSubmit} initialValues={this.state.data} />
  }
}

LoginPage.propTypes = {
  login: PropTypes.func,
  location: PropTypes.object,
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
