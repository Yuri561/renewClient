import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import Statistics from './Statistics';
import FeatureCards from './FeatureCards';
import './styles.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section font-sans bg-custom-radial pt-16 mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 sm: grid-cols-1 gap-6 p-2 max-w-8xl mx-auto">
        <HeroContent />
        <HeroImage />
      </div>
      <div>
        <Statistics />
        <FeatureCards />
      </div>
    </div>
  );
};

export default HeroSection;
