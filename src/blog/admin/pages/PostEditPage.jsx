import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import LoginRequired from '../../../admin/widgets/LoginRequired'
import AdminLayout from '../../../admin/widgets/AdminLayout'
import Spinner from '../../../common/widgets/Spinner'
import PostForm from '../widgets/PostForm'

class PostEditPage extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    const { layout, loadPost, match, setPost } = this.props
    var postId = match.params.id
    if (postId) {
      layout.setTitle('Edit Post')
      loadPost(postId)
    } else {
      layout.setTitle('Add Post')
      setPost({})
    }
  }

  onSubmit(data) {
    const { savePost, match } = this.props
    var postId = match.params.id
    savePost(data, postId)
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
  layout: PropTypes.instanceOf(Component),
  loadPost: PropTypes.func,
  setPost: PropTypes.func,
  savePost: PropTypes.func,
  isLoading: PropTypes.bool,
  isSaving: PropTypes.bool,
  post: PropTypes.object,
  errors: PropTypes.object,
  match: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    isLoading: state.common.isLoading,
    post: state.blog.admin.postEdit.post,
    errors: state.blog.admin.postEdit.errors,
    isSaving: state.blog.admin.postEdit.isSaving,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPost: id => dispatch(actions.loadPost(id)),
    setPost: data => dispatch(actions.setPost(data)),
    savePost: (data, id) => dispatch(actions.savePost(data, id)),
  }
}

export default compose(
  LoginRequired,
  AdminLayout,
  connect(mapStateToProps, mapDispatchToProps)
)(PostEditPage)