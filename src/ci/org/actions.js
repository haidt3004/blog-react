import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'
import * as common from '../../common/actions'
import { getObjectValue } from '../../common/helpers'
import { validateRegistrationData, validateLoginData } from './helpers'

export const setRegData = createAction('CI/ORG/SET_REG_DATA')
export const setRegErrors = createAction('CI/ORG/SET_REG_ERRORS')
export const setRegisteredUser = createAction('CI/ORG/SET_REGISTERED_USER')
export const submitRegistration = data => {
  return dispatch => {
    dispatch(setRegErrors(null))
    var errors = validateRegistrationData(data)
    if (errors) {
      dispatch(common.setError('Please correct your inputs.'))
      dispatch(setRegErrors(errors))
      return
    }

    return dispatch(common.request({
      url: 'ci/org/reg',
      method: 'post',
      data
    })).then(response => {
      dispatch(push('/org/reg/success'))
      dispatch(setRegisteredUser(response.data))
    }).catch(err => {
      dispatch(setRegErrors(getObjectValue(err, 'response.data.errors', null)))
    })
  }
}

export const setLoginData = createAction('CI/ORG/SET_LOGIN_DATA')
export const setLoginErrors = createAction('CI/ORG/SET_LOGIN_ERRORS')
export const login = data => {
  return dispatch => {
    dispatch(setLoginErrors(null))
    var errors = validateLoginData(data)
    if (errors) {
      dispatch(common.setError('Please correct your inputs.'))
      dispatch(setLoginErrors(errors))
      return Promise.reject(new Error('Invalid login information.'))
    }

    return dispatch(common.request({
      url: 'ci/org/session',
      method: 'post',
      data
    })).then(response => {
      dispatch(common.saveIdentity(response.data))
      return response
    }).catch(err => {
      dispatch(setLoginErrors(getObjectValue(err, 'response.data.errors', null)))
      // throw an error to tell outside that login is fail
      throw err
    })
  }
}