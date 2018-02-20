import { call, takeLatest } from 'redux-saga/effects'

import { request } from '../../common/helpers'
import { LOAD_PROFILE } from './constants/actionTypes'

function* loadProfile(action) {
  const { resolve, reject } = action
  try {
    var response = yield call(request, {
      url: 'admin/account',
      method: 'get',
    })
    resolve(response)
  } catch (error) {
    reject(error)
  }
}

export default function* profileSaga() {
  yield takeLatest(LOAD_PROFILE, loadProfile)
}