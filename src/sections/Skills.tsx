import React from 'react';
import { skills } from '../data/skills';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';
import SectionCard from '../components/Card/SectionCard';
import { SvgIconProps } from '@mui/material/SvgIcon';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import BuildIcon from '@mui/icons-material/Build';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useTheme } from '@mui/material/styles';

const groupIcons: Record<string, React.ReactElement<SvgIconProps>> = {
  'Programming': <CodeIcon fontSize="medium" />,
  'Web Tech': <LanguageIcon fontSize="medium" />,
  'Tools': <BuildIcon fontSize="medium" />,
  'Soft Skills': <EmojiEventsIcon fontSize="medium" />,
};

const iconColors: Record<string, string> = {
  'Programming': '#1976d2', // blue
  'Web Tech': '#43a047',    // green
  'Tools': '#8e24aa',       // purple
  'Soft Skills': '#fbc02d', // yellow
};

const skillGroups = ['Programming', 'Web Tech', 'Tools', 'Soft Skills'];

const Skills: React.FC = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: 8,
        background: theme => theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)'
          : 'linear-gradient(135deg, #e3f0ff 0%, #f5f9ff 100%)',
      }}
    >
      <Container maxWidth="lg">
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
              background: theme.palette.gradient.primary,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Skills & Expertise
          </Typography>
          <Typography
            align="center"
            variant="h6"
            sx={{
              mb: 6,
              color: theme.palette.text.secondary,
              fontFamily: 'Google Sans',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Technologies and tools I work with to create exceptional digital experiences
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: 'repeat(4, 1fr)',
              },
              gap: 4,
            }}
          >
            {skillGroups.map((group) => (
              <motion.div key={group} variants={cardVariants}>
                <SectionCard
                  sx={{
                    height: '100%',
                    background: theme.palette.background.paper,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" mb={3} gap={2}>
                    <Box
                      sx={{
                        background: theme.palette.mode === 'dark'
                          ? `${iconColors[group]}22`
                          : `${iconColors[group]}11`,
                        borderRadius: '50%',
                        p: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        color: iconColors[group],
                      }}
                    >
                      {groupIcons[group]}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'Google Sans',
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {group}
                    </Typography>
                  </Box>

                  {skills.filter(s => s.category === group).map((skill) => (
                    <Box key={skill.name} mb={2.5}>
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                        <Typography
                          sx={{
                            fontFamily: 'Google Sans',
                            color: theme.palette.text.primary,
                            fontSize: '0.95rem',
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: 'Google Sans',
                            color: theme.palette.text.secondary,
                            fontSize: '0.9rem',
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.12)'
                            : 'rgba(0, 0, 0, 0.08)',
                          overflow: 'hidden',
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          style={{
                            height: '100%',
                            background: iconColors[group],
                            borderRadius: 'inherit',
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </SectionCard>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 