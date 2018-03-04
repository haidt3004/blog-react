import { all } from 'redux-saga/effects'
import postSaga from './post/sagas'

export default function* adminSaga() {
  yield all([
    postSaga(),
  ])
}