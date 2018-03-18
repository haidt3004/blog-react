import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { SubmissionError } from 'redux-form'
import PropTypes from 'prop-types'

import { loadPost, savePost } from '../actions'
import { setTitle } from '../../../../common/actions'
import AdminLayout from '../../../../admin/hoc/AdminLayout'
import Spinner from '../../../../common/components/Spinner'
import PostForm from './PostForm'

class PostEditPage extends Component {

  state = {
    initialFormValues: {}
  }

  async componentDidMount() {
    const { setTitle, loadPost, match } = this.props
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

  onSubmit = async data => {
    const { savePost, match } = this.props
    var postId = match.params.id
    try {
      await savePost(data, postId)
    } catch (error) {
      throw new SubmissionError({
        ...error.errors,
        _error: error.message
      })
    }

  }

  render() {
    const { postLoaded } = this.props
    return (
      <div>
        {postLoaded ?
          <PostForm onSubmit={this.onSubmit} initialValues={this.state.initialFormValues} /> :
          <Spinner />
        }
      </div>
    )
  }
}

PostEditPage.propTypes = {
  postLoaded: PropTypes.bool,
  loadPost: PropTypes.func,
  savePost: PropTypes.func,
  match: PropTypes.object,
}

export default compose(
  AdminLayout,
  connect(
    state => ({
      postLoaded: state.common.request.loadPost,
    }),
    dispatch => ({
      loadPost: id => {
        var action = loadPost(id)
        dispatch(action)
        return action.promise
      },
      savePost: (data, id) => {
        var action = savePost({ id, ...data })
        dispatch(action)
        return action.promise
      },
      setTitle: title => dispatch(setTitle(title)),
    })
  )
)(PostEditPage)