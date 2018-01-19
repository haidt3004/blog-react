import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'

import Layout from '../../widgets/Layout'

class ProfilePage extends Component {

  componentDidMount() {
    this.props.layout.setTitle('Organisation profile page')
  }

  render() {
    return (
      <div>Comming soon...</div>
    )
  }
}

ProfilePage.propTypes = {
  layout: PropTypes.instanceOf(Component),
}

const mapStateToProps = state => {
  return {
  }
}

export default compose(
  Layout,
  connect(mapStateToProps)
)(ProfilePage)