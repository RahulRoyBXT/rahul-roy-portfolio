import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side content */}
        <motion.div className="w-full md:w-1/2" variants={itemVariants}>
          <motion.span 
            className="inline-block font-comic bg-primary/10 text-primary px-4 py-2 rounded-cartoon mb-4"
            whileHover={{ scale: 1.05 }}
          >
            👋 Hi there! I'm Rahul
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Crafting <span className="text-primary">playful</span> digital experiences
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 mb-8 max-w-lg"
            variants={itemVariants}
          >
            As a full-stack developer, I focus on creating clean, accessible, and high-performance web experiences that solve real problems and deliver value.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Link to="/projects">
              <motion.button 
                className="btn btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <FiArrowRight />
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button 
                className="btn bg-white border-2 border-gray-200 text-gray-800 hover:border-primary hover:text-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Right side - Avatar */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
          >
            {/* This is a placeholder for your avatar image - replace with your actual avatar */}
            <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center text-white text-6xl font-comic overflow-hidden">
              {/* Replace this with an actual image later */}
              <span>
                <img src='https://res.cloudinary.com/dknswyxmh/image/upload/v1747579796/14339b0db8ffa951563f92a5078a6b44_euaxg6_My_Profile_Image_xp7xzx.png' alt='profile picture'/>
              </span>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              ⚛️
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-2 -left-2 bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center text-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              💡
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;