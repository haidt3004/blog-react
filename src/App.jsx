import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import store from './store'
import LoginPage from './admin/pages/LoginPage'

const history = createHistory()
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/admin/login" component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default App