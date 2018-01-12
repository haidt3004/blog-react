import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from './store'
import LoginPage from './admin/pages/LoginPage'
import ProfilePage from './admin/pages/ProfilePage'
// import HomePage from './blog/pages/HomePage'
// import PostDetailPage from './blog/pages/PostDetailPage'
// import PostListPage from './blog/admin/pages/PostListPage'
// import PostEditPage from './blog/admin/pages/PostEditPage'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={ProfilePage} exact/>
        <Route path="/admin/login" component={LoginPage} />
        <Route path="/admin/profile" component={ProfilePage} />
        {/* <Route path="/admin/posts" component={PostListPage} exact /> */}
        {/* <Route path="/admin/posts/edit/:id" component={PostEditPage} /> */}
        {/* <Route path="/admin/posts/add" component={PostEditPage} /> */}
        {/* <Route path="/post/:id" component={PostDetailPage} /> */}
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default App