/**
 * wrapper module for making raven integration more easily
 */
import Raven from 'raven-js'

// for reactjs app, environment is defined in webpack.prod.js
var isEnabled = process.env.NODE_ENV==='production'
var sentryDNS = process.env.SENTRY_DNS

/**
 * install raven
 */
export function install() {
  if (!isEnabled || !sentryDNS) return false
  Raven.config(sentryDNS).install()
}

export default Raven