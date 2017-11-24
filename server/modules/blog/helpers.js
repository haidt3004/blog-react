function validatePost(data) {
  var validate = require("validate.js")
  var rules = {
      title: {
          presence: true,
      },
      content: {
          presence: true,
      },
  }
  return validate(data, rules);
}

module.exports = {
  validatePost
}