const { request, expect } = require('./common')

describe('admin login', function () {

  it('should return token when login success', function (done) {
    request
      .post('/api/account/session')
      .send({
        'loginId': 'admin@m.mm',
        'password': '123123'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(function (res) {
        var result = JSON.parse(res.text)
        expect(result).to.have.property('token')
        expect(result).to.have.property('username')
      })
      .end(done)
  })

})

describe('api/account', function () {

  it('should return profile data', function (done) {
    done()
  })

  it('should return profile data when updating', function (done) {
    done()
  })

})