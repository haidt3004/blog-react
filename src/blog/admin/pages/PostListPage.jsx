import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import * as blog from '../../actions'
import LoginRequired from '../../../admin/widgets/LoginRequired'
import UserLayout from '../../../admin/widgets/UserLayout'
import Spinner from '../../../common/widgets/Spinner'

class PostListPage extends Component {

  componentDidMount() {
    this.props.loadPosts()
  }

  render() {
    const { posts, isLoading } = this.props
    return (
      <div>
        { isLoading ? <Spinner/> : null }
        <div className="box box-primary">
          <div className="box-body">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                </tr>
                { !isLoading && posts.map((post, index) => (
                  <tr key={post._id}>
                    <td>{index+1}</td>
                    <td>{post.title}</td>
                  </tr>
                )) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

PostListPage.propTypes = {
  isLoading: PropTypes.bool,
  loadPosts: PropTypes.func,
  posts: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    isLoading: state.common.isLoading,
    posts: state.blog.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: () => dispatch(blog.loadPosts()),
  }
}

export default compose(
  LoginRequired,
  UserLayout({ title: 'Posts' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PostListPage)