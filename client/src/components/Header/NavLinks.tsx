import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import Logo from '../../../public/LOGO.png';

const NavMenu: React.FC<{ isMenuOpen: boolean; toggleMenu: () => void }> = ({ isMenuOpen, toggleMenu }) => {
  const navLinkArr = [
    { name: 'Home', to: '/', exact: true },
    { name: 'Programs', to: '/programs' },
    { name: 'About', to: '/about-section' },
    { name: 'Provider', to: '/provider' },
  ];

  return (
    <div id="collapseMenu" className="lg:flex lg:items-center">
      {isMenuOpen && (
        <button
          id="toggleClose"
          className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          onClick={toggleMenu}
        >
          <X className="w-4 h-4 fill-black" />
        </button>
      )}
      <ul className={`lg:flex lg:gap-x-10 ${isMenuOpen ? 'block' : 'hidden'} max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}>
        <li className="mb-6 hidden max-lg:block">
          <img src={Logo} alt="Logo" className="w-20 rounded-full items-center" />
        </li>
        {navLinkArr.map((link, index) => (
          <li
            key={index}
            className="max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-black lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300"
          >
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 block text-[15px] font-medium lg:after:absolute lg:after:bg-black lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'
                  : 'text-yellow-500 block text-[15px] font-medium lg:after:absolute lg:after:bg-black lg:after:w-0 lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full'
              }
              onClick={toggleMenu}
              end={link.exact}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
