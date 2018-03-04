import { combineReducers } from 'redux'
import * as actionTypes from './constants/actionTypes'

/**
 * contain status of all ajax request (finished or not)
 * @param {Object} state
 * @param {Object} action
 */
function request(state = {}, action) {
  var requestName = action.payload
  switch (action.type) {
    case actionTypes.REQUEST_START:
      return { ...state, [requestName]: false }

    case actionTypes.REQUEST_FINISHED:
      return { ...state, [requestName]: true }

    default:
      return state
  }
}

const initialAlert = {
  type: 'success',
  message: ''
}

function alert(state = initialAlert, action) {
  switch (action.type) {

    case actionTypes.SET_ERROR:
      return { ...state, type: 'error', message: action.payload }

    case actionTypes.SET_SUCCESS:
      return { ...state, type: 'success', message: action.payload }

    case actionTypes.CLEAR_ALERT:
      return initialAlert

    default:
      return state
  }
}

const initialIdentity = {
  id: null,
  username: 'Guest',
  token: {
    value: '',
    expiredAt: ''
  }
}

function identity(state = initialIdentity, action) {
  switch (action.type) {

    case actionTypes.SET_IDENTITY:
      return action.payload

    case actionTypes.CLEAR_IDENTITY:
      return initialIdentity

    default:
      return state
  }
}

function title(state = '', action) {
  switch (action.type) {
    case actionTypes.SET_TITLE:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  identity,
  alert,
  request,
  title
})