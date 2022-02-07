// "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    //   name: "smtp.ethereal.email",
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: "gmail",
    auth: {
      user: "enoobongndon@gmail.com", // generated ethereal user
      pass: "***", // generated ethereal password
    },
  });

  const sendWelcomeMail = async (email, name) => {
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'enoobongndon@gmail.com', // sender address
    to: "enoobongndon@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: `Welcome to the tasker application ${name} `, // plain text body
    html: `<b>Welcome to the tasker application ${name} </b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

  const sendCancelMail = async (email, name) => {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'enoobongndon@gmail.com', // sender address
      to: "enoobongndon@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: `Hello ${name} , your signup has been cancelled`, // plain text body
      html: `<b>Hello ${name} , your signup has been cancelled</b>`, // html body
    });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = { 
  sendWelcomeMail,
  sendCancelMail
}


