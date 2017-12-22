var http = require('http')
var app = require('./app')
var server = http.createServer(app)
var { logInfo, logError, connectToDb } = require('./modules/common/helpers')

/**
 * Start the api server
 */
async function run() {
  try {
    await connectToDb()
    var port = normalizePort(process.env.PORT || '3000')
    app.set('port', port)
    server.listen(port)
    server.on('error', onError)
    server.on('listening', onListening)
  } catch (error) {
    logError(error)
    process.exit(1)
  }
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var port = app.get('port')
  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case 'EACCES':
    logError(bind + ' requires elevated privileges')
    process.exit(1)
    break
  case 'EADDRINUSE':
    logError(bind + ' is already in use')
    process.exit(1)
    break
  default:
    throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  logInfo('Web server listening on ' + bind)
}

run()

module.exports = server