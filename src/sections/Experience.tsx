import React from 'react';
import { experience } from '../data/experience';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SectionCard from '../components/Card/SectionCard';
import WorkIcon from '@mui/icons-material/Work';
import SearchIcon from '@mui/icons-material/Search';
import ScienceIcon from '@mui/icons-material/Science';
import { useTheme, Theme } from '@mui/material/styles';

type ExperienceTitle = 'Backend Developer - SDE' | 'Research Analyst' | 'Research Intern';

const iconColors: Record<ExperienceTitle, string> = {
  'Backend Developer - SDE': '#1976d2',
  'Research Analyst': '#43a047',
  'Research Intern': '#9c27b0',
};

const Experience: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const getIconBgColor = (title: ExperienceTitle) => {
    if (isDark) {
      return `${iconColors[title]}22`; // 22 is hex for 13% opacity
    }
    return `${iconColors[title]}11`; // 11 is hex for 7% opacity
  };

  const iconMap: Record<ExperienceTitle, React.ReactNode> = {
    'Backend Developer - SDE': <WorkIcon sx={{ color: iconColors['Backend Developer - SDE'] }} fontSize="medium" />,
    'Research Analyst': <SearchIcon sx={{ color: iconColors['Research Analyst'] }} fontSize="medium" />,
    'Research Intern': <ScienceIcon sx={{ color: iconColors['Research Intern'] }} fontSize="medium" />,
  };

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        pb: { xs: 12, md: 16 }, // Increased bottom padding
        background: (theme: Theme) => theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)'
          : 'linear-gradient(135deg, #e3f0ff 0%, #f5f9ff 100%)',
      }}
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
        Experience
      </Typography>
      <Typography
        align="center"
        variant="h6"
        sx={{
          mb: { xs: 6, md: 8 }, // Increased margin bottom
          color: (theme: Theme) => theme.palette.text.secondary,
          fontFamily: 'Google Sans',
        }}
      >
        Professional internships and work experience
      </Typography>
      <Grid 
        container 
        spacing={4} 
        justifyContent="center"
        sx={{
          px: { xs: 2, sm: 4, md: 6 }, // Added horizontal padding
          mb: { xs: 4, md: 6 } // Added margin bottom
        }}
      >
        {experience.map((exp) => (
          <Grid item key={exp.title} xs={12} sm={6} md={4}>
            <SectionCard
              sx={{
                background: (theme: Theme) => theme.palette.background.paper,
                boxShadow: (theme: Theme) => theme.palette.mode === 'dark'
                  ? '0 4px 24px 0 rgba(0,0,0,0.3)'
                  : '0 2px 16px 0 rgba(25,118,210,0.08)',
                borderRadius: 3,
                p: { xs: 3, md: 4 }, // Increased padding
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme: Theme) => theme.palette.mode === 'dark'
                    ? '0 8px 32px 0 rgba(0,0,0,0.4)'
                    : '0 4px 24px 0 rgba(25,118,210,0.12)',
                },
              }}
            >
              <Box display="flex" alignItems="center" mb={3} gap={1.5}>
                <Box
                  sx={{
                    background: getIconBgColor(exp.title as ExperienceTitle),
                    borderRadius: '50%',
                    p: 1.5, // Increased padding
                    display: 'flex',
                    alignItems: 'center',
                    mr: 1,
                  }}
                >
                  {iconMap[exp.title as ExperienceTitle]}
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
                  {exp.title}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: 'Google Sans',
                  color: (theme: Theme) => theme.palette.primary.main,
                  fontWeight: 500,
                  mb: 1.5, // Increased margin
                }}
              >
                {exp.company}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Google Sans',
                  color: (theme: Theme) => theme.palette.text.secondary,
                  fontSize: 15,
                  mb: 2, // Increased margin
                }}
              >
                {exp.duration} &bull; {exp.location}
              </Typography>
              <ul style={{ margin: 0, paddingLeft: 20, marginBottom: 8 }}> {/* Added margin bottom */}
                {exp.description.map((desc, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: 'Google Sans',
                      fontSize: 15,
                      color: isDark ? theme.palette.text.secondary : '#444',
                      marginBottom: 8, // Increased margin
                      lineHeight: 1.5, // Added line height
                    }}
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </SectionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience; 