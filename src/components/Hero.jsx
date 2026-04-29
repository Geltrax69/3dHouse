import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      {/* Top Light Section */}
      <section className="top-section">
        <div className="navbar-placeholder"></div>
        <div className="top-section-content">
          <motion.div 
            className="hero-text-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="hero-subtitle">Turn your property into</p>
            <h1 className="hero-title">Experiences</h1>
            <p className="hero-subtitle" style={{ fontSize: '1.2rem', fontWeight: 600 }}>people never forget!</p>
          </motion.div>
        </div>
        
        {/* The curved cutout with the badge */}
        <div className="cutout-container">
          <div className="cutout-circle">
            <motion.div 
              className="hero-badge"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {/* Jagged edge can be added via CSS clip-path or background image */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Section - Hero Content */}
      <section className="dark-section">
        <div className="container">
          <div className="hero-content-grid">
            <motion.div 
              className="hero-image-placeholder"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>
            
            <motion.div 
              className="hero-text-area"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="hero-name">Yaavis Restaurant</h2>
              <p className="hero-description">
                Lorem ipsum dolor sit amet consectetur. Aliquam tempus in urna amet habitant aliquet tempor vestibulum pellentesque. Mauris magna in aliquet morbi ante natoque. Mi congue sapien elementum ultrices pellentesque vitae pulvinar ipsum. Aliquam rhoncus amet magnis felis bibendum massa. Blandit morbi aliquam commodo vivamus imperdiet fringilla odio arcu ut. Nulla gravida rhoncus id ac maecenas orci egestas sit lacus. Ut varius id volutpat accumsan. Nisi viverra diam odio ut.
              </p>
              <motion.button 
                className="pill-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Button
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
