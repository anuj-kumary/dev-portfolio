const express = require("express");
const { Resend } = require("resend");
require("dotenv").config();
const validator = require("validator");

const router = express.Router();

// This api is still in development
router.post("/send-email", async (req, res) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email, subject } = req.body;

  if (!email || !subject) {
    return res
      .status(400)
      .json({
        success: false,
        message: "All fields (to, subject, html) are required",
      });
  }

  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email address" });
  }

  try {
    const result = await resend.emails.send({
      from: "anujf0510@gmail.com",
      to: "anujf0510@gmail.com",
      subject: `Cashbox Invitation Request`,
      text: `Hello! You've been invited to our platform Cashbox.`,
      html: `<p>Hello! You've been invited to our platform by <strong> Click <a href='#'>here</a> to join us.</p>`,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully", result });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Failed to send email",
        error: error.message,
      });
  }
});

module.exports = router;
