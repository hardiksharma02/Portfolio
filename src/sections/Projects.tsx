import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { useTheme } from '@mui/material/styles';

const Projects: React.FC = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box
      id="projects"
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
            mb: 2,
            fontFamily: 'Google Sans',
            fontWeight: 700,
            background: theme.palette.gradient.primary,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 6,
            color: theme.palette.mode === 'dark'
              ? theme.palette.text.secondary
              : theme.palette.text.primary,
            fontFamily: 'Google Sans',
          }}
        >
          Showcasing my technical expertise and creativity
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                      : '0 4px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 30px rgba(0, 0, 0, 0.4)'
                        : '0 8px 30px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  {project.image && (
                    <Box
                      sx={{
                        height: 200,
                        background: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{
                        fontFamily: 'Google Sans',
                        fontWeight: 600,
                        color: theme.palette.mode === 'dark'
                          ? theme.palette.primary.light
                          : theme.palette.primary.main,
                        mb: 2,
                      }}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      sx={{
                        mb: 3,
                        color: theme.palette.mode === 'dark'
                          ? theme.palette.text.secondary
                          : theme.palette.text.primary,
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            fontFamily: 'Google Sans',
                            background: theme.palette.gradient.primary,
                            color: '#fff',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                    {project.features && (
                      <Box sx={{ mt: 2 }}>
                        {project.features.map((feature, featureIndex) => (
                          <Typography
                            key={featureIndex}
                            variant="body2"
                            sx={{
                              color: theme.palette.mode === 'dark'
                                ? theme.palette.text.secondary
                                : theme.palette.text.primary,
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1,
                              '&:before': {
                                content: '"•"',
                                marginRight: 1,
                                color: theme.palette.primary.main,
                              },
                            }}
                          >
                            {feature}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      disabled
                      sx={{
                        color: theme.palette.mode === 'dark'
                          ? theme.palette.primary.light
                          : theme.palette.primary.main,
                        '&.Mui-disabled': {
                          color: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.3)'
                            : 'rgba(0, 0, 0, 0.3)',
                        },
                      }}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      disabled
                      sx={{
                        color: theme.palette.mode === 'dark'
                          ? theme.palette.primary.light
                          : theme.palette.primary.main,
                        '&.Mui-disabled': {
                          color: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.3)'
                            : 'rgba(0, 0, 0, 0.3)',
                        },
                      }}
                    >
                      Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Projects; 