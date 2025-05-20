import { motion } from "framer-motion";
import SkillsSection from "../components/sections/SkillsSection";
import { Helmet } from 'react-helmet';

const Skills = () => {  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 md:pt-32"
    >
      {/* SEO Metadata and Structured Data */}
      <Helmet>
        <title>Skills & Expertise | Rahul Roy's Portfolio</title>
        <meta name="description" content="Explore Rahul Roy's technical skills and expertise in full-stack development, including React, Node.js, MongoDB, and cloud technologies." />
        <meta name="keywords" content="Rahul Roy, web development skills, React, Node.js, MongoDB, JavaScript, full-stack development" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Skills & Expertise | Rahul Roy's Portfolio" />
        <meta property="og:description" content="Explore Rahul Roy's technical skills and expertise in full-stack development, including React, Node.js, MongoDB, and cloud technologies." />
        <meta property="og:image" content="https://rahulroydev.netlify.app/logo.png" />
        <meta property="og:url" content="https://rahulroydev.netlify.app/skills" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skills & Expertise | Rahul Roy's Portfolio" />
        <meta name="twitter:description" content="Explore Rahul Roy's technical skills and expertise in full-stack development, including React, Node.js, MongoDB, and cloud technologies." />
        <meta name="twitter:image" content="https://rahulroydev.netlify.app/logo.png" />
        
        {/* JSON-LD structured data for skills */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Rahul Roy",
              "url": "https://rahulroydev.netlify.app",
              "jobTitle": "Full Stack Developer",
              "knowsAbout": [
                "React", "Node.js", "JavaScript", "TypeScript", "MongoDB", 
                "Express", "RESTful API", "Socket.IO", "Redux", "Tailwind CSS",
                "Responsive Design", "Web Development", "Full Stack Development"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Skill",
                  "name": "Frontend Development",
                  "description": "Expertise in React, Redux, and modern JavaScript frameworks"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Skill",
                  "name": "Backend Development",
                  "description": "Experience with Node.js, Express, and MongoDB"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Skill",
                  "name": "Full Stack Development",
                  "description": "End-to-end application development and deployment"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-primary">Skills</span> & Expertise
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here's a comprehensive look at my technical skills and the
          technologies I work with. I'm constantly learning and expanding my
          toolkit.
        </motion.p>
      </div>

      <SkillsSection />

      {/* Learning Journey Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          className="bg-white rounded-cartoon shadow-cartoon p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">My Learning Journey</h2>
          <p className="text-gray-700 mb-8">
            I believe in continuous learning and staying updated with the latest
            technologies. Here's a glimpse at my journey so far and what I'm
            currently exploring.
          </p>

          <div className="space-y-12">
            {/* Past */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-secondary mb-4">
                Where I Started
              </h3>
              <div className="bg-background-light p-6 rounded-cartoon">
                <p className="text-gray-700">
                  My journey into tech didn’t begin with a computer science
                  background. In 2020, I was studying electronics at a diploma
                  college, where I first encountered assembly language and C
                  while working with microprocessors. That exposure sparked my
                  curiosity in computing and programming. Despite securing a top
                  state rank (AIR 2) and a seat at CIT Kokrajhar, I followed my
                  gut and chose to pursue Information Technology in Kolkata — a
                  decision driven purely by curiosity and ambition.
                  Transitioning into IT without prior experience wasn’t easy. I
                  struggled at first, but everything changed when I met a few
                  passionate peers who introduced me to coding. I started with
                  the basics — building things, breaking them, and fixing them
                  again — and never looked back.{" "}
                </p>
              </div>
            </motion.div>

            {/* Present */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">
                Current Focus
              </h3>
              <div className="bg-background-light p-6 rounded-cartoon">
                <p className="text-gray-700 mb-4">
                  Right now, I’m sharpening my skills in the following areas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>TypeScript</strong> – for scalable, type-safe
                    frontend and backend development
                  </li>
                  <li>
                    <strong>Vite</strong> and <strong>Vitest</strong> – for
                    blazing-fast build setups and efficient testing
                  </li>
                  <li>
                    <strong>Docker</strong> – containerizing full-stack apps for
                    seamless deployment workflows
                  </li>
                  <li>
                    <strong>Tamagui</strong>, <strong>Tailwind CSS</strong>, and{" "}
                    <strong>Framer Motion</strong> – crafting performant,
                    animated, and consistent UI experiences
                  </li>
                  <li>
                    <strong>zustand</strong> – lightweight and scalable state
                    management using custom hooks
                  </li>
                  <li>
                    <strong>Radix UI</strong> – building accessible, composable
                    UI primitives for production-ready design systems
                  </li>
                  <li>
                    Writing clean, modular code using{" "}
                    <strong>ES Modules</strong>, and working toward full project
                    test coverage and CI/CD automation
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  My primary focus is building{" "}
                  <strong>production-grade applications</strong> with an
                  emphasis on performance, developer experience, and
                  maintainability.
                </p>
              </div>
            </motion.div>

            {/* Future */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-accent mb-4">
                What's Next
              </h3>
              <div className="bg-background-light p-6 rounded-cartoon">
                <p>
                  Although I already have a solid foundation in backend
                  development (<strong>Node.js</strong>,{" "}
                  <strong>Express</strong>, <strong>MongoDB</strong>,
                  <strong>Redis</strong>, and <strong>WebSockets</strong>), my
                  next focus is mastering
                  <strong> Next.js</strong> — including SSR, SSG, ISR, and API
                  routes — to build scalable, SEO-friendly full-stack apps.
                </p>

                <p className="font-medium">I'm also diving into:</p>

                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Web3 fundamentals</strong> – understanding smart
                    contracts, wallets, and decentralized apps
                  </li>
                  <li>
                    <strong>tRPC & GraphQL</strong> – for fully type-safe API
                    communication
                  </li>
                  <li>
                    <strong>Edge deployment</strong> strategies with platforms
                    like Vercel
                  </li>
                  <li>
                    <strong>Server components</strong> and React 18+ features
                  </li>
                  <li>
                    <strong>Cloud-native architectures</strong> and{" "}
                    <strong>DevOps tools</strong> to prepare for
                    enterprise-scale deployment workflows
                  </li>
                </ul>

                <p>
                  I’m on a mission to become a truly{" "}
                  <strong>full-stack, deployment-ready engineer</strong> who can
                  ship polished, performant apps from scratch to scale.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Skills;
