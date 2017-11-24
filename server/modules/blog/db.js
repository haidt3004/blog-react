var nextId = 10;
var posts = []
for (let i = 1; i < nextId; i++) {
    posts.push({ _id: i, title: `post ${i}`, content: `post ${i} content` })
}
var db = { posts, nextId }

module.exports = db