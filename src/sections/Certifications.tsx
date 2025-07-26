import React from 'react';
import { certifications } from '../data/certifications';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SchoolIcon from '@mui/icons-material/School';

const borderColors = ['#1976d2', '#43a047', '#8e24aa'];

const Certifications: React.FC = () => (
  <Box id="certifications" sx={{ py: 10, background: '#f5f6fa' }}>
    <Typography variant="h4" align="center" sx={{ mb: 1, fontFamily: 'Google Sans', fontWeight: 700 }}>
      Certifications
    </Typography>
    <Typography align="center" sx={{ mb: 4, color: '#888', fontFamily: 'Google Sans' }}>
      Recognition and accomplishments
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {certifications.map((cert, idx) => (
        <Grid key={cert.name} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={{ background: '#fff', boxShadow: '0 2px 16px 0 rgba(25,118,210,0.08)', borderRadius: 3, borderLeft: `6px solid ${borderColors[idx % borderColors.length]}`, p: 0 }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={1} gap={1}>
                <SchoolIcon sx={{ color: borderColors[idx % borderColors.length] }} />
                <Typography variant="h6" sx={{ fontFamily: 'Google Sans', fontWeight: 700, color: '#222' }}>{cert.name}</Typography>
              </Box>
              {cert.description && (
                <Typography sx={{ fontFamily: 'Google Sans', color: '#888', fontSize: 15 }}>{cert.description}</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Certifications; 