import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 40 }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
      }}
    >
      {/* Outer circle of dots */}
      {[...Array(12)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: size * 0.15,
            height: size * 0.15,
            borderRadius: '50%',
            background: theme.palette.primary.main,
            transform: `rotate(${i * 30}deg) translate(${size * 0.4}px) rotate(-${i * 30}deg)`,
          }}
        />
      ))}

      {/* Center icon */}
      <Box
        component={motion.div}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: size * 0.3,
          height: size * 0.3,
          color: theme.palette.primary.main,
          '& svg': {
            width: '100%',
            height: '100%',
          },
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a9 9 0 0 1 9 9" />
          <path d="M12 21a9 9 0 0 1-9-9" />
          <path d="M12 8l4 4-4 4" />
        </svg>
      </Box>
    </Box>
  );
};

export default LoadingSpinner; 