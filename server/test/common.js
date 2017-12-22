const chai = require('chai')
const expect = chai.expect
const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)

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