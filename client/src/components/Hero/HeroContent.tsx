import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HeroContent: React.FC = () => {
  // State to track visibility
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
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

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: '#1D4ED8', transition: { duration: 0.3 } },
    tap: { scale: 0.95, backgroundColor: '#1E3A8A' }
  };

  return (
    <motion.div
      className="max-md:order-1 max-md:text-center z-10 relative"
      ref={sectionRef} // Attach ref to observe
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'} // Trigger animations based on visibility
    >
      <div className="p-9 bg-gradient-to-r from-blue-600 to-yellow-500 z-0 rounded">
        <motion.h2
          className="text-slate-200 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]"
          variants={itemVariants}
        >
          <span className="text-yellow-500">Enhance</span> Your Well-being with <span className="text-yellow-500">Tailored</span> Mental Health Solutions
        </motion.h2>
        <motion.p
          className="text-white text-lg mt-6 leading-relaxed"
          variants={itemVariants}
        >
          Join a community dedicated to supporting your mental health journey. Our platform offers comprehensive services tailored to meet individual needs, ranging from therapy sessions with licensed professionals to self-guided wellness tools.
        </motion.p>
        {/* <motion.ul
          className="list-disc list-inside space-y-2 text-white mt-4 text-base"
          variants={containerVariants}
        >
          {[
            'Access to a diverse team of mental health professionals, including psychologists, therapists, and counselors.',
            'Personalized treatment plans that adapt to your unique circumstances and goals.',
            'Convenient, secure, and private online sessions that fit your lifestyle.',
            'Resource libraries filled with educational materials to help you understand and manage your mental health.'
          ].map((text, index) => (
            <motion.li key={index} variants={itemVariants}>
              {text}
            </motion.li>
          ))}
        </motion.ul> */}
        <motion.button
          type="button"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5 transition-colors duration-300"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
        >
          <a href="#services-section">Explore Our Services</a>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroContent;
