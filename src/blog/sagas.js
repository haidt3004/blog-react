import { all } from 'redux-saga/effects'

import adminSaga from './admin/sagas'

export default function* blogSaga() {
  yield all([
    adminSaga(),
  ])
}