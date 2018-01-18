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
      field="companyName"
    />
    <TextField
      hintText="ABN"
      floatingLabelText="ABN"
      fullWidth={true}
      field="abn"
    />
    <TextField
      hintText="Phone"
      floatingLabelText="Phone"
      fullWidth={true}
      field="phone"
    />
    <SelectField
      floatingLabelText="Type of organisation"
      fullWidth={true}
      field="orgType"
      items={items}
    />
    <TextField
      hintText="Password to login"
      floatingLabelText="Password"
      fullWidth={true}
      type="password"
      field="password"
    />

    <fieldset>
      <legend>Contact person</legend>
      <TextField
        hintText="Name"
        floatingLabelText="Name"
        fullWidth={true}
        field="contactName"
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