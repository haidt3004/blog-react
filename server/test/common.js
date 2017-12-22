const chai = require('chai')
const expect = chai.expect
const server = require('../index')
const supertest = require('supertest')
const request = supertest(server)

describe("api/test", function () {

  it("should return working text", function (done) {
    request
      .get('/api/test')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(function (res) {
        var text = JSON.parse(res.text)
        expect(text).to.equal('api is working')
      })
      .end(done)
  })

})