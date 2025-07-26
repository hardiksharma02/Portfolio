import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Leadership from './sections/Leadership';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Achievements />
      <Leadership />
      <Footer />
    </>
  );
}

export default App;
