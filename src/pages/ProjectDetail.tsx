import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { getProjectById } from '../constants/projectsData';
import { Project } from '../types/project';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet';

const ProjectDetail = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      const foundProject = getProjectById(id);
      
      if (foundProject) {
        setProject(foundProject);
      }
      
      setLoading(false);
    }
  }, [id]);
  
  // If project not found, navigate to not found page
  useEffect(() => {
    if (!loading && !project) {
      navigate('/not-found');
    }
  }, [loading, project, navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{t('project.loading')}</div>
      </div>
    );
  }
  
  if (!project) {
    return null;
  }
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 md:pt-32 pb-16 px-6 md:px-12"
    >
      {/* SEO Metadata and Structured Data */}
      <Helmet>
        <title>{project.title} | Rahul Roy's Portfolio</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={project.tags.join(', ')} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        {project.image && <meta property="og:image" content={project.image.startsWith('http') ? project.image : `https://rahulroydev.netlify.app${project.image}`} />}
        <meta property="og:url" content={`https://rahulroydev.netlify.app/projects/${project.id}`} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:description" content={project.description} />
        {project.image && <meta name="twitter:image" content={project.image.startsWith('http') ? project.image : `https://rahulroydev.netlify.app${project.image}`} />}
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": project.title,
            "description": project.description,
            "applicationCategory": "WebApplication",
            "operatingSystem": "Any",
            "author": {
              "@type": "Person",
              "name": "Rahul Roy"
            },
            "datePublished": "2025-05-21", // You may want to add actual dates to your project data
            "softwareVersion": "1.0",
            "url": `https://rahulroydev.netlify.app/projects/${project.id}`,
            "image": project.image ? (project.image.startsWith('http') ? project.image : `https://rahulroydev.netlify.app${project.image}`) : "",
            "keywords": project.tags.join(', '),
            "codeRepository": project.githubUrl,
            ...(project.demoUrl ? { "installUrl": project.demoUrl } : {})
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <Link to="/projects">
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors"
          >
            <FiArrowLeft />
            {t('project.backToProjects')}
          </motion.button>
        </Link>
        
        {/* Project Header */}
        <motion.div 
          className="bg-gradient-to-r from-primary to-secondary rounded-cartoon p-8 md:p-12 text-white mb-12 relative overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full -mr-20 -mt-20"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-white/20 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-lg md:text-xl max-w-3xl">{project.description}</p>
            
            <div className="flex gap-4 mt-8">
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-6 py-3 rounded-cartoon shadow-cartoon flex items-center gap-2 font-medium"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('projects.liveDemo')}
                  <FiExternalLink />
                </motion.a>
              )}
              
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-cartoon flex items-center gap-2 font-medium"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('projects.viewCode')}
                  <FiGithub />
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
        
        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Project Image/Screenshot */}
            <div className="bg-white p-4 rounded-cartoon shadow-cartoon">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto rounded-cartoon"
              />
            </div>
            
            {/* Full Description */}
            <div className="bg-white p-8 rounded-cartoon shadow-cartoon">
              <h2 className="text-2xl font-bold mb-4">{t('project.overview')}</h2>
              <p className="text-gray-700 mb-6">{project.fullDescription}</p>
              
              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">{t('project.features')}</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Challenges and Solutions */}
              {(project.challenges || project.solutions) && (
                <div className="space-y-4">
                  {project.challenges && (
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t('project.challenges')}</h3>
                      <p className="text-gray-700">{project.challenges}</p>
                    </div>
                  )}
                  
                  {project.solutions && (
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t('project.solutions')}</h3>
                      <p className="text-gray-700">{project.solutions}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Sidebar */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="bg-white p-6 rounded-cartoon shadow-cartoon">
                <h3 className="text-xl font-bold mb-4">{t('project.techStack')}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-background-light text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Learnings */}
            {project.learnings && (
              <div className="bg-white p-6 rounded-cartoon shadow-cartoon">
                <h3 className="text-xl font-bold mb-4">{t('project.learnings')}</h3>
                <p className="text-gray-700">{project.learnings}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;