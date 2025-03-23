import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import { scrollToElement } from './utils/scrollManager';

// Create a ScrollManager component to handle scroll restoration
const ScrollManager = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Extract hash without the # symbol
    const hash = location.hash.replace('#', '');
    
    if (location.pathname === '/') {
      if (hash) {
        // If there's a hash, scroll to that element
        scrollToElement(hash);
      } else if (location.key === 'default') {
        // If it's the initial load, scroll to top
        window.scrollTo(0, 0);
      }
      // In all other cases, maintain scroll position
    } else {
      // For non-home pages, always scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return null;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <ScrollManager />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Skills />
              <Experience />
              <Education />
              <Projects />
            </>
          } />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;