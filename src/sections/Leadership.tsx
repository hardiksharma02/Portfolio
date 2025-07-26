import React from 'react';
import { leadership } from '../data/leadership';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import MicIcon from '@mui/icons-material/Mic';
import { useTheme, Theme } from '@mui/material/styles';
import { motion } from 'framer-motion';

type LeadershipRole = 'Deputy General Secretary' | 'Head' | 'Organiser';

const iconColors: Record<LeadershipRole, string> = {
  'Deputy General Secretary': '#1976d2',
  'Head': '#43a047',
  'Organiser': '#e53935',
};

const Leadership: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const getIconBgColor = (title: LeadershipRole) => {
    if (isDark) {
      return `${iconColors[title]}22`; // 22 is hex for 13% opacity
    }
    return `${iconColors[title]}11`; // 11 is hex for 7% opacity
  };

  const iconMap: Record<LeadershipRole, React.ReactNode> = {
    'Deputy General Secretary': <EmojiEventsIcon sx={{ color: iconColors['Deputy General Secretary'] }} fontSize="medium" />,
    'Head': <CodeIcon sx={{ color: iconColors['Head'] }} fontSize="medium" />,
    'Organiser': <MicIcon sx={{ color: iconColors['Organiser'] }} fontSize="medium" />,
  };

  return (
    <Box
      id="leadership"
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
          Leadership Positions
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {leadership.map((lead, idx) => (
          <Grid item key={lead.title} xs={12} sm={6} md={4}>
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
                  p: 0,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2} gap={1}>
                    <Box
                      sx={{
                        background: getIconBgColor(lead.title as LeadershipRole),
                        borderRadius: '50%',
                        p: 1.2,
                        display: 'flex',
                        alignItems: 'center',
                        mr: 1,
                      }}
                    >
                      {iconMap[lead.title as LeadershipRole]}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'Google Sans',
                        fontWeight: 700,
                        color: (theme: Theme) => theme.palette.text.primary,
                        textAlign: 'left',
                      }}
                    >
                      {lead.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: 'Google Sans',
                      color: (theme: Theme) => theme.palette.text.secondary,
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    {lead.organization}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Google Sans',
                      color: (theme: Theme) => theme.palette.primary.main,
                      fontWeight: 500,
                      fontSize: 15,
                    }}
                  >
                    {lead.duration}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Leadership; 