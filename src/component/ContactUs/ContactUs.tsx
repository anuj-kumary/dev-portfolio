import React from 'react';
import './ContactUs.css';

const ContactUs: React.FC = () => {
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
          <button type="submit" className="button">Shoot</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
