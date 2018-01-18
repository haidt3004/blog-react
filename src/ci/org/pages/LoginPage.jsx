import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import { getObjectValue } from '../../../common/helpers'
import Layout from '../../widgets/Layout'
import LoginForm from '../widgets/LoginForm'

class LoginPage extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = { isLogged: false }
  }

  componentDidMount() {
    this.props.layout.setTitle('Organisation Login Page')
  }

  onSubmit() {
    const { login, data } = this.props
    login(data)
      .then(() => this.setState({ isLogged: true }))
      .catch(() => null)
  }

  render() {
    const { data, errors, setLoginData } = this.props

    if (this.state.isLogged) {
      const from = getObjectValue(this.props, 'location.state.from',
        { pathname: '/org/profile' })
      return <Redirect to={from} />
    }

    return (
      <div>
        <LoginForm data={data} errors={errors} onSubmit={this.onSubmit} onChange={setLoginData} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.ci.organisation.login.data,
    errors: state.ci.organisation.login.errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(actions.login(data)),
    setLoginData: data => dispatch(actions.setLoginData(data)),
  }
}

LoginPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.object,
  login: PropTypes.func,
  setLoginData: PropTypes.func,
  layout: PropTypes.instanceOf(Component),
}

export default compose(
  Layout,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginPage)
