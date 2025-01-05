const sendEmail = require("../utils/mailer");

exports.sendEmailInvite = async (req, res) => {
  try {
    const { email,name,message } = req.body;

    const mailerOptions = {
        from: email,
        to: "anujf0510@gmail.com",
        subject: `New Contact Request from ${name}`,
        text: `
            You have a new contact request:
            
            Name: ${name}
            Email: ${email}
            Message: ${message}
          `,
        html: `
            <p>You have a new contact request:</p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
              <li><strong>Message:</strong> ${message}</li>
            </ul>
          `,
      };

    await sendEmail(mailerOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in Send Email Invite:", error);
    return res.status(500).json({ error: error.message });
  }
};
