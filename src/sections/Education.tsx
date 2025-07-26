import React from 'react';
import { education } from '../data/education';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const colors = ['#4285F4', '#34A853', '#FBBC04', '#EA4335'];

const Education: React.FC = () => (
  <Box id="education" sx={{ py: 8, background: '#f1f3f4' }}>
    <Typography variant="h4" align="center" sx={{ mb: 4, fontFamily: 'Google Sans', fontWeight: 700 }}>
      Education
    </Typography>
    <Timeline position="alternate">
      {education.map((edu, idx) => (
        <TimelineItem key={edu.degree + edu.institution + idx}>
          <TimelineSeparator>
            <TimelineDot sx={{ background: colors[idx % colors.length] }} />
            {idx < education.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" sx={{ fontFamily: 'Google Sans', fontWeight: 600 }}>{edu.degree}</Typography>
            <Typography sx={{ fontFamily: 'Google Sans', color: '#888', mb: 1 }}>{edu.institution} {edu.duration ? `| ${edu.duration}` : ''}</Typography>
            {edu.cgpa && <Typography sx={{ fontFamily: 'Google Sans', fontSize: 14 }}>CGPA: {edu.cgpa}</Typography>}
            {edu.score && <Typography sx={{ fontFamily: 'Google Sans', fontSize: 14 }}>Score: {edu.score}</Typography>}
            {edu.year && <Typography sx={{ fontFamily: 'Google Sans', fontSize: 14 }}>Year: {edu.year}</Typography>}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Box>
);

export default Education; 