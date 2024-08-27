import './HeroImageCarousel.css';

const HeroSection: React.FC = () => {
  return (
    <div className="font-[sans-serif] w-full bg-slate-300 py-8 px-6">
      <div className="max-w-4xl mx-auto text-center backdrop-blur-lg bg-white bg-opacity-30 border border-white border-opacity-10 rounded-xl shadow-md py-12 px-6">
        <h2 className="md:text-5xl text-3xl font-bold md:leading-[55px] text-white">
          Renewing of the Mind PLLC
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-gray-900">
          Discover the benefits of telehealth with secure, convenient, and accessible care from the comfort of your home. Connect with us to begin your journey towards better health and well-being.
        </p>
      </div>

      <div className="xl:max-w-5xl max-w-3xl mx-auto mt-12">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg border border-white border-opacity-10">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Convenient Access</h3>
            <p className="text-sm text-gray-900">
              Access professional healthcare services anytime, anywhere with our easy-to-use telehealth platform.
            </p>
            <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 tracking-wide mt-6 rounded">
              Learn More
            </button>
          </div>
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg border border-white border-opacity-10">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Secure and Private</h3>
            <p className="text-sm text-gray-600">
              Our platform ensures all consultations are conducted with the utmost privacy and security, protecting your personal information.
            </p>
            <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 tracking-wide mt-6 rounded">
              Learn More
            </button>
          </div>
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg border border-white border-opacity-10">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Flexible Scheduling</h3>
            <p className="text-sm text-gray-600">
              Enjoy flexible scheduling options that fit your lifestyle, ensuring you get the care you need when you need it.
            </p>
            <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 tracking-wide mt-6 rounded">
              Learn More
            </button>
          </div>
          <div className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg border border-white border-opacity-10">
            <h3 className="text-gray-800 text-xl font-bold mb-4">Quality Care</h3>
            <p className="text-sm text-gray-600">
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
