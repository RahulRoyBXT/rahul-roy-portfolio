import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/common/ProjectCard';
import { projectsData } from '../constants/projectsData';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet';

const Projects = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  
  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(
      projectsData.flatMap(project => project.tags)
    )
  );
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* SEO Metadata and Structured Data */}
      <Helmet>
        <title>Projects | Rahul Roy's Portfolio</title>
        <meta name="description" content="Explore Rahul Roy's portfolio of web development projects, including full-stack applications, APIs, and responsive front-end designs." />
        <meta name="keywords" content={allTags.join(', ') + ', portfolio, web development, projects'} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Projects | Rahul Roy's Portfolio" />
        <meta property="og:description" content="Explore Rahul Roy's portfolio of web development projects, including full-stack applications, APIs, and responsive front-end designs." />
        <meta property="og:image" content="https://rahulroydev.netlify.app/logo.png" />
        <meta property="og:url" content="https://rahulroydev.netlify.app/projects" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Rahul Roy's Portfolio" />
        <meta name="twitter:description" content="Explore Rahul Roy's portfolio of web development projects, including full-stack applications, APIs, and responsive front-end designs." />
        <meta name="twitter:image" content="https://rahulroydev.netlify.app/logo.png" />
        
        {/* JSON-LD structured data for project collection */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Rahul Roy's Projects",
            "description": "Collection of software development projects by Rahul Roy",
            "url": "https://rahulroydev.netlify.app/projects",
            "author": {
              "@type": "Person",
              "name": "Rahul Roy",
              "url": "https://rahulroydev.netlify.app"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": projectsData.map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://rahulroydev.netlify.app/projects/${project.id}`,
                "item": {
                  "@type": "SoftwareApplication",
                  "name": project.title,
                  "description": project.description,
                  "image": project.image ? (project.image.startsWith('http') ? project.image : `https://rahulroydev.netlify.app${project.image}`) : "",
                  "applicationCategory": "WebApplication",
                  "operatingSystem": "Any",
                  "url": `https://rahulroydev.netlify.app/projects/${project.id}`
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="text-center mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('projects.pageTitle')}
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t('projects.pageDescription')}
        </motion.p>
        
        {/* Filter tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-background-light text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('all')}
          >
            {t('projects.filterAll')}
          </motion.button>
          
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag 
                  ? 'bg-primary text-white' 
                  : 'bg-background-light text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <motion.div 
            className="col-span-full text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-gray-500">{t('projects.noProjectsFound')}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;