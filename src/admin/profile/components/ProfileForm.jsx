import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import { validateProfileData as validate } from '../helpers'
import InputField from '../../../common/components/form/InputField'
import SubmitButton from '../../../common/components/form/SubmitButton'

const ProfileForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <fieldset>
      <legend>Account Information</legend>
      <Field name="username" component={InputField} type="text" label="Username" />
      <Field name="email" component={InputField} type="email" label="Email" />
    </fieldset>
    <br />
    <fieldset>
      <legend>Change password</legend>
      <Field name="currentPassword" component={InputField} type="password" label="Old Password" />
      <Field name="password" component={InputField} type="password" label="New Password" />
      <Field name="repeatPassword" component={InputField} type="password" label="Repeat Password" />
    </fieldset>
    <div className="form-group">
      <SubmitButton type="submit" className="btn btn-primary" submitting={submitting} submitLabel="Saving...">Save</SubmitButton>
    </div>
  </form>
)

ProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

export default reduxForm({
  form: 'updateProfile',
  validate,
  enableReinitialize: true
})(ProfileForm)