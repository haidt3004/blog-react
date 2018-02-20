import { all } from 'redux-saga/effects'
import loginSaga from './login/sagas'
import profileSaga from './profile/sagas'

export default function* adminSaga() {
  yield all([
    loginSaga(),
    profileSaga(),
  ])
}