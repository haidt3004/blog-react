import { createAction } from 'redux-actions'
import axios from 'axios'
import { getObjectValue, saveIdentityToStorage, delay } from './helpers'

export const setLoading = createAction('SET_IS_LOADING')

export const setAlert = createAction('SET_ALERT')
export const clearAlert = createAction('CLEAR_ALERT')
export const setError = message => dispatch => {
  dispatch(setAlert({ type: 'error', message }))
  delay(3000)
    .then(() => dispatch(clearAlert()))
}
export const setSuccess = message => dispatch => {
  dispatch(setAlert({ type: 'success', message }))
  delay(3000)
    .then(() => dispatch(clearAlert()))
}

export const setIdentity = createAction('SET_IDENTITY')
export const saveIdentity = identity => dispatch => {
  saveIdentityToStorage(identity)
  dispatch(setIdentity(identity))
}
export const clearIdentity = () => dispatch => {
  dispatch(saveIdentity(null))
}

/**
 * Thunk action that perform http request
 * For configuration, see: https://github.com/axios/axios#request-config
 *
 * @param {Object} config
 */
export const request = ({ progress=true, ...config }) => {
  return (dispatch, getState) => {
    // prepare config
    var axiosCfg = {
      baseURL: '/api/',
      timeout: 3000,
      headers: {},
      ...config
    }
    var token = getObjectValue(getState(), 'common.identity.token.value')
    if (token) {
      axiosCfg.headers['x-access-token'] = token
    }

    if (progress) dispatch(setLoading(true))
    return axios(axiosCfg)
      .then(response => {
        if (progress) dispatch(setLoading(false))
        return response
      }).catch(error => {
        if (progress) dispatch(setLoading(false))
        // display error message
        var message = 'An error occurred while processing your request'
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          var data = error.response.data
          message = typeof data==='string' ? data : data.message
        } else if (error.request) {
          // The request was made but no response was received
          message = 'Error while connecting to server.'
        }
        dispatch(setError(message))

        // handle 401 unauthorized response
        if  (error.response && error.response.status===401)
          dispatch(clearIdentity())

        throw error
      })
  }
}
