import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import common from './common/reducers'
// import blog from './blog/reducers'

export default combineReducers({
  common,
  // blog,
  router: routerReducer,
  form: formReducer
})