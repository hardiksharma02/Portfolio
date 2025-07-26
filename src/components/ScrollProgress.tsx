import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Box, useTheme } from '@mui/material';

const ScrollProgress: React.FC = () => {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: theme.palette.mode === 'dark'
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '100%',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          transformOrigin: '0%',
          scaleX,
        }}
      />
      
      {/* Glowing effect */}
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '100%',
          background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
          opacity: useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 30,
          }),
          filter: 'blur(8px)',
          transform: 'translateY(2px)',
        }}
      />
    </Box>
  );
};

export default ScrollProgress; 