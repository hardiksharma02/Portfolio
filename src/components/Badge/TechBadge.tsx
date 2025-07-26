import React from 'react';
import Chip from '@mui/material/Chip';

const TechBadge: React.FC<{ label: string; color?: 'primary' | 'success' | 'warning' | 'error' | 'info' }> = ({ label, color = 'primary' }) => (
  <Chip label={label} color={color} size="small" sx={{ fontFamily: 'Google Sans', fontWeight: 500, mr: 1, mb: 1 }} />
);

export default TechBadge; 