const path = require('path')
const validate = require('validate.js')
const config = require('../../../config')
const { sendMail } = require('../../common/mail')
const { getObjectValue } = require('../../common/helpers')

function sendMailRegSuccessToOrg(user) {
  var contactPerson = getObjectValue(user, 'orgProfile.contactPerson')
  if (!contactPerson) return

  var message = {
    from: `${config.appName} <${config.mail.autoEmail}>`,
    to: `${contactPerson.name} <${contactPerson.email}>`,
    subject: 'Your registration at Care Interchange was submitted successfully',
    templatePath: path.resolve(__dirname, 'email/registrationSuccess.html'),
    params: {
      '{{name}}': contactPerson.name,
    }
  }

  return sendMail(message)
}

function validateRegData(data) {
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

function validateLoginForm(data) {
  var rules = {
    loginId: {
      presence: { message: '^Username can\'t be blank' },
    },
    password: {
      presence: true,
    },
  }
  return validate(data, rules, { format: 'grouped' })
}

module.exports = {
  sendMailRegSuccessToOrg,
  validateRegData,
  validateLoginForm,
}