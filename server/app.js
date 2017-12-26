const express = require('express')
const app = express()
const { logError, notFoundExc } = require('./modules/common/helpers')

// delay expressjs response to test spinner
if (process.env.NODE_ENV==='dev') {
  var delay = require('express-delay')
  app.use(delay(1000))
}

// enable parsing request boby with different content types
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// log http request to console
const morgan = require('morgan')
app.use(morgan('tiny'))

// add module's middlewares
app.use('/api', [
  require('./modules/common/routes'),
  require('./modules/admin/routes'),
  require('./modules/blog/routes'),
])

// Only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  let frontendBuildPath = path.resolve(__dirname, '..', 'build')
  app.use(express.static(frontendBuildPath))
  app.get('/*', function (req, res) {
    res.sendFile(path.resolve(frontendBuildPath, 'index.html'))
  })
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return next(notFoundExc('No route found'))
})

// error handler
app.use(function (err, req, res, next) {
  // errors thrown by app
  if (err.status) {
    let { status, ...data } = err
    res.status(status).json(data)
  } else {
    // uncaught exception
    logError(err)
    res.status(500).json({
      code: 'server_error',
      message: err.message,
    })
  }
})

module.exports = app