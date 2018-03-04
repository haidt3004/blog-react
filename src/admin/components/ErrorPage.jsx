import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Raven from '../../common/sentry'
import { setTitle } from '../../common/actions'

class ErrorPage extends Component {

  componentDidMount() {
    this.props.setTitle('Error')
  }

  render() {
    return (
      <p>Something went wrong. Click <a role="button" onClick={() => Raven.lastEventId() && Raven.showReportDialog()}>here</a> to report your problem.</p>
    )
  }
}

ErrorPage.propTypes = {
  error: PropTypes.object,
  info: PropTypes.object,
  setTitle: PropTypes.func,
}

export default connect(
  undefined,
  dispatch => ({
    setTitle: title => dispatch(setTitle(title)),
  })
)(ErrorPage)