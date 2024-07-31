import React from 'react';
import './styles.css';

const OnlineZoomSection: React.FC = () => {
  return (
    <div className="max-w-8xl p-3 bg-slate-700 max-md:max-w-xl mx-auto font-[sans-serif] my-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-white text-3xl font-extrabold text-center mb-6">Online Zoom Sessions</h2>
        <p className="text-white text-sm">Connect with our mental health professionals from the comfort of your home through our secure and convenient Zoom sessions.</p>
      </div>
      <div className="mt-16 grid md:grid-cols-2 items-center gap-16">
        <div>
          <img src="https://readymadeui.com/contact.webp" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt="Online Zoom Sessions" />
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Convenient and Confidential</h3>
          <p className="text-white text-sm">Our online sessions provide the flexibility to receive care from the comfort of your own home. Our platform ensures your privacy and confidentiality during all virtual meetings.</p>
          <button type="button"
            className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
            Schedule a Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineZoomSection;
