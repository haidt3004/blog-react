import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actions from '../actions'
import { getObjectValue } from '../../common/services/helper'
import Spinner from '../../common/widgets/Spinner'
import Alert from '../../common/widgets/Alert'
import withBaseLayout from '../layouts/withBaseLayout'
import LoginForm from '../widgets/LoginForm'

class LoginPage extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = { isLogged: false }
  }

  onSubmit(data) {
    this.props.login(data)
      .then(() => this.setState({ isLogged: true }))
      .catch(() => null)
  }

  render() {
    const { data, errors, isLoading, setLoginData } = this.props

    if (this.state.isLogged) {
      const from = getObjectValue(this.props, 'location.state.from', { pathname: '/' })
      return <Redirect to={from} />
    }

    return (
      <div className="login-box">
        <div className="login-logo">
          <a role="button"><strong>Notebook</strong></a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">
            Sign in to start your session
            {isLoading ? <Spinner /> : null}
          </p>
          <Alert />
          <LoginForm data={data} errors={errors} onSubmit={this.onSubmit} onChange={setLoginData} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.admin.login.data,
    errors: state.admin.login.errors,
    isLoading: state.common.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(actions.login(data)),
    setLoginData: data => dispatch(actions.setLoginData(data)),
  }
}

export default withBaseLayout(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage))