import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Testimonials from './Testimonials';

const MainSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Adjust as needed to control when the animation triggers
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="my-4 font-[sans-serif]">
      <div className="max-w-8xl max-md:max-w-xl mx-auto">
        <motion.div
          className="bg-purple-800 grid md:grid-cols-2 items-center p-9 lg:gap-32 md:gap-16 gap-9"
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <Testimonials />
          <div className="text-white font-extrabold">
            <motion.h1
              className="text-4xl text-white md:text-5xl lg:text-6xl leading-tight"
              variants={itemVariants}
            >
              Discover Your Inner Strength
            </motion.h1>
            <motion.h2
              className="sm:text-base text-white md:text-lg lg:text-xl font-extrabold mt-4"
              variants={itemVariants}
            >
              Benefits of Joining Our Community
            </motion.h2>
            <motion.ul variants={itemVariants}>
              <motion.li className="text-sm mt-4 leading-relaxed">
                Customized Telehealth Plans designed to meet individual mental health needs for optimal outcomes.
              </motion.li>
    
              <motion.li className="text-sm leading-relaxed">
                Private and Secure Online Consultations, ensuring your comfort and confidentiality.
              </motion.li>
              
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainSection;
