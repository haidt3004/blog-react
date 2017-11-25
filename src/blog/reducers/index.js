import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'
import * as actions from '../actions'

const isLoading = createReducer({
    [actions.setLoading]: (state, payload) => {
        return payload
    },
}, false)

const alert = createReducer({
    [actions.setSuccess]: (state, payload) => {
        return { type:'success', message: payload }
    },
    [actions.setError]: (state, payload) => {
        return { type:'error', message: payload }
    },
}, {
    type: 'success',
    message: '',
})

const posts = createReducer({
    [actions.setPosts]: (state, payload) => {
        return payload
    },
}, null)

// const fetchPosts = createAsyncReducer(actions.fetchPosts)
// const fetchPost = createAsyncReducer(actions.fetchPost)
// const savePost = createAsyncReducer(actions.savePost)
// const deletePost = createAsyncReducer(actions.deletePost)

export default combineReducers({
    isLoading,
    alert,
    posts,
})