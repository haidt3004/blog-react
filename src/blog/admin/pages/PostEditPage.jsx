import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import LoginRequired from '../../../admin/widgets/LoginRequired'
import AdminLayout from '../../../admin/widgets/AdminLayout'
import CircularProgress from 'material-ui/CircularProgress'
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
    const { post, errors, isLoading, setPost } = this.props
    return (
      <div>
        { isLoading ? <CircularProgress/> : null }
        { !isLoading && (
          <PostForm data={post} errors={errors} onSubmit={this.onSubmit} onChange={setPost} />
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
  post: PropTypes.object,
  errors: PropTypes.object,
  match: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    isLoading: state.common.isLoading.loadPost,
    post: state.blog.admin.postEdit.post,
    errors: state.blog.admin.postEdit.errors,
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