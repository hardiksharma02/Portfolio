import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';
import { Send as SendIcon } from '@mui/icons-material';
import SectionCard from '../components/Card/SectionCard';
import { useTheme } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { emailConfig } from '../config/emailjs';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const theme = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map form field names to state field names
    const fieldMap: { [key: string]: string } = {
      from_name: 'name',
      from_email: 'email',
      message: 'message'
    };
    const stateField = fieldMap[name] || name;
    setFormData(prev => ({ ...prev, [stateField]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setIsSubmitting(true);
    
    try {
      console.log('Attempting to send email with EmailJS...');
      
      const result = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        emailConfig.publicKey
      );

      console.log('EmailJS response:', result);

      if (result.text === 'OK') {
        setSnackbar({
          open: true,
          message: 'Message sent successfully! I\'ll get back to you soon.',
          severity: 'success'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`Failed to send message: ${result.text}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      let errorMessage = 'Oops! Something went wrong. Please try again later.';
      if (error instanceof Error) {
        console.error('Error details:', error.message);
        errorMessage = `Error: ${error.message}`;
      }
      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
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
          <form ref={form} onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                required
                fullWidth
                label="Name"
                name="from_name"
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
                name="from_email"
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
              <input 
                type="hidden" 
                name="to_name" 
                value="Hardik Sharma" 
              />
              <input 
                type="hidden" 
                name="to_email" 
                value="hardiksharma02102003@gmail.com" 
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
        </SectionCard>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: '100%', fontFamily: 'Google Sans' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 