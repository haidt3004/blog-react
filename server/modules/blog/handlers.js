const Post = require('./models/post')

async function getPosts(req, res, next) {
  try {
    var posts = await Post.find()
    res.json(posts)
  } catch (err) {
    next(err)
  }
}

async function deletePost(req, res, next) {
  try {
    var post = await Post.findByIdAndRemove(req.params.id)
    res.json(post)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getPosts,
  deletePost,
}
