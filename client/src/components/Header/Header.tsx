import React from 'react';
import { Tooltip } from 'react-tooltip';

import { Home, Info, MapPin, Briefcase, Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed  z-50 w-full h-16  -translate-x-1/2 bg-blue-950  backdrop-blur-lg border border-white/10 shadow-lg  top-0 left-1/2 dark:bg-gray-700/30 dark:border-gray-600/10">
      <div className="grid h-full  grid-cols-5 mx-auto bg-blue-950 ">
        {/* Home Button */}
        <a
          href="#home"
          className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-blue-800 group"
          data-tooltip-id="tooltip-home"
        >
          <Home className="w-5 h-5 mb-1 text-gray-500 dark:text-blue-400 group-hover:text-blue-200 dark:group-hover:text-blue-500" />
          <span className="sr-only">Home</span>
        </a>
        <Tooltip id="tooltip-home" place="top" content="Home" />

        {/* About Button */}
        <a
          href='#about'
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-blue-800 group"
          data-tooltip-id="tooltip-about"
        >
          <Info className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">About</span>
        </a>
        <Tooltip id="tooltip-about" place="top" content="About" />

        {/* Location Button */}
        <a
          href='#location'
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-blue-800 group"
          data-tooltip-id="tooltip-location"
        >
          <MapPin className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Location</span>
        </a>
        <Tooltip id="tooltip-location" place="top" content="Location" />

        {/* Services Button */}
        <a
          href='#services'
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-blue-800 group"
          data-tooltip-id="tooltip-services"
        >
          <Briefcase className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Services</span>
        </a>
        <Tooltip id="tooltip-services" place="top" content="Services" />

        {/* Contact Button */}
        
        <a
          href='#contact'
          className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50  dark:hover:bg-blue-800 group"
          data-tooltip-id="tooltip-contact"
        >
          <Phone className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Contact</span>
        </a>
        <Tooltip id="tooltip-contact" place="top" content="Contact" />
      </div>
    </header>
  );
};

export default Header;
