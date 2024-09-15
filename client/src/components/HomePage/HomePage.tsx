

import HeroSection from '../Hero/HeroSection';

import MainSection from '../Services/MainSection';
// import LocationSection from '../Location/LocationSection';
import MapSection from '../../components/Location/MapSection';
import AboutSection from '../../components/About/AboutSection';
import Contact from '../../components/Contact/Contact';


const HomePage: React.FC = () => {
    return (
        <div>

            <HeroSection />
            <MainSection />
            <AboutSection />
            <MapSection />
            <Contact/>

        </div>
    );
};

export default HomePage;
