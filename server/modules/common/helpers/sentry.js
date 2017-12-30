/**
 * wrapper module for making raven integration more easily
 */
const Raven = require('raven')
const config = require('../../../config')
var isEnabled = process.env.NODE_ENV==='production'
var sentryDNS = config.sentryDns

/**
 * install raven
 */
function install() {
  if (!isEnabled) return false
  Raven.config(sentryDNS).install()
}

/**
 * Add request handler to express app
 * The request handler must be the first middleware on the app
 *
 * @param {Object} app
 */
function addRequestHandler(app) {
  if (!isEnabled) return false
  app.use(Raven.requestHandler())
}

/**
 * Add error handler to express app
 * The error handler must be before any other error middleware
 *
 * @param {Object} app
 */
function addErrorHandler(app) {
  if (!isEnabled) return false
  app.use(Raven.errorHandler())
}

module.exports = {
  install,
  addRequestHandler,
  addErrorHandler
}