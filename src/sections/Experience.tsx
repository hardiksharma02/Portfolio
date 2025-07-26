import React from 'react';
import { experience } from '../data/experience';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SectionCard from '../components/Card/SectionCard';
import WorkIcon from '@mui/icons-material/Work';
import SearchIcon from '@mui/icons-material/Search';
import ScienceIcon from '@mui/icons-material/Science';

const iconMap: Record<string, React.ReactNode> = {
  'Backend Developer - SDE': <WorkIcon sx={{ color: '#1976d2' }} fontSize="medium" />,
  'Research Analyst': <SearchIcon sx={{ color: '#43a047' }} fontSize="medium" />,
  'AI ML Research Intern': <ScienceIcon sx={{ color: '#fbc02d' }} fontSize="medium" />,
};

const iconBgMap: Record<string, string> = {
  'Backend Developer - SDE': '#e3f0ff',
  'Research Analyst': '#e8f5e9',
  'AI ML Research Intern': '#fffde7',
};

const Experience: React.FC = () => (
  <Box id="experience" sx={{ py: 10, background: '#f5f6fa' }}>
    <Typography variant="h4" align="center" sx={{ mb: 1, fontFamily: 'Google Sans', fontWeight: 700 }}>
      Experience
    </Typography>
    <Typography align="center" sx={{ mb: 4, color: '#888', fontFamily: 'Google Sans' }}>
      Professional internships and work experience
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {experience.map((exp) => (
        <Grid key={exp.title} size={{ xs: 12, sm: 6, md: 4 }}>
          <SectionCard sx={{ background: '#fff', boxShadow: '0 2px 16px 0 rgba(25,118,210,0.08)', borderRadius: 3, p: 3 }}>
            <Box display="flex" alignItems="center" mb={2} gap={1}>
              <Box sx={{ background: iconBgMap[exp.title], borderRadius: '50%', p: 1.2, display: 'flex', alignItems: 'center', mr: 1 }}>
                {iconMap[exp.title]}
              </Box>
              <Typography variant="h6" sx={{ fontFamily: 'Google Sans', fontWeight: 700, color: '#222', textAlign: 'left' }}>{exp.title}</Typography>
            </Box>
            <Typography sx={{ fontFamily: 'Google Sans', color: '#1976d2', fontWeight: 500, mb: 1 }}>{exp.company}</Typography>
            <Typography sx={{ fontFamily: 'Google Sans', color: '#888', fontSize: 15, mb: 1 }}>{exp.duration} &bull; {exp.location}</Typography>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {exp.description.map((desc, i) => (
                <li key={i} style={{ fontFamily: 'Google Sans', fontSize: 15, color: '#444', marginBottom: 4 }}>{desc}</li>
              ))}
            </ul>
          </SectionCard>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Experience; 