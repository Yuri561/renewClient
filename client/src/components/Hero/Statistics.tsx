import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

interface StatsProps {
  className?: string;
}
const statsData = [
  {
    number: '10+',
    label: 'Years of Virtual Care',
    description: 'A decade of excellence in delivering telehealth and virtual psychiatric services, providing accessible care to our community.',
    bgColor: 'bg-blue-700',
    textColor: 'text-white',
  },
  {
    number: '1,000+',
    label: 'Patients Served',
    description: 'Empowering over a thousand individuals through personalized virtual mental health care, fostering resilience and recovery.',
    bgColor: 'bg-teal-500',
    textColor: 'text-white',
  },
  {
    number: '150+',
    label: 'Expert Practitioners',
    description: 'Our team of licensed psychiatrists, therapists, and counselors are dedicated to delivering high-quality virtual mental health services.',
    bgColor: 'bg-purple-700',
    textColor: 'text-white',
  },
  {
    number: '30+',
    label: 'Telehealth Programs',
    description: 'Offering a range of telehealth programs designed to address diverse mental health needs, from therapy to psychiatric care.',
    bgColor: 'bg-green-600',
    textColor: 'text-white',
  },
  {
    number: '25',
    label: 'Industry Awards',
    description: 'Recognized for innovation and excellence in telemedicine and mental health services by leading industry organizations.',
    bgColor: 'bg-yellow-500',
    textColor: 'text-gray-800',
  },
  {
    number: '500+',
    label: 'Virtual Support Sessions',
    description: 'Facilitating numerous virtual support groups, creating safe spaces for sharing experiences and supporting mental health recovery.',
    bgColor: 'bg-pink-600',
    textColor: 'text-white',
  },
  {
    number: '20+',
    label: 'Online Mental Health Resources',
    description: 'Providing accessible online resources, including articles, tools, and videos, to help manage mental health anytime, anywhere.',
    bgColor: 'bg-indigo-600',
    textColor: 'text-white',
  },
  {
    number: '50+',
    label: 'Webinars & Workshops',
    description: 'Engaging virtual workshops and webinars focused on mental health topics such as stress management and emotional well-being.',
    bgColor: 'bg-red-500',
    textColor: 'text-white',
  },
  {
    number: '200+',
    label: 'Youth Telehealth Sessions',
    description: 'Offering specialized telehealth services for youth, focusing on mental health education, early intervention, and support.',
    bgColor: 'bg-orange-500',
    textColor: 'text-white',
  },
  {
    number: '100%',
    label: 'Confidential Telecare',
    description: 'Ensuring the highest level of privacy and confidentiality in all virtual sessions, safeguarding your personal information.',
    bgColor: 'bg-cyan-600',
    textColor: 'text-white',
  },
];


const Statistics: React.FC<StatsProps> = ({ className }: StatsProps) => {
  // State to track visibility
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-[8rem] p-8">
      <div className="text-center items-center">
        <h2 className="text-slate-200 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]">Your Mind Matters</h2>
      </div>
      <div
        ref={sectionRef} // Attach ref to observe
        className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center ${className}`}
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center rounded p-8 text-center ${stat.bgColor} ${stat.textColor} shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl`}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, translateY: 0 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : { x: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
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
