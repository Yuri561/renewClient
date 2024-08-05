
import { LucideIcon } from 'lucide-react';
import './styles.css'

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  link: string;
  className?: string; // Add custom class ./styles.css
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon, link, className }) => { // Update this line
  return (
    <div className={`feature-card p-6 shadow rounded-md ${className} bg-gradient-to-r from-blue-600 to-yellow-500 border-none`}>
      <div className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-200">{description}</p>
      <button className='mt-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5 transition-colors duration-300'>
      <a href={link} className="text-gray-200 font-bold inline-block text-sm hover:underline hover:scale-105">Learn more</a>
      </button>
    </div>
  );
};

export default FeatureCard;
