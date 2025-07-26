import React from 'react';
import { achievements } from '../data/achievements';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useTheme, Theme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const borderColors = ['#1976d2', '#fbc02d', '#43a047'];

const Achievements: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="achievements"
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
          Achievements
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
        {achievements.map((ach, idx) => (
          <Grid item key={ach.title} xs={12} sm={6} md={4}>
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
                    <EmojiEventsIcon
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
                      {ach.title}
                    </Typography>
                  </Box>
                  {ach.year && (
                    <Typography
                      sx={{
                        fontFamily: 'Google Sans',
                        color: (theme: Theme) => theme.palette.text.secondary,
                        fontSize: 15,
                        mb: 0.5,
                      }}
                    >
                      {ach.year}
                    </Typography>
                  )}
                  {ach.description && (
                    <Typography
                      sx={{
                        fontFamily: 'Google Sans',
                        color: (theme: Theme) => theme.palette.text.secondary,
                        fontSize: 15,
                      }}
                    >
                      {ach.description}
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

export default Achievements; 