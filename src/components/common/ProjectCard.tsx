import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ id, title, description, image, tags, demoUrl, githubUrl }: ProjectCardProps) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      className="card card-hover overflow-hidden flex flex-col h-full"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-cartoon h-48 mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      {/* Project Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs rounded-full font-medium bg-background-light text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex justify-between items-center mt-4">
        <Link 
          to={`/projects/${id}`}
          className="text-primary font-medium hover:underline"
        >
          {t('projects.viewDetails')}
        </Link>
        
        <div className="flex space-x-2">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background-light text-gray-700 hover:bg-primary hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={t('projects.viewCode')}
              title={t('projects.viewCode')}
            >
              <FiGithub size={18} />
            </motion.a>
          )}
          
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background-light text-gray-700 hover:bg-primary hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={t('projects.liveDemo')}
              title={t('projects.liveDemo')}
            >
              <FiExternalLink size={18} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;