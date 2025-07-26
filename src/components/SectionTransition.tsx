import React from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
  delay?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom easing function for smoother animation
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition; 