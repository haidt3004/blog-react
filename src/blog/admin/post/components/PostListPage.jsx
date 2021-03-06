import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { loadPosts, deletePost } from '../actions'
import { setTitle } from '../../../../common/actions'
import AdminLayout from '../../../../admin/hoc/AdminLayout'
import Spinner from '../../../../common/components/Spinner'

class PostListPage extends Component {

  async onDelete(post) {
    const { deletePost, loadPosts } = this.props
    if (confirm(`Are you sure to delete "${post.title}"?`)) {
      await deletePost(post)
      loadPosts()
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
        <p><Link to="/admin/posts/add" className="btn btn-success">Add</Link></p>
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
                        <Link to={`/admin/posts/edit/${post._id}`} className="btn btn-info btn-sm" title="Edit">
                          <i className="fa fa-edit"></i>
                        </Link>
                        <button className="btn btn-danger btn-sm" title="Delete"
                          onClick={() => this.onDelete(post)}>
                          <i className="fa fa-trash"></i>
                        </button>
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
  setTitle: PropTypes.func,
  posts: PropTypes.array,
  postsLoaded: PropTypes.bool,
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