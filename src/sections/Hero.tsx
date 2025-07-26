import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => (
  <Box id="hero" sx={{
    py: 10,
    textAlign: 'center',
    background: '#e3f0ff', // soft blue background
    color: '#222',
    borderBottom: '1px solid #dbeafe',
    boxShadow: '0 2px 16px 0 rgba(25,118,210,0.04)',
  }}>
    <Box sx={{
      display: 'inline-block',
      background: '#fff',
      px: 6,
      py: 5,
      borderRadius: 4,
      boxShadow: '0 4px 24px 0 rgba(25,118,210,0.08)',
      mb: 2,
    }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          fontFamily: 'Google Sans',
          color: '#1976d2',
          mb: 2,
        }}
      >
        {personalInfo.name}
      </Typography>
      <Typography variant="h5" sx={{ fontFamily: 'Google Sans', mb: 1, color: '#222' }}>
        Software Developer
      </Typography>
      <Typography sx={{ fontFamily: 'Google Sans', mb: 1 }}>{personalInfo.location}</Typography>
      <Typography sx={{ fontFamily: 'Google Sans', mb: 1 }}>{personalInfo.email} | {personalInfo.phone}</Typography>
      <Typography sx={{ fontFamily: 'Google Sans' }}>
        <a href={`https://github.com/${personalInfo.github.replace('@', '')}`} style={{ color: '#1976d2', textDecoration: 'underline', marginRight: 16 }}>GitHub</a>
        <a href={personalInfo.linkedin} style={{ color: '#1976d2', textDecoration: 'underline' }}>LinkedIn</a>
      </Typography>
    </Box>
  </Box>
);

export default Hero; 