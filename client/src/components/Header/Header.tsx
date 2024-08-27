import { useState } from 'react';
import Logo from '../../../public/LOGO.png';
// import TopNav from './TopNav';
import NavLinks from './NavLinks';
import { Menu } from 'lucide-react';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='font-[sans-serif] z-50 fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-6 py-4 bg-opacity-30 bg-white backdrop-blur-lg border border-white border-opacity-10 rounded-xl shadow-md'>

      <div className='flex flex-wrap items-center justify-between py-3 px-4 sm:px-10 lg:gap-y-4 gap-y-6 gap-x-4'>
        <a href="javascript:void(0)"><img src={Logo} alt="logo" className='w-10 rounded-full' /></a>
        <NavLinks isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className='flex items-center max-sm:ml-auto'>
          {!isMenuOpen && (
            <button id="toggleOpen" className='lg:hidden ml-6' onClick={toggleMenu}>
              <Menu className="w-7 h-7 text-black" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
