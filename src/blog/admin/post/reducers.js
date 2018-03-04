import { combineReducers } from 'redux'

import { SET_POSTS, DELETE_POST } from './constants/actionTypes'

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

function postEdit(state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  postList,
  postEdit
})