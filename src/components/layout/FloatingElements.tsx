import { motion } from 'framer-motion';

const FloatingElements = () => {
  const floatingElements = [
    { color: '#4CC9F0', size: 50, delay: 0, position: { top: '15%', left: '10%' } },
    { color: '#F8961E', size: 40, delay: 1, position: { top: '80%', left: '15%' } },
    { color: '#E63F8A', size: 60, delay: 2, position: { top: '30%', left: '80%' } },
    { color: '#FFD166', size: 35, delay: 3, position: { top: '70%', left: '70%' } },
    { color: '#8BE8FF', size: 45, delay: 4, position: { top: '60%', left: '40%' } },
    { color: '#F3722C', size: 55, delay: 5, position: { top: '20%', left: '40%' } },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-20"
          style={{
            backgroundColor: element.color,
            width: element.size,
            height: element.size,
            top: element.position.top,
            left: element.position.left,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: element.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;