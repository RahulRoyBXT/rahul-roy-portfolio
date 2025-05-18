import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import ProjectCard from '../common/ProjectCard';
import { Project } from '../../types/project';
import { useLanguage } from '../../context/LanguageContext';

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  const { t } = useLanguage();
  // Take only the first 3 projects to display as featured
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('projects.title')}
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t('projects.subtitle')}
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link to="/projects">
          <motion.button 
            className="btn btn-primary flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('projects.viewAll')}
            <FiArrowRight />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;