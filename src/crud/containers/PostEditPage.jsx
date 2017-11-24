import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setSuccess, setError, fetchPost, savePost } from '../actions'
import Spinner from '../components/Spinner'
import PostForm from '../components/PostForm'

class PostEditPage extends Component {

    constructor(props) {
        super(props)
        this.onCancel = this.onCancel.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        if (props.match.params.id) {
            props.fetchPost(props.match.params.id)
        } else {
            props.setPost({ title: '', content:''})
        }
    }

    goBack() {
        this.props.history.push(`/post`)
    }

    onCancel() {
        this.goBack()
    }

    onSubmit(post) {
        this.props.setPost(post)
        this.props.savePost(post).then(
            () => {
                this.props.setSuccess('Data saved')
                this.goBack()
            }
        )
    }

    render() {
        var { data: post, isLoading } = this.props.fetchPostData
        var { errors, isLoading: isSaving } = this.props.savePostData
        return (<div>
            {isLoading && <Spinner />}
            {post && <PostForm post={post} errors={errors}
                onSubmit={this.onSubmit} onCancel={this.onCancel} isSaving={isSaving} />}
        </div>)
    }

}

const mapStateToProps = state => {
    return {
        savePostData: state.savePost,
        fetchPostData: state.fetchPost,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id)),
        setPost: post => dispatch(fetchPost.actionCreators.success(post)),
        savePost: data => dispatch(savePost(data)),
        setSuccess: msg => dispatch(setSuccess(msg)),
        setError: msg => dispatch(setError(msg)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostEditPage)