import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import './LocationStyles.css';

const OnlineZoomSection: React.FC = () => {
  const controls = useAnimation();

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  const handleScheduleClick = () => {
    window.open('https://calendly.com/cloudflow34/mental-awareness', '_blank');
  };

  return (
    <div className="max-w-8xl p-6 bg-slate-700 max-md:max-w-xl mx-auto font-[sans-serif] my-8 rounded-lg shadow-lg">
      <InView
        as="div"
        onChange={(inView) => controls.start(inView ? 'visible' : 'hidden')}
      >
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={textVariant}
        >
          <h2 className="text-white text-4xl font-extrabold text-center mb-4">
            Connect & Heal
          </h2>
          <p className="text-white text-lg mb-4">
            Experience professional mental health support with our secure and convenient Zoom sessions. Our expert team is here to help you every step of the way.
          </p>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://source.unsplash.com/500x300/?therapy,mental-health"
              className="object-cover rounded-md shadow-lg"
              alt="Online Zoom Sessions"
              width="500"
              height="300"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={buttonVariant}
          >
            <h3 className="text-white text-2xl font-bold mb-2">
              Convenient and Confidential
            </h3>
            <p className="text-white text-base mb-4">
              Our online sessions offer the flexibility to receive care from the comfort of your home. We ensure privacy and confidentiality for all virtual meetings.
            </p>
            <ul className="text-white text-sm mb-4">
              <li>✅ Experienced professionals ready to support you.</li>
              <li>✅ Flexible scheduling that fits your life.</li>
              <li>✅ Secure platform ensuring your privacy.</li>
            </ul>
            <motion.button
              className="px-8 py-3 mt-4 rounded text-white text-base tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleClick}
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
