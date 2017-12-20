import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import store from './store'
const history = createHistory()

const Home = () => (<p>abc</p>)

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default App