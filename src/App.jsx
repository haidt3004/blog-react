import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from './store'
import LoginPage from './admin/pages/LoginPage'
import ProfilePage from './admin/pages/ProfilePage'
import PostListPage from './blog/admin/pages/PostListPage'
import PostEditPage from './blog/admin/pages/PostEditPage'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/admin/login" component={LoginPage} />
        <Route path="/admin/profile" component={ProfilePage} />
        <Route path="/admin/posts/:id" component={PostEditPage} />
        <Route path="/admin/posts" component={PostListPage} exact />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default App