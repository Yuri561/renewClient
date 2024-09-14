import React from 'react';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import { Home, Info, MapPin, Briefcase, Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed  mt-3 z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white backdrop-blur-lg border border-white/10 shadow-lg rounded-full top-0 left-1/2 dark:bg-gray-700/30 dark:border-gray-600/10">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        {/* Home Button */}
        <Link
          to="/home"
          className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          data-tooltip-id="tooltip-home"
        >
          <Home className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Home</span>
        </Link>
        <Tooltip id="tooltip-home" place="top" content="Home" />

        {/* About Button */}
        <Link
          to="/about"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          data-tooltip-id="tooltip-about"
        >
          <Info className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">About</span>
        </Link>
        <Tooltip id="tooltip-about" place="top" content="About" />

        {/* Location Button */}
        <Link
          to="/location"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          data-tooltip-id="tooltip-location"
        >
          <MapPin className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Location</span>
        </Link>
        <Tooltip id="tooltip-location" place="top" content="Location" />

        {/* Services Button */}
        <Link
          to="/services"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          data-tooltip-id="tooltip-services"
        >
          <Briefcase className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Services</span>
        </Link>
        <Tooltip id="tooltip-services" place="top" content="Services" />

        {/* Contact Button */}
        <Link
          to="/contact"
          className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          data-tooltip-id="tooltip-contact"
        >
          <Phone className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Contact</span>
        </Link>
        <Tooltip id="tooltip-contact" place="top" content="Contact" />
      </div>
    </header>
  );
};

export default Header;
