var mongoose = require('mongoose')
var { hashPassword, verifyPassword } = require('../helpers')

var userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

userSchema.methods.setPassword = function (value) {
  this.password = hashPassword(value)
}

userSchema.methods.checkPassword = function (value) {
  return verifyPassword(value, this.password)
}

var User = mongoose.model('common.users', userSchema)

module.exports = User

