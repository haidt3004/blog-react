import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from './actions'

const registration = handleActions({
  [actions.setRegData](state, {payload}) {
    return { ...state, data: payload }
  },
  [actions.setRegErrors](state, {payload}) {
    return { ...state, errors: payload }
  },
  [actions.setRegisteredUser](state, {payload}) {
    return { ...state, user: payload }
  },
}, {
  data: {},
  errors: null,
  user: {}
})

const login = handleActions({
  [actions.setLoginData](state, {payload}) {
    return { ...state, data: payload }
  },

  [actions.setLoginErrors](state, {payload}) {
    return { ...state, errors: payload }
  },
}, {
  data: {},
  errors: null,
})

export default combineReducers({
  registration,
  login
})