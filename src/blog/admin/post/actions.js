import { createAsyncAction, createAction } from '../../../common/helpers'
import { LOAD_POSTS, DELETE_POST, SET_POSTS, LOAD_POST, SAVE_POST } from './constants/actionTypes'

export const loadPosts = createAsyncAction(LOAD_POSTS)
export const setPosts = createAction(SET_POSTS)
export const deletePost = createAsyncAction(DELETE_POST)
export const loadPost = createAsyncAction(LOAD_POST)
export const savePost = createAsyncAction(SAVE_POST)