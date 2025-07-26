import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: theme.palette.mode === 'dark'
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          background: theme.palette.gradient.primary,
          transformOrigin: '0%',
          scaleX,
        }}
      />
    </Box>
  );
};

export default ScrollProgress; 