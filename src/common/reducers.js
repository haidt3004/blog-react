import { combineReducers } from 'redux'
import * as actionTypes from './constants/actionTypes'

function isLoading(state = {}, action) {
  switch (action.type) {
    case actionTypes.REQUEST_START:
      return { ...state, [action.payload]: true }

    case actionTypes.REQUEST_FINISHED:
      return { ...state, [action.payload]: false }

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

export default combineReducers({
  identity,
  alert,
  isLoading,
})