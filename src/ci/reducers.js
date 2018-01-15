import { combineReducers } from 'redux'
// import { handleActions } from 'redux-actions'
import orgReducer from './org/reducers'

export default combineReducers({
  organisation: orgReducer,
})