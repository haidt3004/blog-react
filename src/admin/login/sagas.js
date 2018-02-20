import { call, put, takeLatest } from 'redux-saga/effects'

import { request } from '../../common/helpers'
import { saveIdentity } from '../../common/actions'
import { LOGIN } from './constants/actionTypes'

function* login(action) {
  const { payload, resolve, reject } = action
  try {
    var response = yield call(request, {
      url: '/admin/session',
      method: 'post',
      data: payload
    })

    yield put(saveIdentity(response.data))
    resolve(response)
  } catch (error) {
    reject(error)
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN, login)
}