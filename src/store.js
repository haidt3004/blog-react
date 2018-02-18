import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers'
import rootSaga from './sagas'
import { loadIdentity } from './common/actions'

// enable redux devtool chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// add the react-router-redux reducer to store on the `router` key
// also apply our middleware for navigating
export const history = createHistory()

// add redux-saga middleware
const sagaMiddleware = createSagaMiddleware()

// create the store
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
)

// run saga
sagaMiddleware.run(rootSaga)

// load data from local storage to store on initializing
store.dispatch(loadIdentity())

export default store