import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useLoading } from '../../context/LoadingContext';

const LoadingOverlay: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          background: theme => theme.palette.mode === 'dark'
            ? 'rgba(10, 25, 41, 0.9)'
            : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.4,
          ease: "linear",
          repeat: Infinity
        }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <CircularProgress
          size={60}
          thickness={4}
          sx={{
            color: theme => theme.palette.mode === 'dark'
              ? theme.palette.primary.light
              : theme.palette.primary.main
          }}
        />
      </motion.div>
      <Typography
        component={motion.p}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        variant="h6"
        sx={{
          mt: 2,
          fontFamily: 'Google Sans',
          color: theme => theme.palette.mode === 'dark'
            ? theme.palette.primary.light
            : theme.palette.text.primary,
          position: 'relative',
          zIndex: 1,
        }}
      >
        Loading...
      </Typography>
    </motion.div>
  );
};

export default LoadingOverlay; 