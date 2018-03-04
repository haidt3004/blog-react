import React from 'react'

const SideBar = props => (
  <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
    <div className="menu_section">
      <h3>General</h3>
      <ul className="nav side-menu">
        <li>
          <a>
            <i className="fa fa-home"></i> Home
            <span className="fa fa-chevron-down"></span>
          </a>
          <ul className="nav child_menu">
            <li>
              <a href="index.html">Dashboard</a>
            </li>
            <li>
              <a href="index2.html">Dashboard2</a>
            </li>
            <li>
              <a href="index3.html">Dashboard3</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="menu_section">
      <h3>Live On</h3>
      <ul className="nav side-menu">
        <li>
          <a>
            <i className="fa fa-bug"></i> Additional Pages
            <span className="fa fa-chevron-down"></span>
          </a>
          <ul className="nav child_menu">
            <li>
              <a href="e_commerce.html">E-commerce</a>
            </li>
            <li>
              <a href="projects.html">Projects</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
)

export default SideBar