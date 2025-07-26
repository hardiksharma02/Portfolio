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

const iconMap: Record<string, React.ReactNode> = {
  'Deputy General Secretary': <EmojiEventsIcon sx={{ color: '#1976d2' }} fontSize="medium" />,
  'Head': <CodeIcon sx={{ color: '#43a047' }} fontSize="medium" />,
  'Organiser': <MicIcon sx={{ color: '#e53935' }} fontSize="medium" />,
};

const iconBgMap: Record<string, string> = {
  'Deputy General Secretary': '#e3f0ff',
  'Head': '#e8f5e9',
  'Organiser': '#fde8e6',
};

const Leadership: React.FC = () => (
  <Box id="leadership" sx={{ py: 10, background: '#f5f6fa' }}>
    <Typography variant="h4" align="center" sx={{ mb: 1, fontFamily: 'Google Sans', fontWeight: 700 }}>
      Leadership Positions
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {leadership.map((lead) => (
        <Grid key={lead.title} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={{ background: '#fff', boxShadow: '0 2px 16px 0 rgba(25,118,210,0.08)', borderRadius: 3, p: 0 }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2} gap={1}>
                <Box sx={{ background: iconBgMap[lead.title], borderRadius: '50%', p: 1.2, display: 'flex', alignItems: 'center', mr: 1 }}>
                  {iconMap[lead.title]}
                </Box>
                <Typography variant="h6" sx={{ fontFamily: 'Google Sans', fontWeight: 700, color: '#222', textAlign: 'left' }}>{lead.title}</Typography>
              </Box>
              <Typography sx={{ fontFamily: 'Google Sans', color: '#888', fontWeight: 500, mb: 1 }}>{lead.organization}</Typography>
              <Typography sx={{ fontFamily: 'Google Sans', color: '#1976d2', fontWeight: 500, fontSize: 15 }}>{lead.duration}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Leadership; 