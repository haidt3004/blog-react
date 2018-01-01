import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { install as installRavenJs } from './common/sentry'

installRavenJs()

const render = Component => {
  ReactDOM.render(<Component/>, document.getElementById('root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    let NewApp = require('./App').default
    render(NewApp)
  })
}
