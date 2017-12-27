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
  [actions.setAlert](state, {payload}) {
    return payload
  },

  [actions.clearAlert](state, action) {
    return { type: 'success', message: '' }
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