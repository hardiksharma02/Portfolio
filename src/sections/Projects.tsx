import React, { useRef, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projects } from '../data/projects';
import { useTheme } from '@mui/material/styles';

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation config
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const scale = useSpring(isHovered ? 1.05 : 1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate normalized mouse position (-1 to 1)
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const theme = useTheme();

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
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
          transform: 'translateZ(0)',
          '& > *': {
            transform: 'translateZ(50px)',
          }
        }}
      >
        {project.image && (
          <motion.div
            style={{
              transform: 'translateZ(30px)',
            }}
          >
            <Box
              sx={{
                height: 200,
                background: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </motion.div>
        )}
        <CardContent sx={{ flexGrow: 1, p: 3, position: 'relative' }}>
          <motion.div
            style={{
              transform: 'translateZ(40px)',
            }}
          >
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
              {project.technologies.map((tech: string, techIndex: number) => (
                <motion.div
                  key={techIndex}
                  whileHover={{ y: -2 }}
                  style={{ transform: 'translateZ(60px)' }}
                >
                  <Chip
                    label={tech}
                    size="small"
                    sx={{
                      fontFamily: 'Google Sans',
                      background: theme.palette.gradient.primary,
                      color: '#fff',
                      fontWeight: 500,
                    }}
                  />
                </motion.div>
              ))}
            </Box>
            {project.features && (
              <Box sx={{ mt: 2 }}>
                {project.features.map((feature: string, featureIndex: number) => (
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
          </motion.div>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          <motion.div
            style={{
              transform: 'translateZ(20px)',
              display: 'flex',
              gap: 1
            }}
          >
            <Button
              size="small"
              startIcon={<GitHubIcon />}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              disabled={!project.githubUrl}
              sx={{
                color: theme.palette.mode === 'dark'
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
                '&.Mui-disabled': {
                  color: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.3)'
                    : 'rgba(0, 0, 0, 0.3)',
                },
                '&:hover': {
                  transform: 'translateY(-2px)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            >
              GitHub
            </Button>
            {project.demoUrl && (
              <Button
                size="small"
                startIcon={<LaunchIcon />}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.mode === 'dark'
                    ? theme.palette.primary.light
                    : theme.palette.primary.main,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    transition: 'transform 0.2s ease-in-out',
                  },
                }}
              >
                Demo
              </Button>
            )}
          </motion.div>
        </CardActions>
      </Card>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        px: 2,
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)'
          : 'linear-gradient(135deg, #e3f0ff 0%, #f5f9ff 100%)',
        perspective: 1000,
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

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard project={project} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 