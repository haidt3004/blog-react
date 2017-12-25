import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import store from './store'
import LoginPage from './admin/pages/LoginPage'
import ProfilePage from './admin/pages/ProfilePage'
import PostListPage from './blog/admin/pages/PostListPage'

const history = createHistory()
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/admin/login" component={LoginPage} />
        <Route path="/admin/profile" component={ProfilePage} />
        <Route path="/admin/posts" component={PostListPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default App