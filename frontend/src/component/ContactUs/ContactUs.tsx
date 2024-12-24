import React from 'react';
import './ContactUs.css';
import { sendEmail } from '../../rest/email.rest';


const emailData = {
  to: 'anujf0510@example.com',
  from: 'anujf0510@example.com',
  subject: 'Welcome to Our Service',
  body: '<p>Thank you for joining our platform!</p>'
};


const ContactUs: React.FC = () => {
  const handleContactApi = async () => {
    try {
      const response = await sendEmail(emailData)
      console.log(response, "response")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div id='contact' className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Send me a <span className="text-gradient">message!</span></h1>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <form className="contact-form">
          <div className="row">
            <input type="text" name="name" placeholder="Name" className="input" required />
            <input type="email" name="email" placeholder="Email ID" className="input" required />
          </div>
          <div className="row">
            <textarea name="message" placeholder="Your Message" className="textarea" required></textarea>
          </div>
          <button onClick={handleContactApi} className="button">Shoot</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
