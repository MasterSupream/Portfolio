import React, { useState } from 'react';
import { FaTwitter, FaDiscord, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Footer.css';
import { SOCIAL_CONFIG } from '../config/social';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !message) {
      setSubmitStatus('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create mailto link for email client
      const mailtoLink = `mailto:${SOCIAL_CONFIG.email.address}?subject=${encodeURIComponent(SOCIAL_CONFIG.email.subject)}&body=${encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`)}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('Email client opened successfully!');
      setEmail('');
      setMessage('');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    } catch (error) {
      setSubmitStatus('Failed to open email client. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTwitterChat = () => {
    window.open(SOCIAL_CONFIG.twitter.url, '_blank');
  };

  const handleDiscordChat = () => {
    window.open(SOCIAL_CONFIG.discord.url, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-heading">Get in Touch</h2>
          
          <div className="chat-section">
            <h3 className="chat-question">Have a question? Let's chat!</h3>
            <div className="social-buttons">
              <button 
                className="social-btn twitter-btn"
                onClick={handleTwitterChat}
              >
                <FaTwitter />
                <span>Chat on Twitter</span>
              </button>
              <button 
                className="social-btn discord-btn"
                onClick={handleDiscordChat}
              >
                <FaDiscord />
                <span>Chat on Discord</span>
              </button>
            </div>
          </div>

          <div className="email-section">
            <h3 className="email-heading">
              <FaEnvelope />
              Reach out via Email
            </h3>
            
            <form className="email-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="message-input"
                  rows="4"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="send-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {submitStatus && (
                <div className={`submit-status ${submitStatus.includes('successfully') ? 'success' : 'error'}`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Anuvesh Chilwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 