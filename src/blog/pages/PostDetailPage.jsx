import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import PublicLayout from '../widgets/PublicLayout'
import Spinner from '../../common/widgets/Spinner'

class PostDetailPage extends Component {

  componentDidMount() {
    const { layout, loadPost, match } = this.props
    loadPost(match.params.id)
      .then(() => layout.setTitle(this.props.post.title))
  }

  render() {
    const { post, isLoading } = this.props
    return (
      <div>
        { isLoading ?
          <Spinner/> : (
            <div>
              <h1>{post.title}</h1>
              <div>{post.content}</div>
            </div>
          )
        }
      </div>
    )
  }
}

PostDetailPage.propTypes = {
  layout: PropTypes.instanceOf(Component),
  isLoading: PropTypes.bool,
  post: PropTypes.object,
  loadPost: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    isLoading: state.common.isLoading.loadPost,
    post: state.blog.postDetail.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPost: id => dispatch(actions.loadPost(id)),
  }
}

export default compose(
  PublicLayout,
  connect(mapStateToProps, mapDispatchToProps)
)(PostDetailPage)