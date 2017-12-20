import { combineReducers } from 'redux'
import common from './common/reducers'
import admin from './admin/reducers'

export default combineReducers({
  common,
  admin,
})