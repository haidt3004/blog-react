import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Raven from '../../common/sentry'

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

export default ErrorPage