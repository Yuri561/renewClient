import React from 'react';

import HeroSection from '../Hero/HeroSection';

import MainSection from '../Testimonials/MainSection';
import LocationSection from '../Location/LocationSection';


const HomePage: React.FC = () => { 
    return (
        <div>
            
            <HeroSection />
            <MainSection />
            <LocationSection />
           
        </div>
    );
};

export default HomePage;
