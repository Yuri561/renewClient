import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import Statistics from './Statistics';
import FeatureCards from './FeatureCards';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section p-5 font-sans max-w-8xl max-md:max-w-md mx-auto bg-custom-radial">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 rounded ">
        <HeroContent />
        <HeroImage />
      </div>
      <Statistics />
      <FeatureCards />
    </div>
  );
};

export default HeroSection;
