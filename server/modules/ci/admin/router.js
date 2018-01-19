var handlers = require('./handlers')
var express = require('express')
var router = express.Router()

router.route('/ci/admin/session')
  .post(handlers.login)

module.exports = router