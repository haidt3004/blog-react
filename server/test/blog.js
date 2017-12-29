const { request, expect } = require('./common')

describe('blog module', function () {

  it('should return post data', async function () {
    // get post list
    var post = {}
    await request
      .get('/api/posts')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(resp => {
        var result = JSON.parse(resp.text)
        expect(result).to.be.an('array')
        expect(result.length).to.not.equal(0, 'No posts found. Please use test database with sample data')
        post = result[0]
        expect(post).to.have.property('_id')
      })

    // get post detail
    await request
      .get(`/api/posts/${post._id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(resp => {
        var result = JSON.parse(resp.text)
        expect(result).to.have.property('_id')
        expect(result._id).to.equal(post._id)
      })
  })

})