import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import { Link } from 'react-router-dom'
import { validatePostData as validate } from '../helpers'
import InputField from '../../../../common/components/form/InputField'
import TextAreaField from '../../../../common/components/form/TextAreaField'
import SubmitButton from '../../../../common/components/form/SubmitButton'

const PostForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={InputField} type="text" label="Title" />
    <Field name="content" component={TextAreaField} type="email" label="Content" rows="8" />
    <div className="form-group">
      <SubmitButton type="submit" className="btn btn-primary" submitting={submitting} submitLabel="Saving...">Save</SubmitButton>
      &nbsp;
      <Link to="/admin/posts" className="btn btn-default">Cancel</Link>
    </div>
  </form>
)

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({
  form: 'editPost',
  validate,
  enableReinitialize: true
})(PostForm)