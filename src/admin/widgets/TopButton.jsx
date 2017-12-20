import React, { Component } from 'react'
import $ from 'jquery'

/**
 * display a back to top button on bottom right of the screen
 * when page is scroll down, show the button
 * when user click the button, scroll to top
 */
class TopButton extends Component {

  componentDidMount() {
    $(window).on('scroll.topButton', () => {
      if ($(window).scrollTop() > 0) {
        $(this.element).fadeIn()
      } else {
        $(this.element).fadeOut()
      }
    })
  }

  componentWillUnmount() {
    $(window).off('scroll.topButton')
  }

  onClick() {
    $('html, body').animate({ scrollTop: 0 }, 'fast')
  }

  render() {
    return (<div className="top-button" ref={(element) => { this.element = element }}>
      <span className="glyphicon glyphicon-chevron-up"
        onClick={this.onClick} aria-hidden="true"></span>
    </div>)
  }
}

export default TopButton