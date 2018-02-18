import { put, takeLatest } from 'redux-saga/effects'
import { request } from '../../common/actions'
import { LOGIN } from './constants/actionTypes'

function* login(action) {
  try {
    var response = yield put(request({
      url: '/admin/session',
      method: 'post',
      data: action.payload
    }))
    return { response }
  } catch (error) {
    console.log('error catch')
    return { error }
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN, login)
}