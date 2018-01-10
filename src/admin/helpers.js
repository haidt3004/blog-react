import validate from 'validate.js'

export function validateLoginData(data) {
  var rules = {
    loginId: {
      presence: { message: '^Email can\'t be blank', allowEmpty: false },
    },
    password: {
      presence: { allowEmpty: false },
    },
  }
  return validate(data, rules, { format: 'grouped' })
}

export function validateProfileData(data) {
  var rules = {
    email: {
      presence: true,
    },
    username: {
      presence: true,
    },
  }
  return validate(data, rules, { format: 'grouped' })
}