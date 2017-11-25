import React from 'react'
import { Redirect } from 'react-router-dom'
import user from './auth'

class LoginPage extends React.Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: {
        username:'user',
        password:'user'
      },
      redirectToReferrer: false
    }
  }

  login() {
    const { username, password } = this.state.data
    console.log(username, password);
    user.login(username, password)
      .then(() => {
        this.setState({ redirectToReferrer: true })
      }).catch(err => console.log(err))
  }

  handleChange(event) {
    const target = event.target;
    var data = this.state.data;
    data[target.name] = target.value;
    this.setState({ data: data });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    var data = this.state.data;
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <div className="form-group">
          <input type="text" name="username" className="form-control"
            value={data.username} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="password" name="password" className="form-control"
            value={data.password} onChange={this.handleChange} />
        </div>
        <button className="btn btn-primary" onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default LoginPage