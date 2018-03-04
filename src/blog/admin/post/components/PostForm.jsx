import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import { Link } from 'react-router-dom'
import { validatePostData as validate } from '../helpers'
import InputField from '../../../../common/widgets/form/InputField'
import SubmitButton from '../../../../common/widgets/form/SubmitButton'

const PostForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={InputField} type="text" label="Title" />
    <Field name="content" component={InputField} type="email" label="Content" />
    <div className="form-group">
      <SubmitButton type="submit" className="btn btn-primary" submitting={submitting} submitLabel="Saving...">Save</SubmitButton>
      &nbsp;
      <Link to="/admin/posts" clasName="btn btn-default">Cancel</Link>
    </div>
  </form>
)

export default PostForm