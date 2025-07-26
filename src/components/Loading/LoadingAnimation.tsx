import React from 'react';
import { motion } from 'framer-motion';
import { Box, useTheme } from '@mui/material';

const LoadingAnimation: React.FC = () => {
  const theme = useTheme();

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const dotVariants = {
    initial: {
      y: 0,
      scale: 1,
    },
    animate: {
      y: [-20, 0, -20],
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const colors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.primary.light,
    theme.palette.secondary.light,
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.mode === 'dark'
          ? 'rgba(0, 0, 0, 0.8)'
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        style={{
          display: 'flex',
          gap: '12px',
        }}
      >
        {colors.map((color, index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: color,
              boxShadow: `0 0 20px ${color}66`,
            }}
          />
        ))}
      </motion.div>
      <Box
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: 'absolute',
          width: 100,
          height: 100,
          borderRadius: '50%',
          border: `4px solid ${theme.palette.primary.main}`,
          borderTopColor: 'transparent',
          animation: 'spin 1s linear infinite',
          '@keyframes spin': {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
        }}
      />
    </Box>
  );
};

export default LoadingAnimation; 