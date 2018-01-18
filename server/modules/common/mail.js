const mailer = require('nodemailer')
const fs = require('fs')
const logger = require('./log')
const config = require('../../config')

/**
 * Send mail using nodemailer
 *
 * @param {Object} message
 *   let message = {
 *     from: 'Sender Name <sender@example.com>',
 *     to: 'Recipient <recipient@example.com>',
 *     subject: 'mailer is unicode friendly',
 *     html: '<p><b>Hello</b> to {{username}}</p>'
 *     templatePath: '/email/template1.html',
 *     params: {
 *       '{{username}}': 'test'
 *     }
 *   }
 */
async function sendMail({ params, templatePath, ...message }) {
  try {
    // load content from template file
    if (templatePath) {
      message.html = fs.readFileSync(templatePath, 'utf8')
    }

    // replace params in mail template
    if (params) {
      for(let search in params) {
        let repl = params[search]
        message.html = message.html.replace(new RegExp(search, 'g'), repl)
      }
    }

    // prepare transport options
    var transportOptions = config.mail
    if (process.env.NODE_ENV==='dev') {
      logger.info('Mail will be sent in test environment.')
      try {
        var account = await mailer.createTestAccount()
        transportOptions = {
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass
          }
        }
      } catch (error) {
        throw new Error(`Failed to create a testing account: ${error.message}`)
      }
    }

    // send the mail
    logger.info('Going to send mail with message:', message)
    let transporter = mailer.createTransport(transportOptions)
    var info = await transporter.sendMail(message)

    // Preview only available when sending through an Ethereal account
    if (process.env.NODE_ENV==='dev') {
      logger.info('Preview URL: %s', mailer.getTestMessageUrl(info))
    }
  } catch (error) {
    logger.error('An error occurred while sending mail:', error)
  }
}

module.exports = {
  sendMail
}