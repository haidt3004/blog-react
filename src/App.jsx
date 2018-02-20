import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

// import HomePage from './blog/pages/HomePage'
// import PostListPage from './blog/admin/pages/PostListPage'
// import PostEditPage from './blog/admin/pages/PostEditPage'
// import PostDetailPage from './blog/pages/PostDetailPage'
// import NotFoundPage from './admin/pages/NotFoundPage'
import LoginPage from './admin/login/components/LoginPage'
import ProfilePage from './admin/profile/components/ProfilePage'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {/* <Route path="/" component={HomePage} exact /> */}
        {/* <Route path="/post/:id" component={PostDetailPage} /> */}
        {/* <Route path="/admin" component={ProfilePage} exact /> */}
        <Route path="/admin/login" component={LoginPage} />
        <Route path="/admin/profile" component={ProfilePage} />
        {/* <Route path="/admin/posts" component={PostListPage} exact /> */}
        {/* <Route path="/admin/posts/edit/:id" component={PostEditPage} /> */}
        {/* <Route path="/admin/posts/add" component={PostEditPage} /> */}
        {/* <Route path="/admin" component={NotFoundPage} /> */}
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default App