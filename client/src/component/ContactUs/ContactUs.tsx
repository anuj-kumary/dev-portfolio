import React, { useState } from 'react';
import './ContactUs.css';
import { sendMail } from '../../rest/Email.rest';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    try {
      await sendMail(formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error while sending the message:', error);
      alert('Failed to send the message. Please try again.');
    }

  }
  return (
    <div id='contact' className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Send me a <span className="text-gradient">message!</span></h1>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <form onSubmit={handleContactSubmit} className="contact-form">
          <div className="row">
            <input value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Name" className="input" required />
            <input value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Email ID" className="input" required />
          </div>
          <div className="row">
            <textarea value={formData.message} onChange={handleChange} name="message" placeholder="Your Message" className="textarea" required></textarea>
          </div>
          <button type="submit" className="button">Shoot</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
