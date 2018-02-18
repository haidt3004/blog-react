import { takeEvery, all, put } from 'redux-saga/effects'

import { SET_IDENTITY, LOAD_IDENTITY } from './constants/actionTypes'
import { setIdentity } from './actions'
import {
  saveIdentity,
  loadIdentity
} from './helpers'

function* saveIdentitySaga() {
  yield takeEvery(SET_IDENTITY, action => {
    saveIdentity(action.payload)
  })
}

function* loadIdentitySaga() {
  yield takeEvery(LOAD_IDENTITY, function* () {
    var identity = loadIdentity()
    if (identity) {
      yield put(setIdentity(identity))
    }
  })
}

export default function* commonSaga() {
  yield all([
    saveIdentitySaga(),
    loadIdentitySaga()
  ])
}