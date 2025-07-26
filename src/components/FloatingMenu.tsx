import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, IconButton, useTheme, Tooltip } from '@mui/material';
import {
  Menu as MenuIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { personalInfo } from '../data/personalInfo';

interface FloatingMenuProps {
  onThemeToggle: () => void;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ onThemeToggle }) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeToggle = () => {
    onThemeToggle();
    setIsOpen(false);
  };

  const menuItems = [
    {
      icon: theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />,
      onClick: handleThemeToggle,
      label: `Switch to ${theme.palette.mode === 'dark' ? 'light' : 'dark'} mode`,
    },
    {
      icon: <GitHubIcon />,
      href: `https://github.com/${personalInfo.github.replace('@', '')}`,
      label: 'GitHub',
    },
    {
      icon: <LinkedInIcon />,
      href: personalInfo.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: <EmailIcon />,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
    },
    {
      icon: <KeyboardArrowUpIcon />,
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
      },
      label: 'Scroll to top',
    },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      {isOpen && (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '0px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'flex-end',
          }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ position: 'relative' }}
            >
              <Tooltip 
                title={item.label}
                placement="left"
                arrow
              >
                <IconButton
                  component={item.href ? 'a' : 'button'}
                  href={item.href}
                  target={item.href ? '_blank' : undefined}
                  onClick={item.onClick}
                  sx={{
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    color: theme.palette.primary.main,
                    '&:hover': {
                      background: theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            </motion.div>
          ))}
        </Box>
      )}

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            width: 56,
            height: 56,
            background: theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            color: theme.palette.primary.main,
            '&:hover': {
              background: theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.2)'
                : 'rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 225 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <MenuIcon />
          </motion.div>
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default FloatingMenu; 