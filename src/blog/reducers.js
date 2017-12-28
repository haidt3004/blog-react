import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from './actions'
import adminReducer from './admin/reducers'

const postList = handleActions({
  [actions.setPosts](state, {payload}) {
    return { ...state, items: payload }
  },
}, {
  items: [],
})

const postDetail = handleActions({
  [actions.setPost](state, {payload}) {
    return { ...state, post: payload }
  },
}, {
  post: {},
})

export default combineReducers({
  postList,
  postDetail,
  admin: adminReducer,
})