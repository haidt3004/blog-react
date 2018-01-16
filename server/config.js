const path = require('path')

var config = {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.DB_URI,
    debug: process.env.MONGOOSE_DEBUG==='true'
  },
  appName: 'Care Interchange',
  appSecret: 'react blog secret',
  logPath: process.env.LOG_PATH || path.resolve(__dirname, 'logs'),
  sentryDns: process.env.SENTRY_DNS || false,
  mail: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_TYPE,
    auth: {
      user: process.env.MAIL_USER,
      pwd: process.env.MAIL_PWD,
    },
    autoEmail: 'noreply@careinterchange.com',
  }
}

module.exports = config