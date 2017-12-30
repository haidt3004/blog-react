const path = require('path')

var config = {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.DB_URI,
    debug: process.env.MONGOOSE_DEBUG==='true'
  },
  appSecret: 'react blog secret',
  logPath: process.env.LOG_PATH || path.resolve(__dirname),
  sentryDns: process.env.SENTRY_DNS || false,
}

module.exports = config