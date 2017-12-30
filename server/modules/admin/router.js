const handlers = require('./handlers')
const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../common/jwt')

router.route('/account/session')
  .post(handlers.login)

router.use(jwtMiddleware)

router.route('/account')
  .get(handlers.getProfile)
  .put(handlers.updateProfile)

module.exports = router