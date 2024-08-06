
import FeatureCard from './FeatureCard';
import { Brain, Headset, Rocket } from 'lucide-react';
import './styles.css';

const features = [
  {
    title: 'Personalized Therapy',
    description: 'Get tailored therapy plans that suit your specific needs.',
    Icon: Brain,
    link: '#'
  },
  {
    title: '24/7 Support',
    description: 'We are here for you at any time of the day.',
    Icon: Headset,
    link: '#'
  },
  {
    title: 'High Performance',
    description: 'Experience efficient and reliable mental health support.',
    Icon: Rocket,
    link: '#'
  }
];

const FeatureCards: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 z-10 relative md:px-4 max-md:mt-12 mb-12 lg:mt-[5rem]">
      {features.map((feature, index) => (
        <FeatureCard key={index} title={feature.title} description={feature.description} Icon={feature.Icon} link={feature.link} className={`feature-card feature-card-${index + 1}`} />
      ))}
    </div>
  );
};

export default FeatureCards;
