import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import PublicLayout from '../widgets/PublicLayout'
import Spinner from '../../common/widgets/Spinner'

class HomePage extends Component {

  componentDidMount() {
    this.props.layout.setTitle('Latest posts')
    this.props.loadPosts()
  }

  render() {
    const { posts, isLoading } = this.props
    return (
      <div>
        { isLoading ? <Spinner/> : null }
        { !isLoading && posts.map((post, index) => (
          <div className="post" key={post._id}>
            <h3><Link to={`/post/${post._id}`}>{post.title}</Link></h3>
            <p>{post.content}</p>
          </div>
        )) }
      </div>
    )
  }
}

HomePage.propTypes = {
  layout: PropTypes.instanceOf(Component),
  isLoading: PropTypes.bool,
  posts: PropTypes.array,
  loadPosts: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    isLoading: state.common.isLoading.loadPosts,
    posts: state.blog.postList.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: () => dispatch(actions.loadPosts()),
  }
}

export default compose(
  PublicLayout,
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage)