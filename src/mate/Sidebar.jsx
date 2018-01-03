import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'
import FolderIcon from 'material-ui/svg-icons/file/folder'
import LabelIcon from 'material-ui/svg-icons/action/label'
import SettingIcon from 'material-ui/svg-icons/action/settings'
import Divider from 'material-ui/Divider'
import styles from './AdminLayout.scss'

const Sidebar = ({ visible }) => (
  <Drawer docked={true} open={visible}>
    <h1 className={styles.logo}>React Blog</h1>
    <List>
      <ListItem leftIcon={<FolderIcon />}>
        <Link to="posts" className={styles['menu-item']}>Posts</Link>
      </ListItem>
      <ListItem leftIcon={<LabelIcon />}>
        <Link to="tags" className={styles['menu-item']}>Tags</Link>
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem leftIcon={<SettingIcon />}>
        <Link to="config" className={styles['menu-item']}>Configuration</Link>
      </ListItem>
    </List>
  </Drawer>
)

Sidebar.propTypes = {
  visible: PropTypes.bool,
}

export default Sidebar