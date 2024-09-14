

import HeroSection from '../Hero/HeroSection';

import MainSection from '../Testimonials/MainSection';
// import LocationSection from '../Location/LocationSection';
import MapSection from '../../components/Location/MapSection';

const HomePage: React.FC = () => {
    return (
        <div>

            <HeroSection />
            <MapSection />
            <MainSection />

        </div>
    );
};

export default HomePage;
