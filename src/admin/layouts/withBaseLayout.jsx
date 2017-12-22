import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'select2/dist/js/select2.min.js'
import 'select2/dist/css/select2.min.css'
import 'moment/min/moment-with-locales.min.js'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/skin-purple.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import React, { Component } from 'react'

function withBaseLayout(WrappedComponent) {

  class BaseLayout extends Component {
    render() {
      var { ...passThroughProps } = this.props
      return <WrappedComponent {...passThroughProps} />
    }
  }

  BaseLayout.displayName = `BaseLayout`

  return BaseLayout
}

export default withBaseLayout