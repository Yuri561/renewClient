import React from 'react';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import { Home, Wallet, PlusCircle, Settings, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
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

        {/* Wallet Button */}
        <Link
          to="/wallet"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          data-tooltip-id="tooltip-wallet"
        >
          <Wallet className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Wallet</span>
        </Link>
        <Tooltip id="tooltip-wallet" place="top" content="Wallet" />

        {/* New Item Button */}
        <Link
          to="/new"
          className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          data-tooltip-id="tooltip-new"
        >
          <PlusCircle className="w-4 h-4 text-white" />
          <span className="sr-only">New item</span>
        </Link>
        <Tooltip id="tooltip-new" place="top" content="Create new item" />

        {/* Settings Button */}
        <Link
          to="/settings"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          data-tooltip-id="tooltip-settings"
        >
          <Settings className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Settings</span>
        </Link>
        <Tooltip id="tooltip-settings" place="top" content="Settings" />

        {/* Profile Button */}
        <Link
          to="/profile"
          className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          data-tooltip-id="tooltip-profile"
        >
          <User className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Profile</span>
        </Link>
        <Tooltip id="tooltip-profile" place="top" content="Profile" />
      </div>
    </header>
  );
};

export default Header;
