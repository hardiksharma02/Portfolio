import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from './theme/ThemeContext';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import LoadingOverlay from './components/Loading/LoadingOverlay';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
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

const AppContent: React.FC = () => {
  const { startLoading, stopLoading } = useLoading();

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
      <LoadingOverlay />
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
      <BackToTop />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
