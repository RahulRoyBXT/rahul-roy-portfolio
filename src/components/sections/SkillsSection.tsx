import { motion } from 'framer-motion';

type SkillCategory = {
  name: string;
  skills: {
    name: string;
    icon: string;
    level: number;
  }[];
};

const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️', level: 90 },
      { name: 'JavaScript', icon: '𝗝𝗦', level: 95 },
      { name: 'TypeScript', icon: '𝗧𝗦', level: 85 },
      { name: 'HTML/CSS', icon: '🎨', level: 90 },
      { name: 'Tailwind CSS', icon: '🌊', level: 85 },
      { name: 'GSAP / Framer Motion', icon: '🎞️', level: 80 },
      { name: 'Redux', icon: '📦', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢', level: 85 },
      { name: 'Express', icon: '🚂', level: 80 },
      { name: 'MongoDB', icon: '🍃', level: 75 },
      { name: 'Redis', icon: '🧠', level: 70 },
      { name: 'Socket.io', icon: '🔌', level: 75 },
      { name: 'Sequelize', icon: '🗃️', level: 65 },
      { name: 'MySQL', icon: '🐬', level: 65 },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', icon: '🌱', level: 90 },
      { name: 'Docker', icon: '🐳', level: 60 },
      { name: 'Vitest / Jest', icon: '🧪', level: 70 },
      { name: 'Vite / Webpack', icon: '⚡', level: 70 },
      { name: 'Figma', icon: '🎨', level: 65 },
      { name: 'Postman', icon: '📬', level: 80 },
    ],
  },
];


const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
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
    <section className="py-16 px-6 md:px-12 bg-background-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Here are the technologies and tools I specialize in. I'm constantly learning and adding new skills to my repertoire.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              className="card card-hover"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.name}</h3>
              
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="relative"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    
                    <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + (skillIndex * 0.1) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;