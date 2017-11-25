import React, { Component } from 'react'
import Alert from './Alert'

class MainLayout extends Component {
    render() {
        return (<div className="container">
            <Alert />
            {this.props.children}
        </div>)
    }
}

export default MainLayout