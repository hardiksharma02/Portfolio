import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { education } from '../data/education';

const Education: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="education"
      component="section"
      sx={{
        py: 8,
        px: 2,
        background: theme.palette.mode === 'dark'
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
            mb: 6,
            fontFamily: 'Google Sans',
            fontWeight: 700,
            background: theme.palette.gradient.primary,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Education
        </Typography>
      </motion.div>

      <Timeline position="alternate">
        {education.map((edu, index) => (
          <TimelineItem 
            key={index}
            sx={{
              '&:before': {
                display: { xs: 'none', sm: 'block' }
              }
            }}
          >
            <TimelineSeparator>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <TimelineDot 
                  sx={{
                    background: theme.palette.gradient.primary,
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 0 10px rgba(255, 255, 255, 0.2)'
                      : '0 0 10px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </motion.div>
              {index !== education.length - 1 && (
                <TimelineConnector 
                  sx={{
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.12)'
                      : 'rgba(0, 0, 0, 0.12)',
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                      : '0 4px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontFamily: 'Google Sans',
                      fontWeight: 600,
                      color: theme.palette.mode === 'dark'
                        ? theme.palette.primary.light
                        : theme.palette.primary.main,
                      mb: 1,
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  {edu.institution && (
                    <Typography
                      sx={{
                        color: theme.palette.mode === 'dark'
                          ? theme.palette.text.secondary
                          : theme.palette.text.primary,
                        mb: 1,
                      }}
                    >
                      {edu.institution}
                    </Typography>
                  )}
                  {edu.duration && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontStyle: 'italic',
                      }}
                    >
                      {edu.duration}
                    </Typography>
                  )}
                  {edu.cgpa && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.mode === 'dark'
                          ? theme.palette.primary.light
                          : theme.palette.primary.main,
                        mt: 1,
                      }}
                    >
                      CGPA: {edu.cgpa}
                    </Typography>
                  )}
                  {edu.score && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.mode === 'dark'
                          ? theme.palette.primary.light
                          : theme.palette.primary.main,
                        mt: 1,
                      }}
                    >
                      Score: {edu.score}
                    </Typography>
                  )}
                  {edu.year && !edu.duration && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontStyle: 'italic',
                        mt: 1,
                      }}
                    >
                      Year: {edu.year}
                    </Typography>
                  )}
                </Box>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Education; 