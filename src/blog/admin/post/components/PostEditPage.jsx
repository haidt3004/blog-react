import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import actions from '../actions'
import { setTitle } from '../../../../common/actions'
import AdminLayout from '../../../../admin/hoc/AdminLayout'
import Spinner from '../../../../common/widgets/Spinner'
import PostForm from './PostForm'

class PostEditPage extends Component {

  state = {
    initialFormValues: {}
  }

  async componentDidMount() {
    const { setTitle, loadPost, match, setPost } = this.props
    var postId = match.params.id
    if (postId) {
      setTitle('Edit Post')
      try {
        var response = await loadPost(postId)
        this.setState({
          initialFormValues: response.data
        })
      } catch (error) { }
    } else {
      setTitle('Add Post')
    }
  }

  onSubmit = data => {
    const { savePost, match } = this.props
    var postId = match.params.id
    savePost(data, postId)
  }

  render() {
    const { post, errors, postLoaded, setPost } = this.props
    return (
      <div>
        {postLoaded ?
          <PostForm onSubmit={this.onSubmit} initialValues={this.state.initialValues} /> :
          <Spinner />
        }
      </div>
    )
  }
}

PostEditPage.propTypes = {
  postLoaded: PropTypes.bool,
  loadPost: PropTypes.func,
  // setPost: PropTypes.func,
  // savePost: PropTypes.func,
  match: PropTypes.object,
}

export default compose(
  AdminLayout,
  connect(
    state => ({
      postLoaded: state.common.request.loadPost,
      // post: state.blog.admin.postEdit.post,
    }),
    dispatch => ({
      loadPost: id => dispatch(actions.loadPost(id)),
      setTitle: title => dispatch(setTitle(title)),
      // setPost: data => dispatch(actions.setPost(data)),
      // savePost: (data, id) => dispatch(actions.savePost(data, id)),
    })
  )
)(PostEditPage)