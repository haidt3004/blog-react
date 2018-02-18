import http from './http'
import { put, call } from 'redux-saga/effects'

import {
  requestStart,
  requestFinished,
  setError,
  clearIdentity
} from './actions'
import validate from 'validate.js'

/**
 * Get value of nested property by path
 *
 * @param {Mixed} obj
 * @param {String} path
 * @param {Mixed} defVal default value when the result is undefined
 */
export function getObjectValue(obj, keyPath, defVal) {
  var result = validate.getDeepObjectValue(obj, keyPath)
  return result ? result : defVal
}

export function saveIdentity(value) {
  saveItemToStorage('identity', value)
}

export function loadIdentity() {
  return loadItemFromStorage('identity')
}

export function validateIdentity(identity) {
  const { token: { value, expiredAt } } = identity
  if (!value) return false

  var now = new Date()
  var expired = expiredAt ? new Date(expiredAt) : null
  if (!expired || expired < now) return false

  return true
}

export function saveItemToStorage(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value))
}

export function loadItemFromStorage(name) {
  var str = window.localStorage.getItem(name)
  return str === null ? null : JSON.parse(str)
}

/**
 * Get component's display name
 *
 * @param {Component} Component
 */
export function getComponentName(Component) {
  return Component.displayName || Component.name || 'Component'
}

/**
 * Helper function used to create action creator function
 *
 * @param {String} type
 */
export function createAction(type) {
  return payload => ({ type, payload })
}

/**
 * Helper function used to create action creator function for asynchronous task
 *
 * @param {String} type
 */
export function createAsyncAction(type) {
  return payload => {
    var resolve, reject
    var promise = new Promise((rs, rj) => {
      resolve = rs
      reject = rj
    })

    return {
      type,
      payload,
      promise,
      resolve,
      reject
    }
  }
}

/**
 * make ajax request
 *
 * @param {Object} config
 */
export function* request(config) {
  const { requestName = 'default', ...axiosConfig } = config

  if (requestName) {
    yield put(requestStart(requestName))
  }

  // execute http request
  try {
    const response = yield call(http, axiosConfig)
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

    throw error
  }
}
