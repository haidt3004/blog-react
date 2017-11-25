import { createAction } from 'redux-act'
import * as Post from '../services/Post'

export const setLoading = createAction('SHOW_LOADING')
export const setSuccess = createAction('SHOW_SUCCESS')
export const setError = createAction('SHOW_ERROR')

export const setPosts = createAction('SET_POSTS')
export const fetchPosts = () => dispatch => {
    dispatch(setLoading(true))
    return Post.find().then(
        posts => {
            dispatch(setLoading(false))
            dispatch(setPosts(posts))
        },
        error => {
            dispatch(setLoading(false))
            dispatch(setError(error.message))
            return Promise.reject(error)
        }
    )
}

export const deletePost = id => dispatch => {
    dispatch(setLoading(true))
    return Post.remove(id).then(
        () => {
            dispatch(fetchPosts())
            .then(() => dispatch(setSuccess('Post deleted.')))
        },
        error => {
            dispatch(setLoading(false))
            dispatch(setError(error.message))
            return Promise.reject(error)
        }
    )
}

// export const fetchPosts = createAsyncAction('FETCH_POSTS', () => Post.find())
// export const fetchPost = createAsyncAction('FETCH_POST', id => Post.get(id))
// export const savePost = createAsyncAction('SAVE_POST', data => Post.save(data))
