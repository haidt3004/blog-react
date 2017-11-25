import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import user from './auth'
import LoginPage from './LoginPage'
import DashboardPage from './DashboardPage'

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
  <Router>
    <div className="container">
      <AuthButton/>
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/admin">Admin Page</Link></li>
      </ul>
      <Route path="/public" component={Public}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/admin" component={DashboardPage}/>
    </div>
  </Router>
)

const AuthButton = withRouter(({ history }) => (
  user.isGuest() ? (
    <p>You are not logged in.</p>
  ): (
    <p>
      Welcome! {user.name} <button onClick={() => {
        user.logout().then(() => history.push('/'))
      }}>Sign out</button>
    </p>
  )
))

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

export default AuthExample