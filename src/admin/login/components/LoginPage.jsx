import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SubmissionError } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'


// import { Redirect } from 'react-router-dom'
import * as actions from '../actions'
// import { getObjectValue } from '../../common/helpers'
// import BlankLayout from '../../layouts/BlankLayout'
import LoginForm from './LoginForm'
import Alert from '../../../common/widgets/Alert'

class LoginPage extends Component {
  state = {
    data: {
      loginId: 'demo',
      password: 'demo'
    }
  }

  onSubmit = data => {
    try {
      this.props.login(data)
    } catch (error) {
      throw new SubmissionError({
        password: ['Invalid username or password'],
        _error: 'Login failed.'
      })
    }
  }

  render() {
    return (
      <div className="container">
        <Alert />
        <LoginForm onSubmit={this.onSubmit} initialValues={this.state.data} />
      </div>
    )
  }
}

LoginPage.propTypes = {
  // data: PropTypes.object,
  // errors: PropTypes.object,
  // setLoginData: PropTypes.func,
  // layout: PropTypes.instanceOf(Component),
  login: PropTypes.func,
}

export default compose(
  // BlankLayout,
  connect(
    undefined,
    dispatch => ({
      login: data => dispatch(actions.login(data)),
    })
  )
)(LoginPage)

