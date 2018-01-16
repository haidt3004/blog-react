import React from 'react'

import Form from '../../../common/widgets/mt-form/Form'
import TextField from '../../../common/widgets/mt-form/TextField'
import SelectField from '../../../common/widgets/mt-form/SelectField'
import RaisedButton from 'material-ui/RaisedButton'

var orgTypes = ['Carer Organisation', 'Employment Services Organisation', 'Registered Training Organisation', 'Government Organisation']
var items = orgTypes.map(item => ({ label: item, value: item }))

const RegistrationForm = ({ onSubmit, data, ...otherProps }) => (
  <Form data={data} {...otherProps}>
    <TextField
      hintText="Company Name"
      floatingLabelText="Company Name"
      fullWidth={true}
      field="name"
    />
    <TextField
      hintText="Phone"
      floatingLabelText="Phone"
      fullWidth={true}
      field="phone"
    />
    <TextField
      hintText="ABN"
      floatingLabelText="ABN"
      fullWidth={true}
      field="abn"
    />
    <SelectField
      floatingLabelText="Type of organisation"
      fullWidth={true}
      field="category"
      items={items}
    />

    <fieldset>
      <legend>Contact person</legend>
      <TextField
        hintText="First name"
        floatingLabelText="First name"
        fullWidth={true}
        field="contactFirstname"
      />
      <TextField
        hintText="Last name"
        floatingLabelText="Last name"
        fullWidth={true}
        field="contactLastname"
      />
      <TextField
        hintText="Email"
        floatingLabelText="Email"
        fullWidth={true}
        field="contactEmail"
      />
    </fieldset>
    <div>
      <RaisedButton label="Submit" primary={true} onClick={()=> onSubmit(data)}/>
    </div>
  </Form>
)

export default RegistrationForm