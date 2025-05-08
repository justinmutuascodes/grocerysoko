import React, { useState } from 'react';
import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('Submitting...');

    // Simulate form submission (replace with your actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
      console.log('Form Data Submitted:', formData);
      setSubmissionStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmissionStatus('There was an error submitting your message. Please try again later.');
    }
  };

    // const TypewriterPage = () => {
    // const navigate = useNavigate();
    // }
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-us-header">
        <h1>Contact Us</h1>
        
        {/* <div className="stunning-text-container">
          <Typewriter text= "We'd love to hear from you! Please use the form below or feel free to reach out via the other methods listed." speed={70} />
        </div> */}
      </div>

      <div className="contact-details">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <section className="row"> {/* Opening section tag */}
            <form onSubmit={handleSubmit}>
              <div className="form-group form-control">
                <input
                  type="email"
                  id="email"
                  name="email"
                  width="100%"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group form-control">
                <label htmlFor="message">Message:</label><br />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="7"
                  cols="53"
                  required
                ></textarea>
              </div>
              <button type="submit" disabled={submissionStatus === 'Submitting...'}>
                {submissionStatus === 'Submitting...' ? 'Submitting...' : 'Send Message'}
              </button>
              {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
            </form>
          </section> {/* Closing section tag added here */}
        </div>

        <div className="other-contact-info">
          <h2>Other Ways to Connect</h2>
          <p><strong>Email:</strong> <a href="mailto:@yourdomain.com">gogetgroceries@yahoo.com</a></p>
          <p><strong>Phone:</strong> +254 7567 654 800</p>
          <p><strong>Address:</strong>
           Upperhill 5th avenue Appex tower 5th floor<br />
            Nairobi, Kenya
          </p>

        <div>
            <b>Contact Info</b><br />
            <Link to="https://www.instagram.com/" target="_blank" className="text-light" id='ig'><i className="bi bi-instagram" id="icons"></i> </Link>
            <Link to="https://web.facebook.com/?_rdc=1&_rdr#" target="_blank" className="text-light" id='fb'><i className="bi bi-facebook"></i> </Link>
            <Link to="https://x.com/" target="_blank" className="text-light" id='x'><i className="bi bi-twitter-x"></i> </Link>
        </div>
        </div>
      </div>

      {/* Optional Social Media Links */}
      <div className="social-links">
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter-icon.png" alt="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;