const sendEmail = require("../utils/mailer");

exports.sendEmailInvite = async (req, res) => {
  try {
    const { email } = req.body;

    const mailerOptions = {
      from: email,
      to: "anujf0510@gmail.com",
      subject: `Cashbox Invitation Request`,
      text: "Hello! You've been invited to our platform cashbox.",
      html: "<p>Hello! You've been invited to our platform. Click <a href='#'>here</a> to join us.</p>",
    };

    await sendEmail(mailerOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in Send Email Invite:", error);
    return res.status(500).json({ error: error.message });
  }
};
