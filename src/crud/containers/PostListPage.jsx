import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../actions'
import PostList from '../components/PostList'
import Spinner from '../components/Spinner'
import Alert from '../components/Alert'

class PostListPage extends Component {

    constructor(props) {
        super(props)
        this.onEdit = this.onEdit.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    componentDidMount() {
        this.props.fetchPosts().then(
            () => null,
            error => null,
        )
    }

    onDelete(post) {
        if (confirm(`Are you sure to delete the post "${post.title}"?`)) {
            this.props.deletePost(post._id).then(
                () => null,
                error => null,
            )
        }
    }

    onEdit(post) {
        this.props.history.push(`/post/edit/${post._id}`)
    }

    render() {
        const { posts, isLoading } = this.props

        return (<div>
            <p><Link className="btn btn-primary" to="/post/add">Add</Link></p>
            {isLoading && <Spinner/>}
            {posts && <PostList items={posts} onEdit={this.onEdit} onDelete={this.onDelete} /> }
        </div>)
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        isLoading: state.isLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(actions.fetchPosts()),
        deletePost: (id) => dispatch(actions.deletePost(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListPage)