import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import PersonIcon from 'material-ui/svg-icons/social/person'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import { white } from 'material-ui/styles/colors'

const Header = ({ onLeftIconClick, style }) => (
  <AppBar
    style={style}
    onLeftIconButtonClick={onLeftIconClick}
    iconElementRight={
      <IconMenu
        iconButtonElement={<IconButton><PersonIcon color={white} /></IconButton>}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Dashboard" containerElement={<Link to="/admin" />} />
        <MenuItem primaryText="Profile" containerElement={<Link to="/admin/profile" />} />
        <Divider/>
        <MenuItem primaryText="Logout" containerElement={<Link to="/logout" />} />
      </IconMenu>
    }

  />
)

Header.propTypes = {
  onLeftIconClick: PropTypes.func,
  style: PropTypes.object,
}

export default Header