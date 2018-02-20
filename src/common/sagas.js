import { takeEvery, takeLatest, all, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import * as actionTypes from './constants/actionTypes'
import { ALERT_AUTO_HIDE_DURATION } from './constants/params'
import { setIdentity, clearAlert } from './actions'
import { setAccessToken } from './http'
import {
  saveIdentity as saveIdentityToLocalStorage,
  loadIdentity as loadIdentityFromLocalStorage
} from './helpers'

function* saveIdentitySaga() {
  yield takeEvery(actionTypes.SAVE_IDENTITY, function* (action) {
    var identity = action.payload
    yield put(setIdentity(identity))
    saveIdentityToLocalStorage(identity)
    setAccessToken(identity.token.value)
  })
}

function* loadIdentitySaga() {
  yield takeEvery(actionTypes.LOAD_IDENTITY, function* () {
    var identity = loadIdentityFromLocalStorage()
    if (identity) {
      yield put(setIdentity(identity))
      setAccessToken(identity.token.value)
    }
  })
}

function* clearIdentitySaga() {
  yield takeEvery(actionTypes.CLEAR_IDENTITY, function () {
    saveIdentityToLocalStorage(false)
    setAccessToken(false)
  })
}

function* alertSaga() {
  yield takeLatest([actionTypes.SET_ERROR, actionTypes.SET_SUCCESS], function* () {
    yield delay(ALERT_AUTO_HIDE_DURATION)
    yield put(clearAlert())
  })
}

export default function* commonSaga() {
  yield all([
    saveIdentitySaga(),
    loadIdentitySaga(),
    clearIdentitySaga(),
    alertSaga(),
  ])
}