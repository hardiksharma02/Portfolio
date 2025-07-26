import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  
  return (
    <Box
      id="hero"
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: theme => theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)'
          : 'linear-gradient(135deg, #e3f0ff 0%, #f5f9ff 100%)',
        color: theme => theme.palette.text.primary,
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontFamily: 'Google Sans',
                background: theme => theme.palette.gradient.primary,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
              }}
            >
              {personalInfo.name}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Google Sans',
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 3,
                color: theme => theme.palette.text.primary,
                fontWeight: 500,
              }}
            >
              Software Developer
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Google Sans',
                mb: 3,
                color: theme => theme.palette.text.secondary,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              {personalInfo.location}
            </Typography>
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <IconButton
              component="a"
              href={`https://github.com/${personalInfo.github.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary.main',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  backgroundColor: theme => theme.palette.mode === 'dark'
                    ? 'rgba(144, 202, 249, 0.1)'
                    : 'rgba(25, 118, 210, 0.1)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              component="a"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary.main',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  backgroundColor: theme => theme.palette.mode === 'dark'
                    ? 'rgba(144, 202, 249, 0.1)'
                    : 'rgba(25, 118, 210, 0.1)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component="a"
              href={`mailto:${personalInfo.email}`}
              sx={{
                color: 'primary.main',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  backgroundColor: theme => theme.palette.mode === 'dark'
                    ? 'rgba(144, 202, 249, 0.1)'
                    : 'rgba(25, 118, 210, 0.1)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <Email />
            </IconButton>
            <IconButton
              component="a"
              href={`tel:${personalInfo.phone}`}
              sx={{
                color: 'primary.main',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  backgroundColor: theme => theme.palette.mode === 'dark'
                    ? 'rgba(144, 202, 249, 0.1)'
                    : 'rgba(25, 118, 210, 0.1)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <Phone />
            </IconButton>
          </motion.div>
        </Box>
      </Container>

      {/* Background decoration */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme => theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 10% 20%, rgba(144, 202, 249, 0.05) 0%, transparent 50%)'
            : 'radial-gradient(circle at 10% 20%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default Hero; 