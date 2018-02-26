import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { compose } from 'redux'
// import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'gentelella/build/css/custom.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'gentelella/build/js/custom.js'

function withAdminLayout(WrappedComponent) {

  class AdminLayout extends Component {
    render() {
      return (
        <div className="nav-md">
          <div className="container body">
            <div className="main_container">
              <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                  <div className="navbar nav_title" style={{ border: 0 }}>
                    <a href="index.html" className="site_title">
                      <i className="fa fa-paw"></i>&nbsp;
                      <span>Gentelella Alela!</span>
                    </a>
                  </div>

                  <div className="clearfix"></div>
                  <br />

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
                            <li>
                              <a href="project_detail.html">Project Detail</a>
                            </li>
                            <li>
                              <a href="contacts.html">Contacts</a>
                            </li>
                            <li>
                              <a href="profile.html">Profile</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="sidebar-footer hidden-small">
                    <a data-toggle="tooltip" data-placement="top" title="Settings">
                      <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                      <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="Lock">
                      <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                      <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                    </a>
                  </div>

                </div>
              </div>


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
                        <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                          Admin&nbsp;
                          <span className=" fa fa-angle-down"></span>
                        </a>
                        <ul className="dropdown-menu dropdown-usermenu pull-right">
                          <li>
                            <a href="javascript:;"> Profile</a>
                          </li>
                          <li>
                            <a href="javascript:;">
                              <span className="badge bg-red pull-right">50%</span>
                              <span>Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:;">Help</a>
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

              <div className="right_col" role="main">
                <div className="">
                  <div className="page-title">
                    <div className="title_left">
                      <h3>Plain Page</h3>
                    </div>

                    <div className="title_right">
                      <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search for..." />
                          <span className="input-group-btn">
                            <button className="btn btn-default" type="button">Go!</button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="clearfix"></div>

                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="x_panel">
                        <div className="x_title">
                          <h2>Plain Page</h2>
                          <ul className="nav navbar-right panel_toolbox">
                            <li>
                              <a className="collapse-link">
                                <i className="fa fa-chevron-up"></i>
                              </a>
                            </li>
                            <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                <i className="fa fa-wrench"></i>
                              </a>
                              <ul className="dropdown-menu" role="menu">
                                <li>
                                  <a href="#">Settings 1</a>
                                </li>
                                <li>
                                  <a href="#">Settings 2</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="close-link">
                                <i className="fa fa-close"></i>
                              </a>
                            </li>
                          </ul>
                          <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                          Add content to the page ...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer>
                <div className="pull-right">
                  Gentelella - Bootstrap Admin Template by
                  <a href="https://colorlib.com">Colorlib</a>
                </div>
                <div className="clearfix"></div>
              </footer>

            </div>
          </div>
        </div>
      )
    }
  }

  AdminLayout.propTypes = {
    isLoading: PropTypes.bool,
  }
  AdminLayout.displayName = 'AdminLayout'
  return AdminLayout
}

// export default compose(
//   withAdminLayout,
//   withErrorBoundary(ErrorPage)
// )

export default withAdminLayout