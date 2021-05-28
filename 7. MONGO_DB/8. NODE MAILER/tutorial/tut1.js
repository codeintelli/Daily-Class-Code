const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "itvmh2205@gmail.com",
    pass: "itvmh@2020",
  },
});

var mailOptions = {
  from: ' "DUSHYANT KHODA😎😎😎😎"<itvmh2205@gmail.com> ',
  to: "dk9054254800@gmail.com",
  subject: "nodemailer class testing",
  text: "hello from nodemailer to itvmh",
};

transport.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("mail send success", info.response);
  }
});
