import validate from 'validate.js'

export function validateLoginData(data) {
  var rules = {
    loginId: {
      presence: { message: '^Username can\'t be blank', allowEmpty: false },
    },
    password: {
      presence: { allowEmpty: false },
    },
  }
  return validate(data, rules, { format: 'grouped' })
}

export function validateRegData(data) {
  var rules = {
    companyName: {
      presence: { allowEmpty: false },
    },
    abn: {
      presence: { allowEmpty: false },
    },
    phone: {
      presence: { allowEmpty: false },
    },
    orgType: {
      presence: { allowEmpty: false, message:'^Type of organisation type can\'be blank' },
    },
    password: {
      presence: { allowEmpty: false },
    },
    contactName: {
      presence: { allowEmpty: false, message:'^Name can\'be blank' },
    },
    contactEmail: {
      presence: { allowEmpty: false, message:'^Email can\'be blank' },
    },
  }
  return validate(data, rules, { format: 'grouped' })
}
