import React from 'react';
import './styles.css';

interface StatsProps {
  className?: String,
}

const Statistics: React.FC<StatsProps> = ({className}) => {
  return (
    <div className="mt-[8rem] ">
      <div className={`grid sm:grid-cols-3 gap-4 items-center feature-stats  ${className}`}>
        <div className="flex flex-col items-center bg-blue-700 rounded p-9 text-center">
          <h5 className="text-white font-bold text-xl mb-2">10+</h5>
          <p className="text-white">Years of Service</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded p-9 text-center">
          <h5 className="text-gray-800 font-bold text-xl mb-2">500+</h5>
          <p className="text-gray-600">Clients Assisted</p>
        </div>
        <div className="flex flex-col items-center bg-slate-700 rounded p-9 text-center">
          <h5 className="text-white font-bold text-xl mb-2">100+</h5>
          <p className="text-white">Trusted Therapists</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
