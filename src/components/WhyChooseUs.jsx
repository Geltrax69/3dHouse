import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <section className="section" style={{ paddingTop: '0' }}>
      <div className="container">
        <motion.h3 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Why Should you Choose Us
        </motion.h3>
        
        <motion.div 
          className="feature-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Banner content or image placeholder */}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
