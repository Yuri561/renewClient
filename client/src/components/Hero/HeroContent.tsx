import React from 'react';

const HeroContent: React.FC = () => {
  return (
    <div className="max-md:order-1 max-md:text-center z-10 relative ">
      <h2 className="text-slate-200 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]">
        <span className="text-blue-600">Empower</span> Your Mind with <span className="text-blue-600">Professional</span> Care
      </h2>
      <p className="text-white fs-2 mt-6 text-base leading-relaxed">
        Discover a supportive community and expert resources to help you manage your mental health. Our services are designed to provide you with the care and support you need.
      </p>
      <button type='button' className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">
        Get Started
      </button>
    </div>
  );
};

export default HeroContent;
