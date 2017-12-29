const { request, expect, getToken } = require('./common')

describe('blog/admin module', function () {
  var post = null

  it('should return post data when adding post', async function () {
    await request
      .post('/api/admin/posts')
      .set('x-access-token', await getToken())
      .send({
        'title': 'new post',
        'content': 'new post\' content',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(resp => {
        var result = JSON.parse(resp.text)
        expect(result).to.have.property('title')
        expect(result.title).to.equal('new post')
        expect(result).to.have.property('_id')
        post = result
      })
  })

  it('should return post data when get', async function () {
    await request
      .get(`/api/admin/posts/${post._id}`)
      .set('x-access-token', await getToken())
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(resp => {
        var result = JSON.parse(resp.text)
        expect(result).to.have.property('_id')
        expect(result._id).to.equal(post._id)
      })
  })

  it('should return an array of posts', async function () {
    await request
      .get('/api/admin/posts')
      .set('x-access-token', await getToken())
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(resp => {
        var result = JSON.parse(resp.text)
        expect(result).to.be.an('array')
        expect(result.length).to.not.equal(0)
      })
  })

  it('should return post data when updating post', async function () {
    await request
      .put(`/api/admin/posts/${post._id}`)
      .set('x-access-token', await getToken())
      .send({
        'title': 'updated post',
        'content': 'updated content',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(resp => {
        var result = JSON.parse(resp.text)
        expect(result).to.have.property('title')
        expect(result.title).to.equal('updated post')
      })
  })

  it('should return post data when deleting post', async function () {
    await request
      .delete(`/api/admin/posts/${post._id}`)
      .set('x-access-token', await getToken())
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(resp => {
        var result = JSON.parse(resp.text)
        expect(result).to.have.property('title')
        expect(result.title).to.equal('updated post')
      })
  })

})