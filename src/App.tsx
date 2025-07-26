import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import ScrollProgress from './components/ScrollProgress';
import FloatingMenu from './components/FloatingMenu';
import Header from './components/Header';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Leadership from './sections/Leadership';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { motion } from 'framer-motion';

const AppContent: React.FC = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { toggleTheme } = useTheme();

  useEffect(() => {
    startLoading();
    // Simulate initial data loading
    const timer = setTimeout(() => {
      stopLoading();
    }, 1500);
    return () => clearTimeout(timer);
  }, [startLoading, stopLoading]);

  return (
    <>
      <CssBaseline />
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ScrollProgress />
        <Header />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Leadership />
        <Contact />
        <Footer />
        <FloatingMenu onThemeToggle={toggleTheme} />
      </motion.div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;
