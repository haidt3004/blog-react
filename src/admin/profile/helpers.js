import validate from 'validate.js'

export function validateLoginData(data) {
  var constraints = {
    loginId: {
      presence: { message: '^Username can\'t be blank', allowEmpty: false },
    },
    password: {
      presence: { allowEmpty: false },
    },
  }
  return validate(data, constraints, { format: 'grouped' }) || {}
}