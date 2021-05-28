const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID =
  "523891228261-1mel47ctur4qitffg777u2d0in9grc77.apps.googleusercontent.com";
const CLIENT_SECRET = "Y5UkAleiG5q9vMzHfv6NzIge";
const REDIRECT_URL = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04c4Ib2f5XH02CgYIARAAGAQSNwF-L9IrVupsRoa6L7ab9VepJ4CT82gNFhjocOeerZ-x592vTn_eKSj4uw8zDPqJ77ppASzeerQ";
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

// similarly uncomment this

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "dk9054254800@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "DUSHYANT KHODA 👩‍💻👩‍💻👩‍💻 <support.codeintelli@gmail.com>",
      to: "itvmh2205@gmail.com",
      subject: "hello we are testing node mailer using OAuth",
      text: "hello we are testing node mailer",
      html: "<h1>Google OAuth2 Using Node Express And Node Mailer</h1>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log("email send ...", result))
  .catch((error) => console.log(error.message));
