"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports.sendMail = async function sendMail(str, data){
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
    console.log("=======inside nodemailer=========");
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'saketbharti201721@gmail.com', // generated ethereal user
      pass: 'tmsnemxsxlorymyc', // generated ethereal password
    },
  });

  var Osubject, Ohtml, Otext;
  Otext ="welcome";

  if( str == "signup")
  {
    console.log("=====inside Signup condition ========");
    Osubject = `Thank you for Signing ${data.name}`;
    Ohtml= `<h1>Welcome To Food App</h1> Name - ${data.name} Email- ${data.email}`;
  }
  else {
    Osubject = "Reset Password";
    Ohtml =`<h1>FoodApp.com</h1> 
    Here is your link for reset password
    ${data.resetpasswordLink}`

  }
  // send mail with defined transport object
  console.log("======Line 36=============");
  let info = await transporter.sendMail({
    from: '"FoodApp 👻" saketbharti201721@gmail.com', // sender address
    to: data.email, // list of receivers
    subject: Osubject, // Subject line
    // text: Otext, // plain text body
    html: Ohtml, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

