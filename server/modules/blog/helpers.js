function validatePost(data) {
  var validate = require('validate.js')
  var rules = {
    title: {
      presence: { allowEmpty: false },
    },
    content: {
      presence: { allowEmpty: false },
    },
  }
  return validate(data, rules)
}

module.exports = {
  validatePost
}