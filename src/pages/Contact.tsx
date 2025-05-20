import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const { t } = useLanguage();
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 md:pt-32"
    >
      {/* SEO Metadata and Structured Data */}
      <Helmet>
        <title>Contact | Rahul Roy's Portfolio</title>
        <meta name="description" content="Get in touch with Rahul Roy for collaboration, job opportunities, or any questions about web development projects." />
        <meta name="keywords" content="contact Rahul Roy, hire developer, freelance web developer, project collaboration" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Contact | Rahul Roy's Portfolio" />
        <meta property="og:description" content="Get in touch with Rahul Roy for collaboration, job opportunities, or any questions about web development projects." />
        <meta property="og:image" content="https://rahulroydev.netlify.app/logo.png" />
        <meta property="og:url" content="https://rahulroydev.netlify.app/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Rahul Roy's Portfolio" />
        <meta name="twitter:description" content="Get in touch with Rahul Roy for collaboration, job opportunities, or any questions about web development projects." />
        <meta name="twitter:image" content="https://rahulroydev.netlify.app/logo.png" />
        
        {/* JSON-LD structured data for contact page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Rahul Roy",
            "description": "Get in touch with Rahul Roy for collaboration, job opportunities, or any questions about web development projects.",
            "mainEntity": {
              "@type": "Person",
              "name": "Rahul Roy",
              "jobTitle": "Full Stack Developer",
              "url": "https://rahulroydev.netlify.app",
              "sameAs": [
                "https://github.com/RahulRoyBXT"
                // Add other social profiles if available
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "rahulroybxt@gmail.com", // Update with your actual email
                "url": "https://rahulroydev.netlify.app/contact"
              }
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
          {t('contact.pageTitle')} <span className="text-primary">Connect</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t('contact.pageDescription')}
        </motion.p>
      </div>
      
      <ContactSection />
      
      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('contact.faq.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
  {
    question: t('contact.faq.stack.question'),
    answer: t('contact.faq.stack.answer'),
  },
  {
    question: t('contact.faq.value.question'),
    answer: t('contact.faq.value.answer'),
  },
  {
    question: t('contact.faq.workflow.question'),
    answer: t('contact.faq.workflow.answer'),
  },
  {
    question: t('contact.faq.timeline.question'),
    answer: t('contact.faq.timeline.answer'),
  },
  {
    question: t('contact.faq.aftercare.question'),
    answer: t('contact.faq.aftercare.answer'),
  },
  {
    question: t('contact.faq.next.question'),
    answer: t('contact.faq.next.answer'),
  }
]
.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-cartoon shadow-cartoon"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-800">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;