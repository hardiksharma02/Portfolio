import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GitHub, LinkedIn, Email, Phone, KeyboardArrowDown } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { personalInfo } from '../data/personalInfo';
import ParticleBackground from '../components/ParticleBackground';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Software Developer', 'Problem Solver', 'Tech Enthusiast'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentRole = roles[roleIndex];

    const typeCharacter = () => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (isDeleting) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setCharIndex(0);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    };

    const timer = setTimeout(typeCharacter, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

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

  const scrollToContent = () => {
    const contentElement = document.getElementById('about');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Box
      id="hero"
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ opacity, y }}
      sx={{
        minHeight: '100vh',
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
      <ParticleBackground />
      
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
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  background: theme => theme.palette.gradient.primary,
                  borderRadius: '2px',
                }
              }}
            >
              {personalInfo.name}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box
              sx={{
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Google Sans',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: theme => theme.palette.text.primary,
                  fontWeight: 500,
                  '&::after': {
                    content: '"|"',
                    animation: 'blink 1s infinite',
                    marginLeft: '2px',
                    opacity: 0.7,
                  },
                  '@keyframes blink': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                  },
                }}
              >
                {typedText}
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Google Sans',
                mb: 3,
                color: theme => theme.palette.text.secondary,
                fontSize: { xs: '1rem', md: '1.25rem' },
                position: 'relative',
                display: 'inline-block',
                '&::before, &::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  width: { xs: '20px', md: '40px' },
                  height: '1px',
                  background: theme => theme.palette.text.secondary,
                },
                '&::before': {
                  right: '100%',
                  marginRight: '10px',
                },
                '&::after': {
                  left: '100%',
                  marginLeft: '10px',
                },
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
            {[
              { icon: <GitHub />, href: `https://github.com/${personalInfo.github.replace('@', '')}` },
              { icon: <LinkedIn />, href: personalInfo.linkedin },
              { icon: <Email />, href: `mailto:${personalInfo.email}` },
              { icon: <Phone />, href: `tel:${personalInfo.phone}` }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  component="a"
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  sx={{
                    color: 'primary.main',
                    background: theme => theme.palette.mode === 'dark'
                      ? 'rgba(144, 202, 249, 0.1)'
                      : 'rgba(25, 118, 210, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      background: theme => theme.palette.mode === 'dark'
                        ? 'rgba(144, 202, 249, 0.2)'
                        : 'rgba(25, 118, 210, 0.2)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  {item.icon}
                </IconButton>
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <IconButton
          onClick={scrollToContent}
          sx={{
            color: 'primary.main',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
              '40%': { transform: 'translateY(-10px)' },
              '60%': { transform: 'translateY(-5px)' },
            },
          }}
        >
          <KeyboardArrowDown />
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default Hero; 