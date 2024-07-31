import React from 'react';
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
    <div className={`feature-card p-6 shadow rounded-md ${className}`}>
      <div className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <a href={link} className="text-blue-600 font-bold inline-block text-sm hover:underline mt-4">Learn more</a>
    </div>
  );
};

export default FeatureCard;
