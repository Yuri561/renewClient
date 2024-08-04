import React from 'react';
import { motion } from 'framer-motion';
import './LocationStyles.css';

const OnlineZoomSection: React.FC = () => {
  // Variants for the text and button animations
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } }
  };

  return (
    <div className="max-w-8xl p-3 bg-slate-700 max-md:max-w-xl mx-auto font-[sans-serif] my-4">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={textVariant}
      >
        <h2 className="text-white text-3xl font-extrabold text-center mb-6">
          Connect & Heal
        </h2>
        <p className="text-white text-sm">
          Connect with our mental health professionals from the comfort of your home through our secure and convenient Zoom sessions.
        </p>
      </motion.div>
      <div className="mt-16 grid md:grid-cols-2 items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src="/zoom.png" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt="Online Zoom Sessions" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariant}
        >
          <h3 className="text-white text-xl font-bold mb-4">Convenient and Confidential</h3>
          <p className="text-white text-sm">
            Our online sessions provide the flexibility to receive care from the comfort of your own home. Our platform ensures your privacy and confidentiality during all virtual meetings.
          </p>
          <motion.button
            className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Schedule a Session
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default OnlineZoomSection;
