import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.skills'), path: '/skills' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-20 w-full fixed top-0 z-50 backdrop-blur-md bg-gradient-to-r from-purple-500/10 via-indigo-500/5 to-sky-500/10 dark:from-slate-900/90 dark:via-indigo-900/80 dark:to-blue-900/90 border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }}
            className="text-2xl font-comic font-bold"
          >
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Rahul</span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Roy</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <motion.div
                whileHover={{ y: -3, scale: 1.05 }}
                className="font-medium hover:text-indigo-500 transition-colors dark:text-gray-200 hover:dark:text-blue-400"
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
          
          {/* Theme and Language Toggles */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/40 text-gray-800 dark:text-gray-200 focus:outline-none transition-colors"
            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden w-full mt-4 py-4 rounded-b-cartoon bg-white dark:bg-slate-900 border border-gray-200/20 dark:border-gray-700/20"
        >
          <div className="flex flex-col space-y-4 px-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 hover:text-indigo-600 font-medium dark:text-gray-200 hover:dark:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;