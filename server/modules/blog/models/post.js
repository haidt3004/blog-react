var mongoose = require('mongoose')
var Schema = mongoose.Schema
var postSchema = Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
})
var Post = mongoose.model('blog.posts', postSchema)

module.exports = Post
