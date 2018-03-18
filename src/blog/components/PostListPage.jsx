import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { loadPosts } from '../actions'
import { setTitle } from '../../common/actions'
// import PublicLayout from '../hoc/PublicLayout'
import Spinner from '../../common/components/Spinner'

class PostListPage extends Component {

  componentDidMount() {
    this.props.setTitle('Latest posts')
    this.props.loadPosts()
  }

  render() {
    const { posts, postsLoaded } = this.props
    return (
      <div>
        {postsLoaded ?
          posts.map(post => (
            <div className="post" key={post._id}>
              <h3><Link to={`/post/${post._id}`}>{post.title}</Link></h3>
              <p>{post.content}</p>
            </div>
          )) :
          <Spinner />
        }
      </div>
    )
  }
}

PostListPage.propTypes = {
  loadPosts: PropTypes.func,
  postsLoaded: PropTypes.bool,
  posts: PropTypes.array,
  setTitle: PropTypes.func,
}


export default compose(
  // PublicLayout,
  connect(
    state => ({
      postsLoaded: state.common.request.loadPosts,
      posts: state.blog.postList.items
    }),
    dispatch => ({
      setTitle: title => dispatch(setTitle(title)),
      loadPosts: () => dispatch(loadPosts()),
    })
  )
)(PostListPage)
