import React, { useState, useMemo } from 'react';
import { skills } from '../data/skills';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';
import { Tab, Tabs, IconButton, useTheme, Tooltip, Chip } from '@mui/material';
import {
  Code as CodeIcon,
  Language as LanguageIcon,
  Build as BuildIcon,
  EmojiEvents as EmojiEventsIcon,
  ViewModule as ViewModuleIcon,
  ViewList as ViewListIcon,
  Sort as SortIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import InteractiveSkillCard from '../components/Skills/InteractiveSkillCard';

const groupIcons: Record<string, React.ReactElement> = {
  'Programming': <CodeIcon />,
  'Web Tech': <LanguageIcon />,
  'Tools': <BuildIcon />,
  'Soft Skills': <EmojiEventsIcon />,
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
  const [selectedGroup, setSelectedGroup] = useState(skillGroups[0]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'level'>('level');

  // Get expertise skills
  const expertiseSkills = useMemo(() => {
    return skills.filter(skill => skill.level >= 85);
  }, []);

  // Filter and sort skills
  const filteredSkills = useMemo(() => {
    let filtered = skills.filter(s => s.category === selectedGroup);
    if (sortBy === 'level') {
      filtered = filtered.sort((a, b) => b.level - a.level);
    } else {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    return filtered;
  }, [selectedGroup, sortBy]);

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

        {/* Core Expertise Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontFamily: 'Google Sans',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <StarIcon sx={{ color: theme.palette.primary.main }} />
            Core Expertise
          </Typography>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
                gap: 2,
                p: 3,
                borderRadius: 2,
                background: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(0, 0, 0, 0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid',
                borderColor: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)',
              }}
            >
              {expertiseSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      background: `${iconColors[skill.category]}11`,
                      border: '1px solid',
                      borderColor: `${iconColors[skill.category]}22`,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'Google Sans',
                          fontWeight: 600,
                          color: iconColors[skill.category],
                        }}
                      >
                        {skill.name}
                      </Typography>
                      <Chip
                        size="small"
                        icon={<StarIcon sx={{ fontSize: '1rem !important' }} />}
                        label={`${skill.level}%`}
                        sx={{
                          background: `${iconColors[skill.category]}22`,
                          color: iconColors[skill.category],
                          '.MuiChip-icon': {
                            color: 'inherit',
                          },
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: '0.875rem',
                      }}
                    >
                      {skill.description}
                    </Typography>
                    <Box
                      sx={{
                        mt: 'auto',
                        height: 4,
                        background: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.1)',
                        borderRadius: 2,
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${iconColors[skill.category]}aa, ${iconColors[skill.category]})`,
                          borderRadius: 'inherit',
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Skills Navigation */}
        <Box 
          sx={{ 
            mb: 4, 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Tabs
            value={selectedGroup}
            onChange={(_, value) => setSelectedGroup(value)}
            sx={{
              minHeight: 48,
              '& .MuiTab-root': {
                fontFamily: 'Google Sans',
                color: theme.palette.text.primary,
                minHeight: 48,
                '&.Mui-selected': {
                  color: theme.palette.primary.main,
                },
              },
            }}
          >
            {skillGroups.map((group) => (
              <Tab
                key={group}
                label={group}
                value={group}
                icon={groupIcons[group]}
                iconPosition="start"
              />
            ))}
          </Tabs>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title={`Sort by ${sortBy === 'level' ? 'name' : 'proficiency'}`}>
              <IconButton
                onClick={() => setSortBy(sortBy === 'level' ? 'name' : 'level')}
                sx={{ 
                  color: theme.palette.primary.main,
                  background: theme.palette.mode === 'dark' 
                    ? 'rgba(255,255,255,0.05)' 
                    : 'rgba(0,0,0,0.05)',
                }}
              >
                <SortIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={`Switch to ${viewMode === 'grid' ? 'list' : 'grid'} view`}>
              <IconButton
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                sx={{ 
                  color: theme.palette.primary.main,
                  background: theme.palette.mode === 'dark' 
                    ? 'rgba(255,255,255,0.05)' 
                    : 'rgba(0,0,0,0.05)',
                }}
              >
                {viewMode === 'grid' ? <ViewListIcon /> : <ViewModuleIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Skills Grid */}
        <motion.div
          key={`${selectedGroup}-${viewMode}-${sortBy}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: viewMode === 'grid'
                ? {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                  }
                : '1fr',
              gap: 3,
            }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <InteractiveSkillCard
                  name={skill.name}
                  level={skill.level}
                  color={iconColors[selectedGroup]}
                  icon={groupIcons[selectedGroup]}
                  description={skill.description}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 