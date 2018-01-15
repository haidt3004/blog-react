import React from 'react'

import { Link } from 'react-router-dom'
import Form from '../../../common/widgets/mt-form/Form'
import TextField from '../../../common/widgets/mt-form/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const RegistrationForm = ({ onSubmit, data, ...otherProps }) => (
  <Form data={data} {...otherProps}>
    <TextField
      hintText="Company Name"
      floatingLabelText="Company Name"
      fullWidth={true}
      field="name"
    />
    <div>
      <RaisedButton label="Submit" primary={true} onClick={()=> onSubmit(data)}/>
    </div>
  </Form>
)

export default RegistrationForm