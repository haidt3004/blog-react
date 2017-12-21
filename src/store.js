import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers'
import { loadIdentity } from './common/services/helper'
import { setIdentity } from './common/actions'

// prepare preloaded state from local storage
const identity = loadIdentity()
const preloadedState = identity ? { common: { identity } } : undefined

// enable redux devtool chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// add the react-router-redux reducer to store on the `router` key
// also apply our middleware for navigating
const history = createHistory()
const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
    )
  )
)

export default store
