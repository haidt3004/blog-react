import axios from 'axios'
import { put, call, takeEvery, select } from 'redux-saga/effects'

import {
  requestStart,
  requestFinished,
  setError,
  clearIdentity
} from './actions'
import * as actionTypes from './constants/actionTypes'
import * as params from './constants/params'
import { getObjectValue } from './helpers'

function* makeRequest(action) {
  const { requestName = 'default', ...setting } = action.payload

  // prepare axios config
  var config = {
    baseURL: params.API_URL,
    timeout: params.REQUEST_TIMEOUT,
    headers: {},
    ...setting
  }

  // add authorization header to request
  const token = yield select(state => getObjectValue(state, 'common.identity.token.value'))
  if (token) {
    config.headers['Authorization'] = `bearer ${token}`
  }

  if (requestName) {
    yield put(requestStart(requestName))
  }

  // execute http request
  try {
    const response = yield call(axios, config)
    yield put(requestFinished(requestName))
    return response
  } catch (error) {
    yield put(requestFinished(requestName))

    // display error message
    var message = 'An error occurred while processing your request'
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      var data = error.response.data
      message = typeof data === 'string' ? data : data.message
    } else if (error.request) {
      // The request was made but no response was received
      message = 'Error while connecting to server.'
    }
    yield put(setError(message))

    // clear identity and show login page on 401 response
    if (error.response && error.response.status === 401) {
      yield put(clearIdentity())
    }

    return error
  }
}

export default function* commonSaga() {
  yield takeEvery(actionTypes.REQUEST, makeRequest)
}