const User = require('../models/user')
const createMiddleware = require('../../common/jwt')
const { validationExc } = require('../../common/helpers')
const { validateLoginForm } = require('./helpers')

async function login(req, res, next) {
  try {
    var data = req.body
    var errors = validateLoginForm(data)
    if (errors) {
      return next(validationExc('Please correct your input.', errors))
    }

    var user = await User.findOne({ 'orgProfile.contactPerson.email': data.loginId, userType:'organisation' })
    if (!user || !user.checkPassword(data.password)) {
      return res.status(400).json(validationExc('Invalid login information.'))
    }

    res.json({
      token: user.createToken(data.remember ? '30 days' : '3h'),
      username: user.username,
      id: user._id
    })
  } catch (err) {
    next(err)
  }
}

const verifyAdminToken = createMiddleware('jwtCi', jwtPayload => User.findOne({
  _id: jwtPayload.userId,
  userType: 'admin',
}))

module.exports = {
  login,
  verifyAdminToken,
}
