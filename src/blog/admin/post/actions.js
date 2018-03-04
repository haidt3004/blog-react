import { createAsyncAction, createAction } from '../../../common/helpers'
import { LOAD_POSTS, DELETE_POST, SET_POSTS } from './constants/actionTypes'

export const loadPosts = createAsyncAction(LOAD_POSTS)
export const setPosts = createAction(SET_POSTS)
export const deletePost = createAsyncAction(DELETE_POST)
