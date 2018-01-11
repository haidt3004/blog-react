import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import PersonIcon from 'material-ui/svg-icons/social/person'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { white } from 'material-ui/styles/colors'
import * as common from '../../../common/actions'

const Header = ({ username, logout, ...appBarProps }) => (
  <AppBar
    {...appBarProps}
    iconElementRight={
      <IconMenu
        iconButtonElement={<IconButton><PersonIcon color={white} /></IconButton>}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Dashboard" containerElement={<Link to="/admin" />} />
        <MenuItem primaryText="Profile" containerElement={<Link to="/admin/profile" />} />
        <Divider/>
        <MenuItem primaryText="Logout" onClick={logout} />
      </IconMenu>
    }

  />
)

Header.propTypes = {
  username: PropTypes.string,
  logout: PropTypes.func,
}

const mapStateToProps = state => {
  return {
    username: state.common.identity.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(common.clearIdentity())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)