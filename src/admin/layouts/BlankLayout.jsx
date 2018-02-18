import 'bootstrap/dist/css/bootstrap.css'
import './BlankLayout.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import withErrorBoundary from '../../common/widgets/withErrorBoundary'
import ErrorPage from '../pages/ErrorPage'
import Alert from '../../common/widgets/Alert'

function withBlankLayout(WrappedComponent) {

  class BlankLayout extends Component {
    render() {
      const { isLoading, ...compProps } = this.props
      return (
        <div className="container">
          <Alert />
          <WrappedComponent layout={this} {...compProps} />
        </div>
      )
    }
  }

  BlankLayout.propTypes = {
    isLoading: PropTypes.bool,
  }

  BlankLayout.displayName = 'BlankLayout'
  return connect(mapStateToProps)(BlankLayout)
}

const mapStateToProps = state => {
  return {
    isLoading: state.common.isLoading.default,
  }
}

export default compose(
  withBlankLayout,
  withErrorBoundary(ErrorPage)
)
