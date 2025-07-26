import React from 'react';
import Chip from '@mui/material/Chip';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

interface TechBadgeProps {
  label: string;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  onClick?: () => void;
}

const AnimatedChip = styled(motion(Chip))(({ theme }) => ({
  fontFamily: 'Google Sans',
  fontWeight: 500,
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 0.2s ease-in-out',
  },
  '&:focus': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px',
  },
  '&:focus:not(:focus-visible)': {
    outline: 'none',
  },
}));

const TechBadge: React.FC<TechBadgeProps> = ({ label, color = 'primary', onClick }) => (
  <AnimatedChip
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
    label={label}
    color={color}
    size="small"
    onClick={onClick}
    role="listitem"
    aria-label={`Technology: ${label}`}
    tabIndex={0}
    onKeyPress={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        onClick?.();
      }
    }}
  />
);

export default TechBadge; 