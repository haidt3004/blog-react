import * as common from '../common/actions'

export const setPosts = createAction('BLG/SET_POSTS')
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

export const setPost = createAction('BLG/SET_POST')
export const loadPost = id => {
  return dispatch => {
    return dispatch(common.request({
      url: `posts/${id}`,
      method: 'get',
    })).then(response => {
      dispatch(setPost(response.data))
    }).catch(() => null)
  }
}
