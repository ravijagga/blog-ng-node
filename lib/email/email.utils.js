const nodemailer = require('nodemailer');
const envConfig = require('../../config/env');
const commonErrors = require('../error/common-errors');

if (!envConfig.sendgrid.user || !envConfig.sendgrid.pass)
  throw new commonErrors.InternalServerError('Sendgrid Login details not found!');

let transporter = nodemailer.createTransport({
  service: 'SendGrid', // no need to set host or port etc.
  auth: {
    user: envConfig.sendgrid.user,
    pass: envConfig.sendgrid.pass
  }
});

function sendEmail(mailOptions) {
  // send mail with defined transport object
  return transporter.sendMail(mailOptions);
}

function sendVerificationEmail(to, emailToken) {
  // setup email data
  const verificationUrl = `http://localhost:3000/api/email/verify/${emailToken}`;
  const mailOptions = {
    from: '"Ravi Jagga" <no-reply@ravijagga.com>',
    to,
    subject: 'New Account Verification Mail',
    text: `Copy and open below url in your browser to complete email verification` +
      ` process\n\n${verificationUrl}` +
      `\n\nNote: This verification link is only valid for 24 hours.`,
    html: `<p>Open below link to complete email verification process</p>
          <a href="${verificationUrl}">${verificationUrl}</a>
          <span>Note: This verification link is only valid for 24 hours.</span>`
  };

  // send email and return Promise object
  return sendEmail(mailOptions);
}

module.exports = { sendEmail, sendVerificationEmail };
