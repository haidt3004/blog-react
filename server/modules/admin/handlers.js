const User = require('../common/models/user')
const { validationExc,
  notFoundExc,
  createAccessToken,
  hashPassword } = require('../common/helpers')
const { validateLoginForm, validateProfileData } = require('./helpers')

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
    var user = await User.findById(req.user._id)
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
    var user = await User.findById(req.user._id)
    var data = req.body
    if (user) {
      let errors = validateProfileData(data, user)
      if (errors) {
        next(validationExc('Invalid Data', errors))
      } else {
        user.email = data.email
        user.username = data.username
        if (data.password)
          user.password = hashPassword(data.password)
        var saved = await user.save()
        res.json({ username: saved.username, email: saved.email })
      }
    } else {
      next(notFoundExc('No profile data found'))
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  login,
  getProfile,
  updateProfile,
}