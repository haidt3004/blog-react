import { takeEvery, takeLatest, all, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { SET_IDENTITY, LOAD_IDENTITY, SET_ERROR, SET_SUCCESS } from './constants/actionTypes'
import { ALERT_AUTO_HIDE_DURATION } from './constants/params'
import { setIdentity, clearAlert } from './actions'
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

function* alertSaga() {
  yield takeLatest([SET_ERROR, SET_SUCCESS], function* () {
    yield delay(ALERT_AUTO_HIDE_DURATION)
    yield put(clearAlert())
  })
}

export default function* commonSaga() {
  yield all([
    saveIdentitySaga(),
    loadIdentitySaga(),
    alertSaga(),
  ])
}