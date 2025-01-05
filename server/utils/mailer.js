const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  service: "gmail",
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
});

function sendEmail(mailOptions) {
  mailOptions.from = `"Portfolio Notifications" <${process.env.EMAIL_ADDRESS}>`;

  transporter.sendMail(mailOptions, function (err) {
    if (err) {
      console.error("Error occurred while sending email" + err);

      reject(err);
    } else {
      console.log("Email sent successfully");
      resolve(info);
    }
  });
}

module.exports = sendEmail;
