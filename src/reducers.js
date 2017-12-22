import { combineReducers } from 'redux'
import common from './common/reducers'
import admin from './admin/reducers'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  common,
  admin,
  router: routerReducer,
})