import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';

interface StatsProps {
  className?: string;
}

const statsData = [
  {
    number: '10+',
    label: 'Years of Excellence',
    description: 'Over a decade of dedicated service in mental health, fostering resilience and recovery in our community.',
    bgColor: 'bg-blue-700',
    textColor: 'text-white',
  },
  {
    number: '1,000+',
    label: 'Lives Transformed',
    description: 'Providing personalized mental health care, transforming the lives of individuals and families through compassion and innovation.',
    bgColor: 'bg-teal-500',
    textColor: 'text-white',
  },
  {
    number: '150+',
    label: 'Qualified Professionals',
    description: 'Our team consists of experienced therapists and counselors committed to mental wellness and holistic healing.',
    bgColor: 'bg-purple-700',
    textColor: 'text-white',
  },
  {
    number: '30+',
    label: 'Community Programs',
    description: 'Offering a variety of programs that educate and empower individuals to overcome mental health challenges.',
    bgColor: 'bg-green-600',
    textColor: 'text-white',
  },
  {
    number: '25',
    label: 'Awards & Recognitions',
    description: 'Honored for excellence in mental health care, recognized by leading organizations for our contributions and innovations.',
    bgColor: 'bg-yellow-500',
    textColor: 'text-gray-800',
  },
  {
    number: '500+',
    label: 'Support Groups',
    description: 'Providing a safe space for sharing experiences and supporting each other in recovery, fostering community and connection.',
    bgColor: 'bg-pink-600',
    textColor: 'text-white',
  },
  {
    number: '20+',
    label: 'Online Resources',
    description: 'Access a wealth of information and tools online to help manage mental health and enhance well-being anytime, anywhere.',
    bgColor: 'bg-indigo-600',
    textColor: 'text-white',
  },
  {
    number: '50+',
    label: 'Wellness Workshops',
    description: 'Engage in interactive workshops focused on mindfulness, stress reduction, and emotional regulation for a balanced life.',
    bgColor: 'bg-red-500',
    textColor: 'text-white',
  },
  {
    number: '200+',
    label: 'Youth Programs',
    description: 'Dedicated programs for young people to support mental health education, early intervention, and skill development.',
    bgColor: 'bg-orange-500',
    textColor: 'text-white',
  },
  {
    number: '100%',
    label: 'Confidential Care',
    description: 'Committed to protecting your privacy, ensuring that all sessions and personal information are kept confidential.',
    bgColor: 'bg-cyan-600',
    textColor: 'text-white',
  },
];

const Statistics: React.FC<StatsProps> = ({ className }: StatsProps) => {
  return (
    <div className="mt-[8rem]">
      <div className='text-center items-center'>
        <h2 className='text-slate-200 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]'>Your Mind Matters</h2>
      </div>
      <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center ${className}`}>
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center rounded p-8 text-center ${stat.bgColor} ${stat.textColor} shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h5 className="font-bold text-4xl mb-2">{stat.number}</h5>
            <p className="font-semibold text-xl mb-2">{stat.label}</p>
            <p className="text-sm max-w-xs">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
