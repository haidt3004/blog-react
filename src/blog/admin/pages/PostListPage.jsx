import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import LoginRequired from '../../../admin/widgets/LoginRequired'
import AdminLayout from '../../../admin/widgets/AdminLayout'
import Spinner from '../../../common/widgets/Spinner'

class PostListPage extends Component {

  constructor(props) {
    super(props)
  }

  onDelete(post) {
    const { deletePost, loadPosts } = this.props
    if (confirm(`Are you sure to delete "${post.title}"?`)) {
      deletePost(post)
        .then(() => loadPosts())
    }
  }

  componentDidMount() {
    this.props.layout.setTitle('Posts')
    this.props.loadPosts()
  }

  render() {
    const { posts, isLoading } = this.props
    return (
      <div>
        { isLoading ? <Spinner/> : null }
        { !isLoading && (
          <div className="box box-primary">
            <div className="box-body">
              <p><Link to="/admin/posts/add" className="btn btn-success">
                <span className="glyphicon glyphicon-plus-sign"></span>&nbsp;Add
              </Link></p>

              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th></th>
                  </tr>
                  { posts.map((post, index) => (
                    <tr key={post._id}>
                      <td>{index+1}</td>
                      <td>{post.title}</td>
                      <td>
                        <Link to={`/admin/posts/edit/${post._id}`} className="btn btn-primary btn-xs" title="Edit">
                          <span className="glyphicon glyphicon-edit"></span>
                        </Link>
                        &nbsp;
                        <a className="btn btn-danger btn-xs" title="Edit" onClick={this.onDelete.bind(this, post)} role="button">
                          <span className="glyphicon glyphicon-trash"></span>
                        </a>
                      </td>
                    </tr>
                  )) }
                </tbody>
              </table>
            </div>
          </div>
        ) }
      </div>
    )
  }
}

PostListPage.propTypes = {
  layout: PropTypes.instanceOf(Component),
  isLoading: PropTypes.bool,
  posts: PropTypes.array,
  loadPosts: PropTypes.func,
  deletePost: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    isLoading: state.common.isLoading,
    posts: state.blog.admin.postList.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: () => dispatch(actions.loadPosts()),
    deletePost: post => dispatch(actions.deletePost(post)),
  }
}

export default compose(
  LoginRequired,
  AdminLayout,
  connect(mapStateToProps, mapDispatchToProps)
)(PostListPage)