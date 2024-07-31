import React from 'react';
import HeroImg from '/hero.jpg'

const HeroImage: React.FC = () => {
  return (
    <div className="lg:h-[550px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-slate-900 before:h-[120%] before:w-[120%] before:right-0 before:z-0">
      <img src={HeroImg} className="rounded lg:w-[30rem]  relative" alt="Mental Health Support" />
    </div>
  );
};

export default HeroImage;
