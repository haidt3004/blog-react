import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  IndexRoute,
  browserHistory
} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import PostListPage from './containers/PostListPage'
import PostEditPage from './containers/PostEditPage'
import MainLayout from './components/MainLayout'

const Module = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <MainLayout>
        <Switch>
          <Route path="/" component={PostListPage} exact />
          <Route path="/post/edit/:id" component={PostEditPage} />
          <Route path="/post/add" component={PostEditPage} />
          <Route path="/post" component={PostListPage} />
        </Switch>
      </MainLayout>
    </Router>
  </Provider>
)

export default Module