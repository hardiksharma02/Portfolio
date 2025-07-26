import React from 'react';
import { skills } from '../data/skills';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import SectionCard from '../components/Card/SectionCard';
import { SvgIconProps } from '@mui/material/SvgIcon';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import BuildIcon from '@mui/icons-material/Build';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const groupIcons: Record<string, React.ReactElement<SvgIconProps>> = {
  'Programming': <CodeIcon sx={{ color: '#1976d2' }} fontSize="medium" />,
  'Web Tech': <LanguageIcon sx={{ color: '#43a047' }} fontSize="medium" />,
  'Tools': <BuildIcon sx={{ color: '#8e24aa' }} fontSize="medium" />,
  'Soft Skills': <EmojiEventsIcon sx={{ color: '#fbc02d' }} fontSize="medium" />,
};

const iconBg: Record<string, string> = {
  'Programming': '#e3f0ff', // blue tint
  'Web Tech': '#e8f5e9',    // green tint
  'Tools': '#f3e5f5',       // purple tint
  'Soft Skills': '#fffde7', // yellow tint
};

const skillGroups = ['Programming', 'Web Tech', 'Tools', 'Soft Skills'];

const Skills: React.FC = () => (
  <Box id="skills" sx={{ py: 8, background: '#fafbfc' }}>
    <Typography variant="h4" align="center" sx={{ mb: 1, fontFamily: 'Google Sans', fontWeight: 700 }}>
      Skills
    </Typography>
    <Typography align="center" sx={{ mb: 4, color: '#888', fontFamily: 'Google Sans' }}>
      Technologies and tools I work with
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {skillGroups.map((group) => (
        <Grid key={group} size={{ xs: 12, sm: 6, md: 3 }}>
          <SectionCard sx={{ background: '#fff', boxShadow: '0 2px 16px 0 rgba(25,118,210,0.08)', borderRadius: 3, p: 3 }}>
            <Box display="flex" alignItems="center" mb={2} gap={1}>
              <Box sx={{ background: iconBg[group], borderRadius: '50%', p: 1.2, display: 'flex', alignItems: 'center', mr: 1 }}>
                {groupIcons[group]}
              </Box>
              <Typography variant="h6" sx={{ fontFamily: 'Google Sans', fontWeight: 700, color: '#222', textAlign: 'left' }}>{group}</Typography>
            </Box>
            {skills.filter(s => s.category === group).map((skill) => (
              <Box key={skill.name} mb={2}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography sx={{ fontFamily: 'Google Sans', color: '#222', fontSize: 15 }}>{skill.name}</Typography>
                  <Typography sx={{ fontFamily: 'Google Sans', color: '#888', fontSize: 15 }}>{skill.level}%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{ height: 8, borderRadius: 5, background: '#e0e0e0', '& .MuiLinearProgress-bar': { background: '#1976d2' } }}
                />
              </Box>
            ))}
          </SectionCard>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Skills; 