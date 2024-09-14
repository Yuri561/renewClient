import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import ZoomPng from '../../../public/zoom.png';

const OnlineZoomSection: React.FC = () => {
  const controls = useAnimation();

  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 } },
  };

  const handleScheduleClick = () => {
    window.open('https://calendly.com/admin-renewingofthemindpllc/30min', '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-slate-800 rounded-lg shadow-xl my-12">
      <InView
        as="div"
        onChange={(inView) => controls.start(inView ? 'visible' : 'hidden')}
        threshold={0.2}
        triggerOnce
      >
        {/* Title and Description */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={textVariant}
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">Connect & Heal</h2>
          <p className="text-lg text-white max-w-xl mx-auto">
            Experience professional mental health support through our secure and convenient Zoom sessions. Our expert team is here to guide you every step of the way.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={imageVariant}
            className="flex justify-center md:justify-start"
          >
            <img
              src={ZoomPng}
              alt="Online Zoom Sessions"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text and Button Section */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={textVariant}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Convenient and Confidential</h3>
            <p className="text-base text-white mb-6">
              Our online sessions offer the flexibility to receive care from the comfort of your home, ensuring privacy and confidentiality for all virtual meetings.
            </p>
            <ul className="text-sm text-white mb-6 list-disc list-inside">
              <li>Experienced professionals ready to support you.</li>
              <li>Flexible scheduling that fits your life.</li>
              <li>Secure platform ensuring your privacy.</li>
            </ul>
            <motion.button
              className="px-8 py-3 rounded text-white bg-blue-600 border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 transition-all duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleClick}
              variants={buttonVariant}
            >
              Schedule a Session
            </motion.button>
          </motion.div>
        </div>
      </InView>
    </div>
  );
};

export default OnlineZoomSection;
