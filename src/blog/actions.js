import { createAction } from 'redux-actions'
import * as common from '../common/actions'

export const setPosts = createAction('SET_POSTS')
export const loadPosts = () => {
  return dispatch => {
    return dispatch(common.request({
      url: 'posts',
      method: 'get',
    })).then(response => {
      dispatch(setPosts(response.data))
    }).catch(() => null)
  }
}

export const deletePost = post => {
  return dispatch => {
    return dispatch(common.request({
      url: `posts/${post._id}`,
      method: 'delete',
    })).catch(() => null)
  }
}