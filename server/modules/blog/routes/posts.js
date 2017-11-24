const express = require('express');
const router = express.Router();
const db = require('../db')
const { validatePost } = require('../helpers')
const { validationExc } = require('../../common/helpers')

router.get('/api/posts', function (req, res) {
  setTimeout(() => res.json(db.posts), 500)
})

router.get('/api/posts/:id', function (req, res, next) {
  var post = db.posts.find(post => post._id == req.params.id)
  if (post === undefined)
    return next(new Error('post not found'))
  setTimeout(() => res.json(post), 500)
})

router.post('/api/posts', function (req, res, next) {
  var post = req.body;
  var errors = validatePost(post)
  if (errors) {
    return next(validationExc('Invalid data', errors))
  } else {
    post._id = db.nextId
    db.posts.push(post)
    db.nextId++
    setTimeout(() => res.json(post), 500)
  }
})

router.put('/api/posts/:id', function (req, res, next) {
  var post = db.posts.find(post => post._id == req.params.id)
  if (post === undefined) {
    return next(notFoundExc('No post found'))
  }

  var { _id, ...data } = req.body
  var errors = validatePost(data)
  if (errors) {
    return next(validationExc('Invalid data', errors))
  } else {
    Object.assign(post, data)
    setTimeout(() => res.json(post), 500)
  }
})

router.delete('/api/posts/:id', function (req, res, next) {
  var idx = db.posts.findIndex(post => post._id == req.params.id)
  if (idx === -1) {
    return next(notFoundExc('No post found'))
  }

  setTimeout(() => res.json(db.posts[idx]), 500)
  db.posts.splice(idx, 1)
})

module.exports = router;
