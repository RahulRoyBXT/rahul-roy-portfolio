import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';
import { useLanguage } from '../context/LanguageContext';

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