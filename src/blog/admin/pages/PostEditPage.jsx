import React, { Component } from 'react'

class PostEditPage extends Component {
  render() {
    return <p>post edit {this.props.match.params.id}</p>
  }
}

export default PostEditPage