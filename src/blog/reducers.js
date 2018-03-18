import { combineReducers } from 'redux'

import admin from './admin/reducers'
import { SET_POSTS } from './constants/actionTypes'

const initialPostListState = {
  items: []
}

function postList(state = initialPostListState, action) {
  switch (action.type) {
    case SET_POSTS:
      return { items: action.payload }
    default:
      return state
  }
}

// const postDetail = handleActions({
//   [actions.setPost](state, {payload}) {
//     return { ...state, post: payload }
//   },
// }, {
//   post: {},
// })

export default combineReducers({
  postList,
  // postDetail,
  admin,
})