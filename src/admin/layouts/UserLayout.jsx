import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BaseLayout from './BaseLayout'
import Header from './Header'
import Sidebar from './Sidebar'
import TopButton from '../widgets/TopButton'
import '../style.css'

class UserLayout extends Component {

  componentDidMount() {
    $('body').addClass('skin-purple sidebar-mini')
  }

  componentWillUnmount() {
    $('body').removeClass('skin-purple sidebar-mini')
  }

  render() {
    var { title, children } = this.props
    return (
      <BaseLayout>
        <div className="wrapper">
          <Header />
          <Sidebar />
          <div className="content-wrapper">
            <section className="content-header">
              <h1>{title}</h1>
            </section>

            <section className="content">
              {children}
            </section>
          </div>
        </div>
        <TopButton />
      </BaseLayout>
    )
  }
}

UserLayout.propTypes = {
  title: PropTypes.string,
}

export default UserLayout