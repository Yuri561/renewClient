import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from './Testimonials';

const MainSection = () => {
  // Variants for text animation
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 200,
      },
    }),
  };

  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="my-4 font-[sans-serif]">
      <div className="max-w-8xl max-md:max-w-xl mx-auto">
        <div className="bg-purple-800 grid md:grid-cols-2 items-center p-9 lg:gap-32 md:gap-16 gap-9">
          <Testimonials />
          <div className="max-md:-order-1">
            <motion.div
              className="text-white text-4xl font-extrabold"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {"Discover Your Inner Strength".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-slate-50 text-4xl font-extrabold"
                  custom={index}
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.h2
              className="text-white text-4xl font-extrabold mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Benefits of Joining Our Community
            </motion.h2>
            <motion.p
              className="text-sm text-white mt-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Welcome to our mental health platform, a safe and supportive space where you can
              explore your thoughts and feelings with the guidance of experienced professionals.
              Our team, led by a highly skilled psychiatric nurse practitioner, is dedicated to
              providing you with personalized care and support.

              Through our platform, you have access to a range of mental health services designed
              to help you understand yourself better and improve your overall well-being. Whether
              you are struggling with anxiety, depression, stress, or any other mental health
              issue, our compassionate providers are here to help.

              We offer convenient and confidential online consultations via Zoom, allowing you to
              receive professional care from the comfort of your own home. Our goal is to make
              mental health support accessible to everyone, regardless of location.

              Our services include individual therapy sessions, group therapy, and workshops on
              various topics such as stress management, mindfulness, and coping strategies. We
              believe in a holistic approach to mental health, addressing not only your symptoms
              but also the underlying causes and contributing factors.

              Join our community and take the first step towards a healthier, happier you.
              Explore our resources, connect with our providers, and start your journey to
              mental well-being today. We are here to support you every step of the way.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
