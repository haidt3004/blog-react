const mongoose = require('mongoose')
const Schema = mongoose.Schema
const postSchema = Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps: true })
const Post = mongoose.model('blog.posts', postSchema)

module.exports = Post
