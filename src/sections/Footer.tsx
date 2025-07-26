import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { personalInfo } from '../data/personalInfo';

const Footer: React.FC = () => (
  <Box id="footer" sx={{ background: '#222', color: '#fff', py: 4, textAlign: 'center' }}>
    <Typography variant="h6" sx={{ fontFamily: 'Google Sans', mb: 1 }}>
      Contact
    </Typography>
    <Typography sx={{ fontFamily: 'Google Sans', mb: 1 }}>{personalInfo.email} | {personalInfo.phone}</Typography>
    <Typography sx={{ fontFamily: 'Google Sans', mb: 1 }}>{personalInfo.location}</Typography>
    <Typography sx={{ fontFamily: 'Google Sans' }}>
      <a href={`https://github.com/${personalInfo.github.replace('@', '')}`} style={{ color: '#4285F4', textDecoration: 'underline', marginRight: 16 }}>GitHub</a>
      <a href={personalInfo.linkedin} style={{ color: '#34A853', textDecoration: 'underline' }}>LinkedIn</a>
    </Typography>
    <Typography sx={{ fontFamily: 'Google Sans', fontSize: 12, mt: 2, color: '#bbb' }}>
      &copy; {new Date().getFullYear()} Hardik Sharma. All rights reserved.
    </Typography>
  </Box>
);

export default Footer; 