var config = {
  db: {
    uri: process.env.DB_URI,
    debug: process.env.MONGOOSE_DEBUG==='true'
  },
  appSecret: 'react blog secret',
}

module.exports = config