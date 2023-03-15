const sgMail = require('@sendgrid/mail');
require('dotenv').config();
const { MAIL, BACK } = process.env;

sgMail.setApiKey(MAIL);

function sendVerificationEmail(to, token) {
  const msg = {
    to: to,
    from: 'sdelp66@gmail.com',
    subject: 'MediLab Manager, por favor verifica tu cuenta',
    html: `
      <p>¡Gracias por registrarte! Para verificar tu cuenta, haz clic en el siguiente enlace:</p>
      <a href="${BACK}/verify/${token}">Verificar cuenta</a>
    `
  };
  sgMail.send(msg);
}

module.exports = { sendVerificationEmail }

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
//javascript
// const sgMail = require('@sendgrid/mail')
// require('dotenv').config();
// const { MAIL } = process.env;

// sgMail.setApiKey(MAIL);
// const msg = {
//   to: 'sdelp66@hotmail.com', // Change to your recipient
//   from: 'sdelp66@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })