import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PostList extends Component {

    renderEmpty() {
        return (<tr>
            <td colSpan="3" className="text-center"><em>No items found.</em></td>
        </tr>)
    }

    renderItems(items) {
        return items.map(post => {
            return (<tr key={post._id}>
                <td>{post._id}</td>
                <td>{post.title}</td>
                <td>
                    <a role="button" onClick={() => this.props.onEdit(post)} className="btn btn-primary">
                        <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                    </a>
                    &nbsp;
                    <a role="button" onClick={() => this.props.onDelete(post)} className="btn btn-danger">
                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                    </a>
                </td>
            </tr>)
        })
    }

    render() {
        var items = this.props.items
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 ? this.renderItems(items) : this.renderEmpty()}
                    </tbody>
                </table>
            </div>

        )
    }

}

PostList.propTypes = {
    items: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default PostList
