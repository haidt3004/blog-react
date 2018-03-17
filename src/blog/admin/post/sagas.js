import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { request } from '../../../common/helpers'
import { setSuccess } from '../../../common/actions'
import { LOAD_POSTS, DELETE_POST, LOAD_POST, SAVE_POST } from './constants/actionTypes'
import { setPosts } from './actions'

function* loadPosts(action) {
  const { resolve, reject } = action
  try {
    var response = yield call(request, {
      url: 'admin/posts',
      method: 'get',
      requestName: 'loadPosts'
    })
    yield put(setPosts(response.data))
    resolve(response)
  } catch (error) {
    reject(error)
  }
}

function* deletePost(action) {
  const { resolve, reject, payload: post } = action
  try {
    var response = yield call(request, {
      url: `admin/posts/${post._id}`,
      method: 'delete',
    })
    yield put(setSuccess('Post has been removed successfully'))
    resolve(response)
  } catch (error) {
    reject(error)
  }
}

function* loadPost(action) {
  const { resolve, reject, payload: id } = action
  try {
    var response = yield call(request, {
      url: `admin/posts/${id}`,
      method: 'get',
      requestName: 'loadPost'
    })
    resolve(response)
  } catch (error) {
    reject(error)
  }
}

function* savePost(action) {
  const { resolve, reject, payload: { id, ...data } } = action
  try {
    var response = yield call(request, {
      url: id ? `admin/posts/${id}` : 'admin/posts',
      method: id ? 'put' : 'post',
      data
    })
    yield put(setSuccess('Data has been saved successfully'))
    yield put(push('/admin/posts'))
    resolve(response)
  } catch (error) {
    reject(error)
  }
}

export default function* postSaga() {
  yield takeLatest(LOAD_POSTS, loadPosts)
  yield takeLatest(DELETE_POST, deletePost)
  yield takeLatest(LOAD_POST, loadPost)
  yield takeLatest(SAVE_POST, savePost)
}