const handlers = require('./handlers')
const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../common/jwt')

router.route('/admin/session')
  .post(handlers.login)

router.use('/admin', jwtMiddleware)

router.route('/admin/account')
  .get(handlers.getProfile)
  .put(handlers.updateProfile)

module.exports = router