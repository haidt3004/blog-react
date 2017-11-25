import React, { Component } from 'react'
import PropTypes from 'prop-types'
import validate from 'validate.js'
import Spinner from './Spinner'

class PostForm extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            post: props.post,
            errors: props.errors,
            submitted: false,
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            post: props.post,
            errors: props.errors,
        });
    }

    handleChange(event) {
        const post = { ...this.state.post, [event.target.name]: event.target.value }
        this.setState({ post });
    }

    handleSubmit(event) {
        event.preventDefault();
        var errors = this.validate(this.state.post)

        this.setState({
            submitted: true,
            errors: errors
        })

        if (!errors) {
            this.props.onSubmit(this.state.post)
        }
    }

    validate(post) {
        var rules = {
            // title: {
            //     presence: true,
            // },
            // content: {
            //     presence: true,
            // },
        }
        return validate(post, rules)
    }

    hasError(field) {
        return this.state.submitted && this.state.errors && this.state.errors[field]
    }

    hasSuccess(field) {
        return this.state.submitted && (!this.state.errors || !this.state.errors[field])
    }

    getFormGroupClass(field) {
        var classNames = ['form-group']
        if (this.hasError(field)) {
            classNames.push('has-error')
        } else if (this.hasSuccess(field)) {
            classNames.push('has-success')
        }
        return classNames.join(' ')
    }

    errorList(field) {
        if (!this.state.errors) return null

        var errors = this.state.errors[field]
        return errors && errors.map((msg, index) =>
            <span className="help-block" key={index}>{msg}</span>
        )
    }

    renderSubmitButton() {
        return this.props.isSaving ?
            (<button className="btn-success btn" type="submit" disabled>{'Saving '} <Spinner /></button>) :
            (<button className="btn-success btn" type="submit">Save</button>)
    }

    render() {
        var post = this.state.post
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={this.getFormGroupClass('title')}>
                    <label htmlFor="" className="control-label">Title</label>
                    <input name="title" value={post.title} onChange={this.handleChange}
                        type="text" className="form-control" />
                    {this.errorList('title')}
                </div>
                <div className={this.getFormGroupClass('content')}>
                    <label htmlFor="" className="control-label">Content</label>
                    <textarea name="content" value={post.content} onChange={this.handleChange}
                        className="form-control" />
                    {this.errorList('content')}
                </div>

                <div className="form-group">
                    {this.renderSubmitButton()}
                    &nbsp;
                    <button className="btn-default btn" type="button"
                        onClick={this.props.onCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        )
    }

}

PostForm.propTypes = {
    post: PropTypes.object.isRequired,
    errors: PropTypes.any,
    isSaving: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
}

export default PostForm
