const Post = require('./models/post')

async function getPosts(req, res, next) {
  try {
    var posts = await Post.find()
    res.json(posts)
  } catch (err) {
    next(err)
  }
}

module.exports = { getPosts }
