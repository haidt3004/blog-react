import { createAction } from 'redux-actions'
import * as common from '../common/actions'
import { getObjectValue } from '../common/services/helper'
import { validateLoginData, validateProfileData } from './helpers'

export const setLoginData = createAction('SET_LOGIN_DATA')
export const setLoginErrors = createAction('SET_LOGIN_ERRORS')
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
      url: 'account/session',
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

export const setProfile = createAction('SET_PROFILE_DATA')
export const setSaveProfileErrors = createAction('SET_PROFILE_ERRORS')
export const loadProfile = () => {
  return dispatch => {
    return dispatch(common.request({
      url: 'users/profile',
      method: 'get',
    })).then(response => {
      dispatch(setProfile(response.data))
    }).catch(() => null)
  }
}

export const saveProfile = data => {
  return dispatch => {
    dispatch(setSaveProfileErrors(null))
    var errors = validateProfileData(data)
    if (errors) {
      dispatch(common.setError('Please correct your inputs.'))
      dispatch(setSaveProfileErrors(errors))
      return
    }

    return dispatch(common.request({
      url: 'users/profile',
      method: 'put',
      data
    })).then(response => {
      dispatch(common.setSuccess('Your profile has been updated successfully.'))
      dispatch(setProfile(response.data))
    }).catch(err => {
      dispatch(setSaveProfileErrors(getObjectValue(err, 'response.data.errors', null)))
    })
  }
}
