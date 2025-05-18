import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/RahulRoyBXT', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/rahul-roy-bak/', label: 'LinkedIn' },
    { icon: <FiTwitter size={20} />, url: 'https://twitter.com/Rahulroycob', label: 'Twitter' },
    { icon: <FiMail size={20} />, url: 'mailto:rahul.roybak@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-white mt-12 pt-10 pb-6 px-6 shadow-cartoon-hover">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-comic font-bold text-primary mb-2">Rahul<span className="text-secondary"> Roy</span></h3>
            <p className="text-gray-600 max-w-xs">Building playful and engaging web experiences with modern technologies.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-comic text-lg mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="p-2 rounded-full bg-background-light text-gray-700 hover:bg-primary hover:text-white transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {currentYear} Rahul Roy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;