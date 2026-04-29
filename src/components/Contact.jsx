import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section" style={{ paddingTop: '0', paddingBottom: '6rem' }}>
      <div className="container">
        <motion.h3 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Contact Us Now!
        </motion.h3>
        
        <div className="contact-grid">
          {/* Contact Information Card */}
          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="contact-info-title">Contact Information</h4>
            
            <div className="contact-detail">
              <Mail size={20} />
              <span>contact@sanatiocreatives.com</span>
            </div>
            
            <div className="contact-detail">
              <MapPin size={20} />
              <span>111 Town Center Drive, Grand Rapids,<br/>Canterbury Court, Normal 610003,<br/>USA.</span>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-icon">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="social-icon" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                <FaInstagram size={16} />
              </a>
              <a href="#" className="social-icon" style={{ backgroundColor: '#0077b5' }}>
                <FaLinkedin size={16} />
              </a>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-input" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" />
                </div>
              </div>
              
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label className="form-label" style={{ fontWeight: 600 }}>Select Subject?</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input type="radio" name="subject" defaultChecked />
                    <span className="radio-custom"></span>
                    <span>General Inquiry</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="subject" />
                    <span className="radio-custom"></span>
                    <span>Guest Inquiry</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="subject" />
                    <span className="radio-custom"></span>
                    <span>B2B</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="subject" />
                    <span className="radio-custom"></span>
                    <span>Feedback / Bug</span>
                  </label>
                </div>
              </div>
              
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label className="form-label">Message</label>
                <input type="text" className="form-input" placeholder="Write your message..." />
              </div>
              
              <motion.button 
                type="submit" 
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
