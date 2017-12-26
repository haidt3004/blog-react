import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import * as blog from '../../actions'
import LoginRequired from '../../../admin/widgets/LoginRequired'
import UserLayout from '../../../admin/widgets/UserLayout'
import Spinner from '../../../common/widgets/Spinner'

class PostListPage extends Component {

  constructor(props) {
    super(props)
  }

  onEdit(post) {
    this.props.redirect(`/admin/posts/${post._id}`)
  }

  onDelete(post) {
    const { deletePost, loadPosts } = this.props
    if (confirm(`Are you sure to delete "${post.title}"?`)) {
      deletePost(post)
        .then(() => loadPosts())
    }
  }

  componentDidMount() {
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
                        <a className="btn btn-primary btn-xs" title="Edit" onClick={this.onEdit.bind(this, post)} role="button">
                          <span className="glyphicon glyphicon-edit"></span>
                        </a>
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
  isLoading: PropTypes.bool,
  loadPosts: PropTypes.func,
  deletePost: PropTypes.func,
  redirect: PropTypes.func,
  posts: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    isLoading: state.common.isLoading,
    posts: state.blog.postList.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: () => dispatch(blog.loadPosts()),
    deletePost: post => dispatch(blog.deletePost(post)),
    redirect: path => { dispatch(push(path)) },
  }
}

export default compose(
  LoginRequired,
  UserLayout,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PostListPage)