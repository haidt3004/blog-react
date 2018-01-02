const { request, expect, getApiToken } = require('./common')

describe('admin module', function () {
  it('should return token when login success', function (done) {
    request
      .post('/api/admin/session')
      .send({
        'loginId': 'admin@m.mm',
        'password': '123123'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(resp => {
        var result = JSON.parse(resp.text)
        expect(result).to.have.property('token')
        expect(result).to.have.property('username')
      })
      .end(done)
  })

  it('should return profile data when get', async function () {
    var token = await getApiToken()
    await request
      .get('/api/admin/account')
      .set('Authorization', `bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(resp => {
        var result = JSON.parse(resp.text)
        expect(result).to.have.property('username')
      })
  })

  it('should return profile data when updating', async function () {
    var token = await getApiToken()
    await request
      .put('/api/admin/account')
      .set('Authorization', `bearer ${token}`)
      .send({
        'email': 'admin@m.mm',
        'username': 'admin1',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(resp => {
        var result = JSON.parse(resp.text)
        expect(result).to.have.property('username')
        expect(result.username).to.equal('admin1')
      })
  })

})
