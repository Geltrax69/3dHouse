import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const thumbnails = [1, 2, 3, 4, 5, 6];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div 
          className="thumbnail-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {thumbnails.map((item) => (
            <motion.div 
              key={item} 
              className="thumbnail"
              variants={itemVariants}
            >
            </motion.div>
          ))}
          <motion.div 
            className="thumbnail"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#111111" }}
          >
            <ArrowRight size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
