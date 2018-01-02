import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List'
import FolderIcon from 'material-ui/svg-icons/file/folder'
import LabelIcon from 'material-ui/svg-icons/action/label'
import SettingIcon from 'material-ui/svg-icons/action/setting'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import style from './style.scss'

const Sidebar = ({ visible }) => (
  <Drawer docked={true} open={visible}>
    <h1 className={style.logo}>React Blog</h1>
    <List>
      <ListItem leftIcon={<FolderIcon />}>
        <Link to="posts" className={style['menu-item']}>Posts</Link>
      </ListItem>
      <ListItem leftIcon={<LabelIcon />}>
        <Link to="tags" className={style['menu-item']}>Tags</Link>
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem leftIcon={<SettingIcon />}>
        <Link to="config" className={style['menu-item']}>Configuration</Link>
      </ListItem>
    </List>
  </Drawer>
)

Sidebar.propTypes = {
  visible: PropTypes.bool,
}

export default Sidebar