var handlers = require('./handlers')
var express = require('express')
var router = express.Router()

router.route('/ci/org/session')
  .post(handlers.login)

router.route('/ci/org/reg')
  .post(handlers.register)

module.exports = router