import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './HeroContent.css';

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
      <div className="p-9 bg-white  z-0 rounded relative">
        <motion.h2
          className="text-slate-800 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]"
          variants={itemVariants}
        >
          <span className="text-yellow-500">Enhance</span> Your Well-being with <span className="text-yellow-500">Tailored</span> Mental Health Solutions
        </motion.h2>
        <motion.p
          className="text-slate-800 text-lg mt-6 leading-relaxed"
          variants={itemVariants}
        >
         Our telehealth platform connects you with experienced healthcare providers for personalized, confidential, and compassionate care. Whether you're seeking support for anxiety, depression, stress, or other mental health challenges, we are here to help. At Renewing Of the Mind PLLC, we believe in empowering individuals through innovative virtual healthcare solutions, making it easier than ever to prioritize your mental well-being.
        </motion.p>

        <motion.button
          type="button"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5 transition-colors duration-300"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
        >
          <a href="#services-section">Explore Our Services</a>
        </motion.button>

        {/* Floating Bubbles for Added Effect */}
        <div className="floating-bubbles">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
