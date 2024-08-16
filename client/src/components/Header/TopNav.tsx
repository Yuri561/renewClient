import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopNav: React.FC = () => {
  return (
    <section className="bg-[#004d66] min-h-[40px] px-4 py-2 sm:px-10 flex items-center max-sm:flex-col">
      {/* Phone Button */}
      <a href="tel:+19194464999" className="bg-[#ff4500] text-white text-sm py-1 px-3 rounded-full flex items-center">
        <Phone className="mr-3 inline-block w-[16px] h-[16px]" />
        +1 919-446-4999
      </a>

      <span className="border-l h-3 mx-6 max-sm:hidden"></span>

      {/* Email Button */}
      <a href="mailto:admin@renewingofthemind.com" className="bg-[#ff4500] text-white text-sm py-1 px-3 rounded-full flex items-center max-sm:my-2">
        <Mail className="mr-3 inline-block w-[16px] h-[16px]" />
        admin@renewingofthemind.com
      </a>

      <div className="sm:ml-auto text-white">
        <Link to="#" className="text-white text-sm mr-1">Sign In</Link>
        <span className="mx-1">/</span>
        <Link to="#" className="text-white text-sm ml-1">Sign Up</Link>
      </div>
    </section>
  );
};

export default TopNav;
