import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';

// Lazy load other pages to improve initial load performance
import React from 'react';
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <MainLayout>
            <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:id" element={<ProjectDetail />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </React.Suspense>
          </MainLayout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
