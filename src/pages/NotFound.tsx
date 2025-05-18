import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      <div className="text-center max-w-xl">
        <motion.h1
          className="text-9xl font-bold text-primary mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        
        <motion.div
          className="mb-8 relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="w-24 h-24 mx-auto bg-secondary rounded-full flex items-center justify-center text-white text-5xl">
            😕
          </div>
          
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full"
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full"
            animate={{
              y: [0, 8, 0],
              x: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Oops! Page Not Found
        </motion.h2>
        
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          The page you're looking for seems to have wandered off into the digital void. Let's get you back on track!
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link to="/">
            <motion.button
              className="btn btn-primary flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowLeft />
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;