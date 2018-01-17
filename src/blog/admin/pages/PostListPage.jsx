import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as actions from '../actions'
import styles from '../../../admin/widgets/AdminLayout.scss'
import LoginRequired from '../../../admin/widgets/LoginRequired'
import AdminLayout from '../../../admin/widgets/AdminLayout'
import Spinner from '../../../common/widgets/Spinner'
import RaisedButton from 'material-ui/RaisedButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import IconButton from 'material-ui/IconButton'

class PostListPage extends Component {

  constructor(props) {
    super(props)
  }

  onDelete(post) {
    const { deletePost, loadPosts } = this.props
    if (confirm(`Are you sure to delete "${post.title}"?`)) {
      deletePost(post)
        .then(() => loadPosts())
    }
  }

  componentDidMount() {
    this.props.layout.setTitle('Posts')
    this.props.loadPosts()
  }

  render() {
    const { posts, isLoading } = this.props
    const colIDStyle = {width:50}
    return (
      <div>
        <div className={styles.mb}><Link to="/admin/posts/add"><RaisedButton label="Add" primary={true} /></Link></div>
        { isLoading ?
          <Spinner/> : (
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn style={colIDStyle}>#</TableHeaderColumn>
                  <TableHeaderColumn>Title</TableHeaderColumn>
                  <TableHeaderColumn>Actions</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                { posts.map((post, index) => (
                  <TableRow key={post._id}>
                    <TableRowColumn style={colIDStyle}>{index+1}</TableRowColumn>
                    <TableRowColumn>{post.title}</TableRowColumn>
                    <TableRowColumn>
                      <Link to={`/admin/posts/edit/${post._id}`}>
                        <IconButton tooltip="Edit">
                          <EditIcon/>
                        </IconButton>
                      </Link>
                      <IconButton tooltip="Delete" onClick={this.onDelete.bind(this, post)}>
                        <DeleteIcon/>
                      </IconButton>
                    </TableRowColumn>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          )
        }
      </div>
    )
  }
}

PostListPage.propTypes = {
  layout: PropTypes.instanceOf(Component),
  isLoading: PropTypes.bool,
  posts: PropTypes.array,
  loadPosts: PropTypes.func,
  deletePost: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    isLoading: state.common.isLoading.loadPosts,
    posts: state.blog.admin.postList.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: () => dispatch(actions.loadPosts()),
    deletePost: post => dispatch(actions.deletePost(post)),
  }
}

export default compose(
  LoginRequired,
  AdminLayout,
  connect(mapStateToProps, mapDispatchToProps)
)(PostListPage)