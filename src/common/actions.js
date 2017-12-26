import { createAction } from 'redux-actions'
import axios from 'axios'
import * as helper from './helpers'

export const setLoading = createAction('SET_IS_LOADING')
export const setError = createAction('SET_ERROR')
export const setSuccess = createAction('SET_SUCCESS')
export const setIdentity = createAction('SET_IDENTITY')

export const saveIdentity = identity => {
  return dispatch => {
    helper.saveIdentity(identity)
    dispatch(setIdentity(identity))
  }
}

export const clearIdentity = () => {
  return dispatch => {
    helper.saveIdentity(null)
    dispatch(setIdentity(null))
  }
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
    var token = helper.getObjectValue(getState(), 'common.identity.token.value')
    if (token) {
      axiosCfg.headers['x-access-token'] = token
    }

    if (progress) dispatch(setLoading(true))
    dispatch(setError(''))

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
