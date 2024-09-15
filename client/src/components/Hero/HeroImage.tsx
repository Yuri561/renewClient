import './HeroImageCarousel.css';

const HeroSection: React.FC = () => {
  return (
    <div className="font-[Dancing Script]  w-full mt-10 py-8 px-6">
      <div className="max-w-9xl   mx-auto text-center  bg-white border border-white border-opacity-10 rounded-xl shadow-md py-12 px-6 relative z-10">
        <h2 className="md:text-5xl text-3xl font-bold md:leading-[55px] text-[#000000]">
          Renewing of the Mind PLLC
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-gray-900">
          Discover the benefits of telehealth with secure, convenient, and accessible care from the comfort of your home. Connect with us to begin your journey towards better health and well-being.
        </p>
      </div>

      <div className="xl:max-w-9xl max-w-9xl mx-auto mt-12">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white   rounded-lg shadow-lg border border-white border-opacity-10">
            <h2 className="text-gray-900 text-xl font-bold mb-4">Convenient Access</h2>
            <p className="text-sm text-gray-900">
              Access professional healthcare services anytime, anywhere with our easy-to-use telehealth platform.
            </p>
            <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 tracking-wide mt-6 rounded">
              Learn More
            </button>
          </div>
          <div className="p-6 bg-white   rounded-lg shadow-lg border border-white border-opacity-10">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Secure and Private</h3>
            <p className="text-sm text-gray-900">
              Our platform ensures all consultations are conducted with the utmost privacy and security, protecting your personal information.
            </p>
            <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 tracking-wide mt-6 rounded">
              Learn More
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg border border-white border-opacity-10">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Flexible Scheduling</h3>
            <p className="text-sm text-gray-900">
              Enjoy flexible scheduling options that fit your lifestyle, ensuring you get the care you need when you need it.
            </p>
            <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 tracking-wide mt-6 rounded">
              Learn More
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg border border-white border-opacity-10">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Quality Care</h3>
            <p className="text-sm text-gray-900">
              Experience high-quality healthcare services through our advanced telehealth solutions, designed to meet your needs.
            </p>
            <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 tracking-wide mt-6 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
