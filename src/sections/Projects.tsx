import React from 'react';
import { projects } from '../data/projects';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const techColors: Record<string, string> = {
  'HTML': '#1976d2',
  'CSS': '#1976d2',
  'JavaScript': '#fbc02d',
  'FastAPI': '#43a047',
  'ReactJS': '#43a047',
  'Ant Design': '#1976d2',
  'NodeJS': '#8e24aa',
  'CSV Processing': '#fbc02d',
};

const Projects: React.FC = () => (
  <Box id="projects" sx={{ py: 10, background: '#f5f6fa' }}>
    <Typography variant="h4" align="center" sx={{ mb: 1, fontFamily: 'Google Sans', fontWeight: 700 }}>
      Projects
    </Typography>
    <Typography align="center" sx={{ mb: 4, color: '#888', fontFamily: 'Google Sans' }}>
      Innovative solutions I've built
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {projects.map((project, idx) => (
        <Grid key={project.name} size={{ xs: 12, sm: 12, md: 6 }}>
          <Card sx={{ minHeight: 320, background: '#fff', boxShadow: '0 2px 16px 0 rgba(25,118,210,0.08)', borderRadius: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Project image placeholder */}
            <Box sx={{ height: 180, background: '#e3f0ff', borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundSize: 'cover', backgroundPosition: 'center', mb: 2 }}>
              {/* You can add <img src={project.image} ... /> here if you have images */}
            </Box>
            <CardContent>
              <Typography variant="h6" sx={{ fontFamily: 'Google Sans', fontWeight: 700, color: '#222', mb: 1 }}>{project.name}</Typography>
              <Typography sx={{ fontFamily: 'Google Sans', color: '#888', mb: 1 }}>{project.description}</Typography>
              <Typography sx={{ fontFamily: 'Google Sans', fontWeight: 500, fontSize: 15, mb: 1 }}>Technologies:</Typography>
              <Box sx={{ mb: 1 }}>
                {project.technologies.map((tech) => (
                  <Chip key={tech} label={tech} size="small" sx={{ fontFamily: 'Google Sans', fontWeight: 500, mr: 1, mb: 1, background: techColors[tech] || '#e0e0e0', color: '#fff' }} />
                ))}
              </Box>
              {project.features && project.features.map((f, i) => (
                <Typography key={i} sx={{ fontFamily: 'Google Sans', fontSize: 14, color: '#1976d2', mb: 0.5 }}>
                  {f}
                </Typography>
              ))}
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button size="small" variant="contained" color="primary" sx={{ fontFamily: 'Google Sans', borderRadius: 2 }} disabled>GitHub</Button>
              <Button size="small" variant="outlined" color="primary" sx={{ fontFamily: 'Google Sans', borderRadius: 2, ml: 1 }} disabled>Live Demo</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects; 