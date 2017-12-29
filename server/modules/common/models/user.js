var mongoose = require('mongoose')
var { hashPassword, verifyPassword, createAccessToken } = require('../helpers')

var userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true })

userSchema.methods.setPassword = function (value) {
  this.password = hashPassword(value)
}

userSchema.methods.checkPassword = function (value) {
  return verifyPassword(value, this.password)
}

userSchema.methods.createToken = function (duration='1h') {
  return createAccessToken(this.password, duration)
}

var User = mongoose.model('common.users', userSchema)

module.exports = User

