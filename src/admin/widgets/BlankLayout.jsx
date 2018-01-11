import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './BlankLayout.scss'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from './mui-theme'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Alert from '../../common/widgets/Alert'

function BlankLayout(WrappedComponent) {

  class LayoutComponent extends Component {

    componentDidMount() {
      $('body').addClass(styles.blankLayout)
    }

    componentWillUnmount() {
      $('body').removeClass(styles.blankLayout)
    }

    constructor(props) {
      super(props)
      this.state = {
        title: 'Page Title',
      }
    }

    setTitle(title) {
      this.setState({ title })
    }

    render() {
      const { isLoading, ...compProps } = this.props
      return (
        <MuiThemeProvider muiTheme={MuiTheme}>
          <div className={styles.wrapper}>
            <div className="container-fluid">
              <h1 className={styles.pageTitle}>{this.state.title}</h1>
              <div className="row">
                <div className="col-md-4 col-md-offset-4 col-sm-6  col-sm-offset-3">
                  <Paper className={styles.container}>
                    <WrappedComponent layout={this} {...compProps} />

                    { isLoading ? <div className="text-center"><CircularProgress/></div> : null }
                  </Paper>
                </div>
              </div>

              <Alert/>
            </div>
          </div>
        </MuiThemeProvider>
      )
    }
  }

  LayoutComponent.propTypes = {
    isLoading: PropTypes.bool,
  }
  LayoutComponent.displayName = 'BlankLayout'
  return connect(mapStateToProps)(LayoutComponent)
}

const mapStateToProps = state => {
  return {
    isLoading: state.common.isLoading,
  }
}

export default BlankLayout
