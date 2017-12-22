var handlers = require('./handlers')
var express = require('express')
var router = express.Router()

router.route('/test')
  .get(handlers.test)

router.route('/test-db')
  .get(handlers.testDb)

module.exports = router