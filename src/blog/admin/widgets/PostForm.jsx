import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Form from '../../../common/widgets/form/Form'
import FormGroup from '../../../common/widgets/form/FormGroup'
import ErrorList from '../../../common/widgets/form/ErrorList'
import TextInput from '../../../common/widgets/form/TextInput'
import TextArea from '../../../common/widgets/form/TextArea'

const ProfileForm = ({ onCancel, ...props }) => (
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
        <button type="button" className="btn btn-default" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  </Form>
)

export default connect(
  null,
  dispatch => {
    return {
      onCancel: () => { dispatch(push('/admin/posts')) },
    }
  }
)(ProfileForm)