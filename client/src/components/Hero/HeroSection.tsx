// import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
// import Statistics from './Statistics';
// import FeatureCards from './FeatureCards';



const HeroSection: React.FC = () => {
  return (
    <div className="hero-section font-sans bg-white pt-16 mx-auto overflow-hidden">
      <div className="flex flex-col items-center max-w-8xl mx-auto p-3">

        <HeroImage />
        </div>
        {/* <div className='mt-4'>
        <HeroContent />

        </div>
      <div className="mt-1">
        <Statistics />
        <FeatureCards />
      </div> */}
    </div>
  );
};

export default HeroSection;
