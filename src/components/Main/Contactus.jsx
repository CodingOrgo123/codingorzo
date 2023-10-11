import React, { useState } from 'react';
import '../../styles/Contactus.css'
import { FaFacebook, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle form submission, such as sending an email or saving to a database.
    console.log('Form submitted with data:', formData);
    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"className='label'>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"className='label'>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className='label'>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-options">
        <p id="via"className='label'>Contact us via:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="social-icon" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
