const User = require('./models/user')

function test (req, res, next) {
  res.json('api is working')
}

async function testDb (req, res, next) {
  try {
    var user = User.findOne()
    if (user)
      res.json(`there is an user with email ${user.email} in database`)
    else
      res.json('there is no user in database')
  } catch (error) {
    next(error)
  }
}

module.exports = { test, testDb }