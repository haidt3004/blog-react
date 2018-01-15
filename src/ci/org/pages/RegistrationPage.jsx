import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Layout from '../../widgets/Layout'
import RegistrationForm from '../widgets/RegistrationForm'
import Spinner from '../../../common/widgets/Spinner'

class RegistrationPage extends Component {

  componentDidMount() {
    this.props.layout.setTitle('Organisation Registration')
  }

  render() {
    const { data, errors, setRegistrationData, submitRegistration, isLoading } = this.props
    return (
      <div>
        <RegistrationForm data={data} errors={errors} onSubmit={submitRegistration} onChange={setRegistrationData} />
        { isLoading && <Spinner/> }
      </div>
    )
  }
}

RegistrationPage.propTypes = {
  layout: PropTypes.instanceOf(Component),
  data: PropTypes.object,
  errors: PropTypes.object,
  setRegistrationData: PropTypes.func,
  submitRegistration: PropTypes.func,
  isLoading: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    errors: state.ci.organisation.registration.errors,
    data: state.ci.organisation.registration.data,
    isLoading: state.common.isLoading.default,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRegistrationData: data => dispatch(actions.setRegData(data)),
    submitRegistration: data => dispatch(actions.submitRegistration(data)),
  }
}

export default compose(
  Layout,
  connect(mapStateToProps, mapDispatchToProps)
)(RegistrationPage)