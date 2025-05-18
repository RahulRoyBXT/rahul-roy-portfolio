import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/sections/HeroSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';
import { projectsData } from '../constants/projectsData';

const Home = () => {
  const { t } = useLanguage();
  // State for mobile tab navigation
  const [activeTab, setActiveTab] = useState<'projects' | 'skills'>('projects');
  
  // Refs for the tab content sections
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  // Handle tab change
  const handleTabChange = (tab: 'projects' | 'skills') => {
    setActiveTab(tab);
  };

  // Scroll to the top of the active tab content when tab changes
  useEffect(() => {
    // Waiting for DOM to update
    const timeout = setTimeout(() => {
      if (activeTab === 'projects' && projectsRef.current) {
        window.scrollTo({
          top: projectsRef.current.offsetTop - 110,
          behavior: 'smooth'
        });
      } else if (activeTab === 'skills' && skillsRef.current) {
        window.scrollTo({
          top: skillsRef.current.offsetTop - 110,
          behavior: 'smooth'
        });
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      
      {/* Mobile Tabs - Only visible on mobile */}
      
      <div className="md:hidden sticky top-[72px] z-30 py-2 px-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-700/30">
        <div className="flex justify-center gap-2">
          <motion.button
            className={`px-4 py-2 rounded-cartoon text-sm font-medium transition-colors ${
              activeTab === 'projects' 
                ? 'bg-primary text-white shadow-cartoon' 
                : 'bg-background-light text-gray-700 dark:bg-slate-800 dark:text-gray-300'
            }`}
            onClick={() => handleTabChange('projects')}
            whileTap={{ scale: 0.95 }}
          >
            {t('tabs.projects')}
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-cartoon text-sm font-medium transition-colors ${
              activeTab === 'skills' 
                ? 'bg-primary text-white shadow-cartoon' 
                : 'bg-background-light text-gray-700 dark:bg-slate-800 dark:text-gray-300'
            }`}
            onClick={() => handleTabChange('skills')}
            whileTap={{ scale: 0.95 }}
          >
            {t('tabs.skills')}
          </motion.button>
        </div>
      </div>
      
      {/* Content based on active tab for mobile, but always show both for desktop */}
      <div 
        ref={projectsRef}
        className={activeTab === 'projects' ? 'block' : 'hidden md:block'}
      >
        <FeaturedProjects projects={projectsData} />
      </div>
      
      <div 
        ref={skillsRef}
        className={activeTab === 'skills' ? 'block' : 'hidden md:block'}
      >
        <SkillsSection />
      </div>
      
      <ContactSection />
    </motion.div>
  );
};

export default Home;