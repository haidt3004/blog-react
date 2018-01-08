import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from './store'
// import HomePage from './blog/pages/HomePage'
// import PostDetailPage from './blog/pages/PostDetailPage'
// import LoginPage from './admin/pages/LoginPage'
// import ProfilePage from './admin/pages/ProfilePage'
// import PostListPage from './blog/admin/pages/PostListPage'
// import PostEditPage from './blog/admin/pages/PostEditPage'
import MaterialUIDemo from './mate/BlankLayout'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={MaterialUIDemo} exact />
        {/* <Route path="/post/:id" component={PostDetailPage} />
        <Route path="/admin/login" component={LoginPage} />
        <Route path="/admin/profile" component={ProfilePage} />
        <Route path="/admin/posts" component={PostListPage} exact />
        <Route path="/admin/posts/edit/:id" component={PostEditPage} />
        <Route path="/admin/posts/add" component={PostEditPage} /> */}
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default App