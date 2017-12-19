import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

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
    <h1>About 1</h1>
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

const Advanced = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default Advanced