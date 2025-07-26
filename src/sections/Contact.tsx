import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';
import { Send as SendIcon } from '@mui/icons-material';
import SectionCard from '../components/Card/SectionCard';
import { useTheme } from '@mui/material/styles';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 8,
        background: theme => theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)'
          : 'linear-gradient(135deg, #e3f0ff 0%, #f5f9ff 100%)',
      }}
    >
      <Container maxWidth="md">
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
              mb: 4,
              fontFamily: 'Google Sans',
              fontWeight: 700,
              background: theme.palette.gradient.primary,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Get in Touch
          </Typography>
        </motion.div>

        <SectionCard>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                required
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  sx: { fontFamily: 'Google Sans' },
                }}
                InputLabelProps={{
                  sx: { fontFamily: 'Google Sans' },
                }}
              />
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  sx: { fontFamily: 'Google Sans' },
                }}
                InputLabelProps={{
                  sx: { fontFamily: 'Google Sans' },
                }}
              />
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  sx: { fontFamily: 'Google Sans' },
                }}
                InputLabelProps={{
                  sx: { fontFamily: 'Google Sans' },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                endIcon={
                  <motion.div
                    animate={isSubmitting ? { x: [0, 10, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    <SendIcon />
                  </motion.div>
                }
                sx={{
                  alignSelf: 'flex-start',
                  fontFamily: 'Google Sans',
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  background: theme.palette.gradient.primary,
                  '&:hover': {
                    background: theme.palette.gradient.primary,
                    filter: 'brightness(110%)',
                  },
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </form>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Typography
                sx={{
                  mt: 2,
                  color: 'success.main',
                  fontFamily: 'Google Sans',
                }}
              >
                Message sent successfully! I'll get back to you soon.
              </Typography>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Typography
                sx={{
                  mt: 2,
                  color: 'error.main',
                  fontFamily: 'Google Sans',
                }}
              >
                Oops! Something went wrong. Please try again later.
              </Typography>
            </motion.div>
          )}
        </SectionCard>
      </Container>
    </Box>
  );
};

export default Contact; 