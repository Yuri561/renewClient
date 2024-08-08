import React from 'react';
import MyStory from './MyStory';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

const AboutSection: React.FC = () => {
  return (
    <div className="mt-12 mb-6 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 px-6 sm:py-20 py-10 font-sans text-slate-600">
      <div className="bg-white mt-24 rounded text-light p-2 mt-6 lg:mt-12 max-w-8xl mx-auto text-center">
        <motion.h1
          className="text-5xl sm:text-4xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Guiding You Towards a Healthier Mind
        </motion.h1>
        <motion.p
          className="text-lg sm:text-base mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At Renewing Of The Mind Pllc, we believe in the transformative power of mental wellness. Our mission is to provide compassionate, personalized care that empowers you to live a healthier, more fulfilling life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            type="button"
            className="bg-blue-600 text-white text-lg tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out hover:bg-blue-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => alert('Thank you for choosing to explore our services!')}
          >
            Get Started
          </button>
        </motion.div>
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg p-8 max-w-xl mx-auto mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            Inspiring Mental Health and Wellness
          </h2>
          <Marquee>
            <p className="text-base italic">
              "The greatest wealth is mental health. We are here to support, inspire, and guide you on your journey."
            </p>
          </Marquee>
        </motion.div>
      </div>
      <MyStory />
    </div>
  );
};

export default AboutSection;
