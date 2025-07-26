import React from 'react';
import { certifications } from '../data/certifications';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SchoolIcon from '@mui/icons-material/School';
import { useTheme, Theme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const borderColors = ['#1976d2', '#43a047', '#8e24aa'];

const Certifications: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="certifications"
      sx={{
        py: 10,
        background: (theme: Theme) => theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)'
          : 'linear-gradient(135deg, #e3f0ff 0%, #f5f9ff 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 1,
            fontFamily: 'Google Sans',
            fontWeight: 700,
            background: (theme: Theme) => theme.palette.gradient.primary,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Certifications
        </Typography>
        <Typography
          align="center"
          variant="h6"
          sx={{
            mb: 4,
            color: (theme: Theme) => theme.palette.text.secondary,
            fontFamily: 'Google Sans',
          }}
        >
          Recognition and accomplishments
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {certifications.map((cert, idx) => (
          <Grid item key={cert.name} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card
                sx={{
                  background: (theme: Theme) => theme.palette.background.paper,
                  boxShadow: (theme: Theme) => theme.palette.mode === 'dark'
                    ? '0 4px 24px 0 rgba(0,0,0,0.3)'
                    : '0 2px 16px 0 rgba(25,118,210,0.08)',
                  borderRadius: 3,
                  borderLeft: `6px solid ${borderColors[idx % borderColors.length]}`,
                  p: 0,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1} gap={1}>
                    <SchoolIcon
                      sx={{
                        color: borderColors[idx % borderColors.length],
                        filter: isDark ? 'brightness(1.2)' : 'none',
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'Google Sans',
                        fontWeight: 700,
                        color: (theme: Theme) => theme.palette.text.primary,
                      }}
                    >
                      {cert.name}
                    </Typography>
                  </Box>
                  {cert.description && (
                    <Typography
                      sx={{
                        fontFamily: 'Google Sans',
                        color: (theme: Theme) => theme.palette.text.secondary,
                        fontSize: 15,
                      }}
                    >
                      {cert.description}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certifications; 