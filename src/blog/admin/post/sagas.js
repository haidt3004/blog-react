import { call, put, takeLatest } from 'redux-saga/effects'

import { request } from '../../../common/helpers'
import { setSuccess } from '../../../common/actions'
import { LOAD_POSTS, DELETE_POST } from './constants/actionTypes'
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
  const { resolve, reject, payload } = action
  try {
    var response = yield call(request, {
      url: `admin/posts/${payload}`,
      method: 'put',
    })
    yield put(setSuccess('Post has been removed successfully'))
    resolve(response)
  } catch (error) {
    reject(error)
  }
}

export default function* profileSaga() {
  yield takeLatest(LOAD_POSTS, loadPosts)
  yield takeLatest(DELETE_POST, deletePost)
}