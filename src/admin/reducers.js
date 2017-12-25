import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from './actions'

const login = handleActions({
  [actions.setLoginData](state, {payload}) {
    return { ...state, data: payload }
  },

  [actions.setLoginErrors](state, {payload}) {
    return { ...state, errors: payload }
  },
}, {
  data: {
    loginId: 'admin@m.m',
    password: '123123',
    remember: true,
  },
  errors: null,
})

const profile = handleActions({
  [actions.setProfile](state, {payload}) {
    return { ...state, data: payload }
  },

  [actions.setSaveProfileErrors](state, {payload}) {
    return { ...state, errors: payload }
  },
}, {
  data: null,
  errors: null
})

export default combineReducers({
  login,
  profile
})