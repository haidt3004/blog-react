import React, { Component } from 'react'

import Form from '../../common/widgets/form/Form'
import FormGroup from '../../common/widgets/form/FormGroup'
import ErrorList from '../../common/widgets/form/ErrorList'
import TextInput from '../../common/widgets/form/TextInput'
import PasswordInput from '../../common/widgets/form/PasswordInput'

const ProfileForm = props => (
  <Form {...props} className="form-horizontal">
    <fieldset>
      <legend>Account Information</legend>
      <FormGroup field="username">
        <label className="control-label col-sm-2">Username</label>
        <div className="col-sm-6">
          <TextInput name="username" className="form-control" />
          <ErrorList />
        </div>
      </FormGroup>
      <FormGroup field="email">
        <label className="control-label col-sm-2">Email</label>
        <div className="col-sm-6">
          <TextInput name="email" className="form-control" />
          <ErrorList />
        </div>
      </FormGroup>
    </fieldset>
    <fieldset>
      <legend>Change password</legend>
      <FormGroup field="currentPassword">
        <label className="control-label col-sm-2">Old Password</label>
        <div className="col-sm-6">
          <PasswordInput name="currentPassword" className="form-control" />
          <ErrorList />
        </div>
      </FormGroup>
      <FormGroup field="password">
        <label className="control-label col-sm-2">New Password</label>
        <div className="col-sm-6">
          <PasswordInput name="password" className="form-control" />
          <ErrorList />
        </div>
      </FormGroup>
      <FormGroup field="repeatPassword">
        <label className="control-label col-sm-2">Repeat Password</label>
        <div className="col-sm-6">
          <PasswordInput name="repeatPassword" className="form-control" />
          <ErrorList />
        </div>
      </FormGroup>
    </fieldset>
    <div className="form-group">
      <div className="col-sm-6 col-sm-offset-2">
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
    </div>
  </Form>
)

export default ProfileForm