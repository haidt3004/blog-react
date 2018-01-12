import React from 'react'
import PropTypes from 'prop-types'

import Form from '../../common/widgets/mt-form/Form'
import TextField from '../../common/widgets/mt-form/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Subheader from 'material-ui/Subheader'
import styles from './AdminLayout.scss'

const ProfileForm = ({ onSubmit, data, ...otherProps }) => (
  <Form data={data} {...otherProps}>
    <Subheader>Account Information</Subheader>
    <TextField
      hintText="Username"
      floatingLabelText="Username"
      fullWidth={true}
      field="username"
    />
    <TextField
      hintText="Email"
      floatingLabelText="Email"
      fullWidth={true}
      field="email"
    />

    <Subheader>Change password</Subheader>
    <TextField
      hintText="Old Password"
      floatingLabelText="Old Password"
      fullWidth={true}
      type="password"
      field="currentPassword"
    />
    <TextField
      hintText="New Password"
      floatingLabelText="New Password"
      fullWidth={true}
      type="password"
      field="password"
    />
    <TextField
      hintText="Repeat Password"
      floatingLabelText="Repeat Password"
      fullWidth={true}
      type="password"
      field="repeatPassword"
    />
    <div className={styles.mt}>
      <RaisedButton label="Save" primary={true} onClick={()=> onSubmit(data)}/>
    </div>
  </Form>
)

ProfileForm.propTypes = {
  onSubmit: PropTypes.func
}

export default ProfileForm