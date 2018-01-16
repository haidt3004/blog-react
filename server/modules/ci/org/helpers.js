const path = require('path')
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

module.exports = {
  sendMailRegSuccessToOrg
}