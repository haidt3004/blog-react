var handlers = require('./handlers')
var express = require('express')
var router = express.Router()

router.route('/posts/:id?')
  .get(handlers.getPosts)
  .delete(handlers.deletePost)

module.exports = router