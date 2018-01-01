import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FolderIcon from 'material-ui/svg-icons/file/folder'
import LabelIcon from 'material-ui/svg-icons/action/label'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import style from './style.scss'

const Sidebar = ({ visible }) => (
  <Drawer docked={true} open={visible}>
    <h1 className={style.logo}>React Blog</h1>
    <Menu>
      <MenuItem primaryText={<Link to="posts" className={style['menu-item']}>Posts</Link>} leftIcon={<FolderIcon />} />
      <MenuItem primaryText={<Link to="tags" className={style['menu-item']}>Tags</Link>} leftIcon={<LabelIcon />} className={style['menu-item']} />
      <Divider />
      <MenuItem primaryText="Configuration" leftIcon={<FolderIcon />} />
    </Menu>
  </Drawer>
)

Sidebar.propTypes = {
  visible: PropTypes.bool,
}

export default Sidebar