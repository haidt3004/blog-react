import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AdminLayout from '../widgets/AdminLayout'

class NotFoundPage extends Component {
  componentDidMount() {
    this.props.layout.setTitle('Not found')
  }

  render() {
    return (
      <p>The feature you are looking for is not implemented yet.</p>
    )
  }
}

NotFoundPage.propTypes = {
  layout: PropTypes.instanceOf(Component),
}

export default AdminLayout(NotFoundPage)
