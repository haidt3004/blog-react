import { all, call, put, takeLatest } from 'redux-saga/effects'

import adminSaga from './admin/sagas'
import { request } from '../common/helpers'
import { setPosts } from './actions'
import { LOAD_POSTS } from './constants/actionTypes'

function* loadPosts(action) {
  const { resolve, reject } = action
  try {
    var response = yield call(request, {
      url: '/posts',
      method: 'get',
      requestName: 'loadPosts'
    })
    yield put(setPosts(response.data))
    resolve(response)
  } catch (error) {
    reject(error)
  }
}

function* postSaga() {
  yield takeLatest(LOAD_POSTS, loadPosts)
}

export default function* blogSaga() {
  yield all([
    postSaga(),
    adminSaga(),
  ])
}