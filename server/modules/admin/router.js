var handlers = require('./handlers')
var express = require('express')
var router = express.Router()

router.route('/account/session')
  .post(handlers.login)

router.use(handlers.verifyRequest)

router.route('/account')
  .get(handlers.getProfile)
  .put(handlers.updateProfile)

module.exports = router