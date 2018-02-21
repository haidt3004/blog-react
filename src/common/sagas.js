import { takeEvery, takeLatest, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import * as actionTypes from './constants/actionTypes'
import { ALERT_DISPLAY_DURATION } from './constants/params'
import { setIdentity, clearAlert } from './actions'
import { setAccessToken } from './http'
import {
  saveIdentity as saveIdentityToLocalStorage,
  loadIdentity as loadIdentityFromLocalStorage
} from './helpers'

function* saveIdentity(action) {
  var identity = action.payload
  yield put(setIdentity(identity))
  saveIdentityToLocalStorage(identity)
  setAccessToken(identity.token.value)
}

function* loadIdentity() {
  var identity = loadIdentityFromLocalStorage()
  if (identity) {
    yield put(setIdentity(identity))
    setAccessToken(identity.token.value)
  }
}

function clearIdentity() {
  saveIdentityToLocalStorage(false)
  setAccessToken(false)
}

function* autoHideAlert() {
  yield delay(ALERT_DISPLAY_DURATION)
  yield put(clearAlert())
}

export default function* commonSaga() {
  yield takeEvery(actionTypes.SAVE_IDENTITY, saveIdentity)
  yield takeEvery(actionTypes.LOAD_IDENTITY, loadIdentity)
  yield takeEvery(actionTypes.CLEAR_IDENTITY, clearIdentity)
  yield takeLatest([actionTypes.SET_ERROR, actionTypes.SET_SUCCESS], autoHideAlert)
}