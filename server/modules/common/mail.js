const mailer = require('nodemailer')

async function send() {
  try {
    var account = await mailer.createTestAccount()
    // Create a SMTP transporter object
    let transporter = mailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass
      }
    })

    // Message object
    let message = {
      from: 'Sender Name <sender@example.com>',
      to: 'Recipient <recipient@example.com>',
      subject: 'mailer is unicode friendly ✔',
      text: 'Hello to myself!',
      html: '<p><b>Hello</b> to myself!</p>'
    }

    var info = await transporter.sendMail(message)
    console.log('Message sent: %s', info.messageId)
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', mailer.getTestMessageUrl(info))
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  send
}