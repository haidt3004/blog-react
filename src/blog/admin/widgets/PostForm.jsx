import React from 'react'
import styles from '../../../admin/widgets/AdminLayout.scss'

import { Link } from 'react-router-dom'
import Form from '../../../common/widgets/mt-form/Form'
import TextField from '../../../common/widgets/mt-form/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const PostForm = ({ onSubmit, data, ...otherProps }) => (
  <Form data={data} {...otherProps}>
    <TextField
      hintText="Title"
      floatingLabelText="Title"
      fullWidth={true}
      field="title"
    />
    <TextField
      hintText="Content"
      floatingLabelText="Content"
      fullWidth={true}
      multiLine={true}
      field="content"
      rows={5}
    />
    <div className={styles.mt}>
      <RaisedButton label="Save" primary={true} onClick={()=> onSubmit(data)}/>
      &nbsp;
      <Link to="/admin/posts">
        <RaisedButton label="Cancel" primary={false}/>
      </Link>
    </div>
  </Form>
)

export default PostForm