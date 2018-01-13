import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from './actions'

const postList = handleActions({
  [actions.setPosts](state, {payload}) {
    return { ...state, items: payload }
  },
}, {
  items: [],
})

const postEdit = handleActions({
  [actions.setPost](state, {payload}) {
    return { ...state, post: payload, errors: null }
  },
  [actions.setPostErrors](state, {payload}) {
    return { ...state, errors: payload }
  },
}, {
  post: {},
  errors: null,
})

export default combineReducers({
  postList,
  postEdit
})