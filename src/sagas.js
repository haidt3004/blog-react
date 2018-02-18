import { all } from 'redux-saga/effects'
import adminSaga from './admin/sagas'
import commonSaga from './common/sagas'

export default function* rootSaga() {
  yield all([
    commonSaga(),
    adminSaga(),
  ])
}