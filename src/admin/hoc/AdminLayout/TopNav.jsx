import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const TopNav = ({ username }) => (
  <div className="top_nav">
    <div className="nav_menu">
      <nav>
        <div className="nav toggle">
          <a id="menu_toggle">
            <i className="fa fa-bars"></i>
          </a>
        </div>

        <ul className="nav navbar-nav navbar-right">
          <li className="">
            <a href="javascript:" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              {username} &nbsp;
              <span className=" fa fa-angle-down"></span>
            </a>
            <ul className="dropdown-menu dropdown-usermenu pull-right">
              <li>
                <a href="javascript:"> Profile</a>
              </li>
              <li>
                <a href="javascript:">
                  <span className="badge bg-red pull-right">50%</span>
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a href="javascript:">Help</a>
              </li>
              <li>
                <a href="login.html">
                  <i className="fa fa-sign-out pull-right"></i> Log Out</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default connect(state => ({
  username: state.common.identity.username,
}))(TopNav)