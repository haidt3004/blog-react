import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import * as blog from '../../actions'
import LoginRequired from '../../../admin/widgets/LoginRequired'
import UserLayout from '../../../admin/widgets/UserLayout'
import Spinner from '../../../common/widgets/Spinner'
import PostForm from '../widgets/PostForm'

class PostEditPage extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    const { loadPost, match } = this.props
    var postId = match.params.id
    if (postId) {
      loadPost(postId)
    }
  }

  onSubmit(data) {
    const { savePost, match } = this.props
    var postId = match.params.id
    if (postId) {
      savePost(data, postId)
    } else {
      savePost(data)
    }
  }

  render() {
    const { post, errors, isLoading, isSaving, setPost } = this.props
    return (
      <div>
        { isLoading || isSaving ? <Spinner/> : null }
        { !isLoading && (
          <div className="box box-primary">
            <div className="box-body">
              <PostForm data={post} errors={errors} onSubmit={this.onSubmit} onChange={setPost} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

PostEditPage.propTypes = {
  loadPost: PropTypes.func,
  setPost: PropTypes.func,
  savePost: PropTypes.func,
  redirect: PropTypes.func,
  isLoading: PropTypes.bool,
  isSaving: PropTypes.bool,
  post: PropTypes.object,
  errors: PropTypes.object,
  match: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    isLoading: state.common.isLoading,
    post: state.blog.postEdit.post,
    errors: state.blog.postEdit.errors,
    isSaving: state.blog.postEdit.isSaving,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPost: id => dispatch(blog.loadPost(id)),
    setPost: data => dispatch(blog.setPost(data)),
    savePost: (data, id) => dispatch(blog.savePost(data, id)),
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
)(PostEditPage)