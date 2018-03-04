import { combineReducers } from 'redux'
import admin from './admin/reducers'

// const postList = handleActions({
//   [actions.setPosts](state, {payload}) {
//     return { ...state, items: payload }
//   },
// }, {
//   items: [],
// })

// const postDetail = handleActions({
//   [actions.setPost](state, {payload}) {
//     return { ...state, post: payload }
//   },
// }, {
//   post: {},
// })

export default combineReducers({
  // postList,
  // postDetail,
  admin,
})