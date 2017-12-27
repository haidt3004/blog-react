import React from 'react'
import { Link } from 'react-router-dom'

import Form from '../../../common/widgets/form/Form'
import FormGroup from '../../../common/widgets/form/FormGroup'
import ErrorList from '../../../common/widgets/form/ErrorList'
import TextInput from '../../../common/widgets/form/TextInput'
import TextArea from '../../../common/widgets/form/TextArea'

const ProfileForm = props => (
  <Form {...props} className="form-horizontal">
    <FormGroup field="title">
      <label className="control-label col-sm-2">Title</label>
      <div className="col-sm-6">
        <TextInput name="title" className="form-control" />
        <ErrorList />
      </div>
    </FormGroup>
    <FormGroup field="content">
      <label className="control-label col-sm-2">Content</label>
      <div className="col-sm-6">
        <TextArea name="content" className="form-control" />
        <ErrorList />
      </div>
    </FormGroup>
    <div className="form-group">
      <div className="col-sm-6 col-sm-offset-2">
        <button type="submit" className="btn btn-primary">Save</button>
        &nbsp;
        <Link to="/admin/posts" className="btn btn-default">Cancel</Link>
      </div>
    </div>
  </Form>
)

export default ProfileForm