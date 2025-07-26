import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const SectionCard: React.FC<React.PropsWithChildren<{ sx?: any }>> = ({ children, sx }) => (
  <Paper elevation={3} sx={{ borderRadius: 3, p: 3, boxShadow: 3, ...sx }}>
    <Box>
      {children}
    </Box>
  </Paper>
);

export default SectionCard; 