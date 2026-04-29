import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [1, 2, 3, 4, 5, 6, 7];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="section" style={{ paddingTop: '0' }}>
      <div className="container">
        <motion.h3 
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Our clients
        </motion.h3>
        <motion.div 
          className="thumbnail-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {clients.map((item) => (
            <motion.div 
              key={item} 
              className="thumbnail small"
              variants={itemVariants}
            >
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
