import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

interface SectionCardProps extends React.PropsWithChildren<{
  sx?: any;
  title?: string;
  role?: string;
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}> {}

const SectionCard: React.FC<SectionCardProps> = ({
  children,
  sx,
  title,
  role = 'region',
  tabIndex = 0,
  onKeyDown,
}) => {
  const theme = useTheme();

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      elevation={3}
      role={role}
      aria-label={title}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      sx={{
        borderRadius: 3,
        p: 3,
        boxShadow: 3,
        '&:focus': {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: '2px',
        },
        '&:focus:not(:focus-visible)': {
          outline: 'none',
        },
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: 'transform 0.3s ease-in-out',
          boxShadow: 6,
        },
        ...sx,
      }}
    >
      <Box>
        {children}
      </Box>
    </Paper>
  );
};

export default SectionCard; 