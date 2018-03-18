import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import AdminLayout from '../hoc/AdminLayout'
import { setTitle } from '../../common/actions'

class NotFoundPage extends Component {
  componentDidMount() {
    this.props.setTitle('Not found')
  }

  render() {
    return (
      <p>The feature you are looking for is not implemented yet.</p>
    )
  }
}

NotFoundPage.propTypes = {
  layout: PropTypes.instanceOf(Component),
  setTitle: PropTypes.func,
}

export default compose(
  AdminLayout,
  connect(
    undefined,
    dispatch => ({
      setTitle: title => dispatch(setTitle(title)),
    })
  )
)(NotFoundPage)
