const User = require('../models/user')
const createMiddleware = require('../../common/jwt')
const { validationExc } = require('../../common/helpers')
const {
  validateLoginForm,
  validateRegData,
  sendMailRegSuccessToOrg
} = require('./helpers')

async function register(req, res, next) {
  try {
    var data = req.body
    var errors = validateRegData(data)
    if (errors) {
      return next(validationExc('Invalid registration data', errors))
    }

    var user = new User()
    user.set({
      email: data.email,
      status: User.STATUS_PENDING,
      userType: 'organisation',
      orgProfile: {
        companyName: data.companyName,
        abn: data.abn,
        phone: data.phone,
        orgType: data.orgType,
        contactPerson: {
          name: data.contactName,
          email: data.contactEmail,
        }
      }
    })
    user.setPassword(data.password)
    await user.save()
    sendMailRegSuccessToOrg(user)
    var { _id, __v, status, password, userType, ...safeData } = user.toObject()
    return res.json(safeData)
  } catch (err) {
    next(err)
  }
}

async function login(req, res, next) {
  try {
    var data = req.body
    var errors = validateLoginForm(data)
    if (errors) {
      return next(validationExc('Please correct your input.', errors))
    }

    var user = await User.findOne({ 'orgProfile.contactPerson.email': data.loginId, userType:'organisation' })
    if (!user || !user.checkPassword(data.password)) {
    // if (!user) {
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

const verifyOrgToken = createMiddleware('jwtOrg', jwtPayload => User.findOne({
  _id: jwtPayload.userId,
  userType: 'organisation',
}))

module.exports = {
  register,
  login,
  verifyOrgToken,
}
