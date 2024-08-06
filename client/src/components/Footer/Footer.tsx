
const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-14 px-16 font-sans tracking-wide relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Our Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Mental Health Resources</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Careers</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Github</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-all">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Twitter</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-all">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-all">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center lg:justify-center">
          <a href='#'><img src="/LOGO.png" alt="Renewing The Mind PLLC Logo" className='w-60' /></a>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      <div className="flex sm:justify-between flex-wrap gap-6">
        <div className="flex space-x-5">
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-all">
            <svg className="w-5 h-5 fill-gray-400 hover:fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-all">
            <svg className="w-5 h-5 fill-gray-400 hover:fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2.04c-5.478 0-9.96 4.48-9.96 9.96 0 5.478 4.48 9.96 9.96 9.96 5.478 0 9.96-4.482 9.96-9.96 0-5.48-4.482-9.96-9.96-9.96zm0 18.042c-4.465 0-8.082-3.617-8.082-8.082 0-4.465 3.617-8.082 8.082-8.082 4.465 0 8.082 3.617 8.082 8.082 0 4.465-3.617 8.082-8.082 8.082zm-2.81-11.74h1.19v-1.35c0-.343.092-.57.568-.57h.6v-1.06h-1.08c-1.292 0-1.75.637-1.75 1.686v1.294h-1.19v1.47h1.19v4.24h1.81v-4.24h1.19l.17-1.47h-1.36v-1.01z"></path>
            </svg>
          </a>
        </div>
        <p className="text-gray-300 text-sm">© 2023 Renewing The Mind PLLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
