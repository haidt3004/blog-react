const User = require('../common/models/user')
const { validationExc, notFoundExc, createAccessToken } = require('../common/helpers')
const { validateLoginForm } = require('./helpers')

async function login(req, res, next) {
  try {
    var data = req.body
    var errors = validateLoginForm(data)
    if (errors) {
      return next(validationExc('Please correct your input.', errors))
    }

    var user = await User.findOne({ email: data.loginId })
    if (!user || !user.checkPassword(data.password)) {
      return res.status(400).json(validationExc('Invalid login information.'))
    }

    res.json({
      token: createAccessToken(user, data.remember ? '30 days' : '3h'),
      username: user.username,
      id: user._id
    })
  } catch (err) {
    next(err)
  }
}

async function getProfile(req, res, next) {
  try {
    var user = await User.findById(req.userId)
    if (user) {
      return res.json({ email: user.email, username: user.username })
    } else {
      next(notFoundExc('No profile data found'))
    }
  } catch (err) {
    next(err)
  }
}

async function updateProfile(req, res, next) {
  try {
    var user = await User.findById(req.userId)
    if (user) {
      return res.json({ email: user.email, username: user.username })
    } else {
      next(notFoundExc('No profile data found'))
    }
  } catch (err) {
    next(err)
  }
  // User.findById(req.userId)
  //   .then(function (user) {
  //     data = common.filterObjectProperties(req.body, [
  //       'email', 'username', 'password', 'currentPassword'
  //     ])

  //     var errors = user.validateProfileData(data)
  //     if (errors) {
  //       res.status(400).json({
  //         code: 'invalid_data',
  //         message: 'Invalid Data',
  //         errors: errors,
  //       })
  //     } else {
  //       Object.assign(user, data)
  //       return user.save().then(function (updatedUser) {
  //         res.json(common.filterObjectProperties(updatedUser, ['email', 'username']))
  //       })
  //     }
  //   }).catch(next)
}

module.exports = {
  login,
  getProfile,
  updateProfile
}