import { motion } from 'framer-motion';
import { FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/40 text-gray-800 dark:text-gray-200 focus:outline-none transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={language === 'en' ? 'Switch to Japanese' : '英語に切り替える'}
      aria-label={language === 'en' ? 'Switch to Japanese' : 'Switch to English'}
    >
      <div className="flex items-center">
        <FiGlobe size={20} />
        <span className="ml-1 text-xs font-medium">{language === 'en' ? 'JP' : 'EN'}</span>
      </div>
    </motion.button>
  );
};

export default LanguageSwitcher;