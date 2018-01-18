const User = require('../models/user')
const { validationExc } = require('../../common/helpers')
const { validateRegData, sendMailRegSuccessToOrg } = require('./helpers')

async function submitRegistration(req, res, next) {
  try {
    var data = req.body
    var errors = validateRegData(data)
    if (errors) {
      return next(validationExc('Invalid registration data', errors))
    }

    var user = new User(data)
    user.status = User.STATUS_PENDING
    user.userType = 'organisation'
    await user.save()
    sendMailRegSuccessToOrg(user)
    return res.json(user)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  submitRegistration,
}
