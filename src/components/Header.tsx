import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const sections = [
  { label: 'Home', id: 'hero' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'footer' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

const Header: React.FC = () => (
  <AppBar position="sticky" sx={{ background: '#4285F4' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Google Sans' }}>
        Hardik Sharma
      </Typography>
      {sections.map((section) => (
        <Button
          key={section.id}
          color="inherit"
          onClick={() => scrollToSection(section.id)}
          sx={{ fontFamily: 'Google Sans', textTransform: 'none' }}
        >
          {section.label}
        </Button>
      ))}
    </Toolbar>
  </AppBar>
);

export default Header; 