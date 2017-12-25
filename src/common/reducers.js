import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from './actions'

const defaultIdentity = {
  id: null,
  username: 'Guest',
  token: {
    value: '',
    expiredAt: ''
  }
}

const identity = handleActions({
  [actions.setIdentity](state, {payload}) {
    return payload ? payload : defaultIdentity
  }
}, defaultIdentity)

const alert = handleActions({
  [actions.setError](state, {payload}) {
    return { type: 'error', message: payload }
  },

  [actions.setSuccess](state, {payload}) {
    return { type: 'success', message: payload }
  },
}, {
  type: 'success',
  message: ''
})

const isLoading = handleActions({
  [actions.setLoading](state, {payload}) {
    return payload
  },
}, false)

export default combineReducers({
  identity,
  alert,
  isLoading,
})