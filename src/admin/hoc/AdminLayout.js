import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import 'gentelella/build/css/custom.min.css'
import LoginRequired from '../../common/hoc/LoginRequired'
import ErrorBoundary from '../../common/hoc/ErrorBoundary'
import ErrorPage from '../components/ErrorPage'
import Sidebar from './AdminLayout/Sidebar'
import TopNav from './AdminLayout/TopNav'
import Alert from '../../common/components/Alert'

function AdminLayout(WrappedComponent) {

  class Wrapper extends Component {

    componentDidMount() {
      $('body').addClass('nav-md')
      this.initSidebar()
    }

    componentWillUnmount() {
      $('body').removeClass('nav-md')
    }

    initSidebar() {
      var CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
        $BODY = $('body'),
        $MENU_TOGGLE = $('#menu_toggle'),
        $SIDEBAR_MENU = $('#sidebar-menu'),
        $SIDEBAR_FOOTER = $('.sidebar-footer'),
        $LEFT_COL = $('.left_col'),
        $RIGHT_COL = $('.right_col'),
        $NAV_MENU = $('.nav_menu'),
        $FOOTER = $('footer')

      // TODO: This is some kind of easy fix, maybe we can improve this
      var setContentHeight = function () {
        // reset height
        $RIGHT_COL.css('min-height', $(window).height())

        var bodyHeight = $BODY.outerHeight(),
          footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
          leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
          contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight

        // normalize content
        contentHeight -= $NAV_MENU.height() + footerHeight

        $RIGHT_COL.css('min-height', contentHeight)
      }

      $SIDEBAR_MENU.find('a').on('click', function (ev) {
        var $li = $(this).parent()

        if ($li.is('.active')) {
          $li.removeClass('active active-sm')
          $('ul:first', $li).slideUp(function () {
            setContentHeight()
          })
        } else {
          // prevent closing menu if we are on child menu
          if (!$li.parent().is('.child_menu')) {
            $SIDEBAR_MENU.find('li').removeClass('active active-sm')
            $SIDEBAR_MENU.find('li ul').slideUp()
          } else {
            if ($BODY.is(".nav-sm")) {
              $SIDEBAR_MENU.find("li").removeClass("active active-sm")
              $SIDEBAR_MENU.find("li ul").slideUp()
            }
          }
          $li.addClass('active')

          $('ul:first', $li).slideDown(function () {
            setContentHeight()
          })
        }
      })

      // toggle small or large menu
      $MENU_TOGGLE.on('click', function () {
        console.log('clicked - menu toggle')

        if ($BODY.hasClass('nav-md')) {
          $SIDEBAR_MENU.find('li.active ul').hide()
          $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active')
        } else {
          $SIDEBAR_MENU.find('li.active-sm ul').show()
          $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm')
        }

        $BODY.toggleClass('nav-md nav-sm')

        setContentHeight()
      })

      // check active menu
      $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page')

      $SIDEBAR_MENU.find('a').filter(function () {
        return this.href == CURRENT_URL
      }).parent('li').addClass('current-page').parents('ul').slideDown(function () {
        setContentHeight()
      }).parent().addClass('active')

      // recompute content when resizing
      $(window).resize(function () {
        setContentHeight()
      })

      setContentHeight()
    }

    render() {
      const { title, ...passThroughProps } = this.props
      return (
        <div className="container body">
          <div className="main_container">
            <div className="col-md-3 left_col">
              <div className="left_col scroll-view">
                <div className="navbar nav_title" style={{ border: 0 }}>
                  <a href="index.html" className="site_title">
                    <i className="fa fa-paw"></i>&nbsp;
                    <span>React Blog</span>
                  </a>
                </div>

                <div className="clearfix"></div>
                <br />

                <Sidebar />
              </div>
            </div>

            <TopNav />

            <div className="right_col" role="main">
              <div className="">
                <div className="page-title">
                  <div className="title_left">
                    <h3>{title}</h3>
                  </div>
                </div>

                <div className="clearfix"></div>

                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <Alert />
                    <WrappedComponent {...passThroughProps} />
                  </div>
                </div>
              </div>
            </div>

            <footer>
              <div className="pull-right">
                React Blog - Simple MEARN app by <a href="https://github.com/lamhq">lamhq</a>
              </div>
              <div className="clearfix"></div>
            </footer>

          </div>
        </div>
      )
    }
  }

  Wrapper.propTypes = {
    title: PropTypes.string,
  }

  Wrapper.displayName = 'AdminLayout'
  return Wrapper
}

export default compose(
  LoginRequired('/admin/login'),
  connect(
    state => ({
      title: state.common.title,
    })
  ),
  AdminLayout,
  ErrorBoundary(ErrorPage)
)
