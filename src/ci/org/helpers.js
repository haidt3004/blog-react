import validate from 'validate.js'

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
    contactFirstname: {
      presence: { allowEmpty: false, message:'^First name can\'be blank' },
    },
    contactLastname: {
      presence: { allowEmpty: false, message:'^Last name can\'be blank' },
    },
    contactEmail: {
      presence: { allowEmpty: false, message:'^Email can\'be blank' },
    },
  }
  return validate(data, rules, { format: 'grouped' })
}
