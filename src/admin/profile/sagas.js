import { call, put, takeLatest } from 'redux-saga/effects'

import http from '../../common/http'
import { request } from '../../common/helpers'
import { setIdentity } from '../../common/actions'
import { LOGIN } from './constants/actionTypes'

function* login(action) {
  const { payload, resolve, reject } = action
  try {
    var response = yield call(request, {
      url: '/admin/session',
      method: 'post',
      data: payload
    })
    var identity = response.data

    // set default authorization header to http request
    http.defaults.headers.common['Authorization'] = `bearer ${identity.token.value}`

    // save identity to local storage
    yield put(setIdentity(identity))

    resolve(response)
  } catch (error) {
    reject(error)
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN, login)
}