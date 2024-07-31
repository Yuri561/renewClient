import React from 'react';
import Testimonials from './Testimonials';

const MainSection: React.FC = () => {
  return (
    <div className="my-4 font-[sans-serif]">
      <div className="max-w-[1050px] max-md:max-w-xl mx-auto ">
        <div className="bg-purple-800 grid md:grid-cols-2 items-center p-9 lg:gap-24 md:gap-16 gap-8">
          <Testimonials />
          <div className="max-md:-order-1">
            <h6 className="text-xl font-bold text-gray-800">Testimonials</h6>
            <h2 className="text-gray-800 text-4xl font-extrabold mt-4">We are loyal with our customer</h2>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
