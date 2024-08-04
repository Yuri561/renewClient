import React from 'react';

const HeroContent: React.FC = () => {
  return (
    <div className="max-md:order-1 max-md:text-center z-10 relative">
      <div className="p-9 bg-gradient-to-r from-blue-600 to-yellow-500 z-0 rounded ">

      <h2 className="text-slate-200 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]">
        <span className="text-yellow-500">Enhance</span> Your Well-being with <span className="text-yellow-500">Tailored</span> Mental Health Solutions
      </h2>
      <p className="text-white text-lg mt-6 leading-relaxed">
        Join a community dedicated to supporting your mental health journey. Our platform offers comprehensive services tailored to meet individual needs, ranging from therapy sessions with licensed professionals to self-guided wellness tools.
      </p>
      <ul className="list-disc list-inside space-y-2 text-white mt-4 text-base">
        <li>Access to a diverse team of mental health professionals, including psychologists, therapists, and counselors.</li>
        <li>Personalized treatment plans that adapt to your unique circumstances and goals.</li>
        <li>Convenient, secure, and private online sessions that fit your lifestyle.</li>
        <li>Resource libraries filled with educational materials to help you understand and manage your mental health.</li>
      </ul>
      <button type='button' className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5 transition-colors duration-300">
        Explore Our Services
      </button>

      </div>
    </div>
  );
};

export default HeroContent;
