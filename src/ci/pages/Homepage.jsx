import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import Layout from '../widgets/Layout'

class HomePage extends Component {

  componentDidMount() {
    this.props.layout.setTitle('Home Page')
  }

  render() {
    return (
      <div>
        <div><Link to="/org/register"><RaisedButton label="Organisation Register" /></Link></div>
        <div><Link to="/org/login"><RaisedButton label="Organisation Login" /></Link></div>
      </div>
    )
  }
}

HomePage.propTypes = {
  layout: PropTypes.instanceOf(Component),
}

export default Layout(HomePage)
