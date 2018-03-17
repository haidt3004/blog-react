import { combineReducers } from 'redux'

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

export default combineReducers({
  postList,
})