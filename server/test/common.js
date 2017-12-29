const chai = require('chai')
const expect = chai.expect
const server = require('../index')
const supertest = require('supertest')
const request = supertest(server)

const { logError } = require('../modules/common/helpers')
const User = require('../modules/common/models/user')
var token = undefined

async function getToken() {
  if (token === undefined) {
    try {
      var user = await User.findOne()
      token = user.createToken().value
    } catch (error) {
      logError('Error while generating access token')
      throw error
    }
  }

  return token
}

module.exports = {
  expect, request, getToken
}
