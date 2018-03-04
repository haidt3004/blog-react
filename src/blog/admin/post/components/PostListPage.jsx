import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import AdminLayout from '../../../../admin/hoc/AdminLayout'
import { setTitle } from '../../../../common/actions'
import { loadPosts, deletePost } from '../actions'
import Spinner from '../../../../common/widgets/Spinner'

class PostListPage extends Component {

  onDelete(post) {
    const { deletePost, loadPosts } = this.props
    if (confirm(`Are you sure to delete "${post.title}"?`)) {
      deletePost(post)
        .then(() => loadPosts())
    }
  }

  componentDidMount() {
    this.props.setTitle('Post')
    this.props.loadPosts()
  }

  render() {
    const { posts, postsLoaded } = this.props
    return (
      <div>
        <p><Link to="/admin/post/add" className="btn btn-success">Add</Link></p>
        {postsLoaded ? (
          <div className="x_panel">
            <div className="x_content">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, index) => (
                    <tr key={post._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{post.title}</td>
                      <td>
                        <button className="btn btn-danger btn-sm" title="Delete">
                          <i className="fa fa-trash"></i>
                        </button>
                        <Link to={`/admin/posts/${post._id}`} className="btn btn-info btn-sm" title="Edit">
                          <i className="fa fa-edit"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : <Spinner />}
      </div>
    )
  }
}

PostListPage.propTypes = {
  loadPosts: PropTypes.func,
  deletePost: PropTypes.func,
}

export default compose(
  AdminLayout,
  connect(
    state => ({
      postsLoaded: state.common.request.loadPosts,
      posts: state.blog.admin.post.postList.items
    }),
    dispatch => ({
      setTitle: title => dispatch(setTitle(title)),
      loadPosts: () => dispatch(loadPosts()),
      deletePost: post => dispatch(deletePost(post)),
    })
  )
)(PostListPage)