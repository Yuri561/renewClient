
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopNav: React.FC = () => {
  return (
    <section className="bg-[#004d66] min-h-[40px] px-4 py-2 sm:px-10 flex items-center max-sm:flex-col">
      <button type="button" className="text-white text-sm">
        <Phone className="mr-3 inline-block w-[16px] h-[16px]" />
        +1 919-446-4999
      </button>
      <span className="border-l h-3 mx-6 max-sm:hidden"></span>
      <button type="button" className="text-white text-sm max-sm:my-2">
        <Mail className="mr-3 inline-block w-[16px] h-[16px]" />
        info@renewingofthemind.co
      </button>
      <div className="sm:ml-auto text-white">
        <Link to="#" className="text-white text-sm mr-1">Sign In</Link>
        <span className="mx-1">/</span>
        <Link to="#" className="text-white text-sm ml-1">Sign Up</Link>
      </div>
    </section>
  );
};

export default TopNav;
