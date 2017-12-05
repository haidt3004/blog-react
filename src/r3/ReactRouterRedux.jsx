import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router'

const history = createHistory()

const store = createStore(
  routerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(routerMiddleware(history)),
)


const BaseHome = ({goAbout}) => (
  <div>
    <h1>Home</h1>
    <p>
      <button type="button" onClick={goAbout}>About</button>
    </p>
  </div>
)
const Home = connect(null, dispatch => ({
  goAbout: () => {
    dispatch(push('/about'))
  }
}))(BaseHome)


const BaseAbout = ({goHome}) => (
  <div>
    <h1>About</h1>
    <p>
    <button type="button" onClick={goHome}>Home</button>
    </p>
  </div>
)
const About = connect(null, dispatch => ({
  goHome: () => {
    dispatch(push('/'))
  }
}))(BaseAbout)


const ReactRouterRedux = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default ReactRouterRedux