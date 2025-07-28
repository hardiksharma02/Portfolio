import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon
} from '@mui/icons-material';
import { personalInfo } from '../data/personalInfo';

const Footer: React.FC = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box 
      component="footer" 
      sx={{
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(to top, #0a1929 0%, #132f4c 100%)'
          : 'linear-gradient(to top, #e3f0ff 0%, #f5f9ff 100%)',
        pt: 6,
        pb: 4,
        width: '100%',
        position: 'relative',
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
          maxWidth: '100% !important'
        }}
      >
        <Grid 
          container 
          spacing={4}
          sx={{
            maxWidth: '100%',
            mx: 'auto',
            justifyContent: 'space-around'
          }}
        >
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: 'Google Sans',
                fontWeight: 600,
                mb: 2,
                background: theme.palette.gradient.primary,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography 
                component="a" 
                href="#about" 
                sx={{ 
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  fontFamily: 'Google Sans',
                }}
              >
                About
              </Typography>
              <Typography 
                component="a" 
                href="#experience" 
                sx={{ 
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  fontFamily: 'Google Sans',
                }}
              >
                Experience
              </Typography>
              <Typography 
                component="a" 
                href="#projects" 
                sx={{ 
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  fontFamily: 'Google Sans',
                }}
              >
                Projects
              </Typography>
              <Typography 
                component="a" 
                href="#contact" 
                sx={{ 
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  fontFamily: 'Google Sans',
                }}
              >
                Contact
              </Typography>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: 'Google Sans',
                fontWeight: 600,
                mb: 2,
                background: theme.palette.gradient.primary,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: theme.palette.primary.main }} />
                <Typography 
                  sx={{ 
                    color: theme.palette.text.primary,
                    fontFamily: 'Google Sans',
                  }}
                >
                  {personalInfo.email}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: theme.palette.primary.main }} />
                <Typography 
                  sx={{ 
                    color: theme.palette.text.primary,
                    fontFamily: 'Google Sans',
                  }}
                >
                  {personalInfo.phone}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationIcon sx={{ color: theme.palette.primary.main }} />
                <Typography 
                  sx={{ 
                    color: theme.palette.text.primary,
                    fontFamily: 'Google Sans',
                  }}
                >
                  {personalInfo.location}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: 'Google Sans',
                fontWeight: 600,
                mb: 2,
                background: theme.palette.gradient.primary,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton 
                component="a"
                href={`https://github.com/${personalInfo.github.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: theme.palette.text.primary,
                  '&:hover': { 
                    color: theme.palette.primary.main,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                component="a"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: theme.palette.text.primary,
                  '&:hover': { 
                    color: theme.palette.primary.main,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box 
          sx={{ 
            mt: 6, 
            mb: 4,
            height: '1px',
            background: theme.palette.divider,
            width: '100%',
          }} 
        />

        {/* Bottom Section */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '100%',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Typography 
            sx={{ 
              fontFamily: 'Google Sans',
              color: theme.palette.text.secondary,
            }}
          >
            &copy; {new Date().getFullYear()} Hardik Sharma. All rights reserved.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton 
              onClick={scrollToTop}
              sx={{ 
                color: theme.palette.primary.main,
                '&:hover': { 
                  background: theme.palette.primary.main + '1A',
                },
              }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 