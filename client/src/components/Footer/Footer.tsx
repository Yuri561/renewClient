import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 py-6 px-16 font-sans tracking-wide">
      <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p className="text-[15px] leading-loose">© Renewing Of the Mind PLLC. All rights reserved.</p>

        <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
          <li>
            <a href="#services" className="text-[15px] hover:text-white">
              Telehealth
            </a>
          </li>
          <li>
            <a href="#services" className="text-[15px] hover:text-white">
              Medication Management
            </a>
          </li>
          <li>
            <a href="#services" className="text-[15px] hover:text-white">
              In-Person Sessions
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[15px] hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
