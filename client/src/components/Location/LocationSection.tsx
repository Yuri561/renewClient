import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import MapSection from './MapSection';
import OnlineZoomSection from './OnlineZoomSection';

const LocationSection: React.FC = () => {
  const controls = useAnimation();

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, x: -100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        mass: 0.5,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div id='services-section'>
      <InView as="div" onChange={(inView) => {
        if (inView) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      }}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <MapSection />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <OnlineZoomSection />
        </motion.div>
      </InView>
    </div>
  );
};

export default LocationSection;
