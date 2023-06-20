const nodemailer = require("nodemailer");
require("dotenv").config();

const { UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "e-gap@ukr.net",
    pass: UKR_NET_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = (verifyEmail) => {
  transporter
    .sendMail({ ...verifyEmail, from: '"Fred Foo 👻" <e-gap@ukr.net>' })
    .then(() => console.log("success"))
    .catch((error) => console.log(error));
};

module.exports = sendEmail;
