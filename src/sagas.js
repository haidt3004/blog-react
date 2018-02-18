import { all } from 'redux-saga/effects'
import commonSaga from './common/sagas'
import adminSaga from './admin/sagas'

export default function* rootSaga() {
  yield all([
    commonSaga(),
    adminSaga(),
  ])
}