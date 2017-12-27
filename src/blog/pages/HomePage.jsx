import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import PublicLayout from '../widgets/PublicLayout'
import Spinner from '../../common/widgets/Spinner'

class HomePage extends Component {

  componentDidMount() {
    this.props.layout.setTitle('Latest posts')
  }

  render() {
    return (
      <div>
        posts
      </div>
    )
  }
}

HomePage.propTypes = {
  layout: PropTypes.instanceOf(Component),
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default compose(
  PublicLayout,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage)