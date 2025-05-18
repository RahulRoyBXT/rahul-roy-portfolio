import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/useTheme';

const ThemeToggle = () => {
  const { isDarkMode, themePreference, setThemePreference } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-background-light text-gray-700'} focus:outline-none`}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Theme settings"
      >
        {isDarkMode ? (
          <FiMoon className="text-yellow-400" size={20} />
        ) : (
          <FiSun className="text-blue-500" size={20} />
        )}
      </motion.button>
      
      {showDropdown && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl z-50">
          <button 
            className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center ${themePreference === 'light' ? 'text-primary font-medium' : 'text-gray-800 dark:text-gray-200'}`}
            onClick={() => {
              setThemePreference('light');
              setShowDropdown(false);
            }}
          >
            <FiSun className="mr-2" />
            Light
          </button>
          <button 
            className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center ${themePreference === 'dark' ? 'text-primary font-medium' : 'text-gray-800 dark:text-gray-200'}`}
            onClick={() => {
              setThemePreference('dark');
              setShowDropdown(false);
            }}
          >
            <FiMoon className="mr-2" />
            Dark
          </button>
          <button 
            className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center ${themePreference === 'system' ? 'text-primary font-medium' : 'text-gray-800 dark:text-gray-200'}`}
            onClick={() => {
              setThemePreference('system');
              setShowDropdown(false);
            }}
          >
            <FiMonitor className="mr-2" />
            System
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;