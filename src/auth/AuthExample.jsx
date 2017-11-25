import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton/>
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Route path="/public" component={Public}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/protected" component={Protected}/>
    </div>
  </Router>
)

/*
<Route path="/admin" component={AdminDashBoard} />
const AdminDashBoard = () => <h3>Admin Dashboard</h3>
export default authorizationRequired(AdminDashBoard, 'admin')
function authorizationRequired(Component, role) {
  user = fakeAuth
  const render = props => {
    if (user.isAuthenticated) {
      return user.role===role ?
        <Component {...props}/> :
        <ErrorPage message="You don't have permissions to access this page" />
      }}/>
    } else {
      return <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    }
  }

  return <Route {...rest} render={render}/>
}
*/

const PrivateRoute = ({ component: Component, ...rest }) => {
  const render = props => {
    if (fakeAuth.isAuthenticated) {
      return <Component {...props}/>
    } else {
      return <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    }
  }

  return <Route {...rest} render={render}/>
}

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.state = {
      redirectToReferrer: false
    }
  }

  login() {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

const fakeAuth = {
  isAuthenticated: false,
  role: 'guest',
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

export default AuthExample