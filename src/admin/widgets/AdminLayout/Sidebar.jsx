import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'
import FolderIcon from 'material-ui/svg-icons/file/folder'
import LabelIcon from 'material-ui/svg-icons/action/label'
import SettingIcon from 'material-ui/svg-icons/action/settings'
import Divider from 'material-ui/Divider'
import styles from '../AdminLayout.scss'

const Sidebar = ({open, toggle}) => (
  <Drawer docked={false} open={open} onRequestChange={open => toggle()}>
    <List>
      <ListItem leftIcon={<FolderIcon />}>
        <Link to="/admin/posts" className={styles['menu-item']}>Posts</Link>
      </ListItem>
      <ListItem leftIcon={<LabelIcon />}>
        <Link to="admin/tags" className={styles['menu-item']}>Tags</Link>
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem leftIcon={<SettingIcon />}>
        <Link to="admin/config" className={styles['menu-item']}>Configuration</Link>
      </ListItem>
    </List>
  </Drawer>
)

Sidebar.propTypes = {
  open: PropTypes.bool,
  toggle: PropTypes.func,
}

export default Sidebar