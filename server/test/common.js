const chai = require('chai')
const expect = chai.expect
const server = require('../index')
const supertest = require('supertest')
const request = supertest(server)

const {logError} = require('../modules/common/helpers')
const User = require('../modules/common/models/user')
const token = getToken()

async function getToken() {
  try {
    var user = await User.findOne()
    if (user) {
      return user.createToken()
    }
  } catch (error) {
    logError('Error while generating access token')
    logError(error)
  }
  return ''
}

module.exports = {
  expect, request, token
}
