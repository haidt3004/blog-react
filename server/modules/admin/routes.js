var handlers = require('./handlers')
var express = require('express')
var router = express.Router()

router.route('/account/session')
  .post(handlers.login)

module.exports = router