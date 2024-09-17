import React from 'react';
import Zoom from '/zoom.png'

const LocationAndDescription: React.FC = () => {

  return (
    <div className="bg-gray-100 px-6 py-12 z-20" id='location'>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Map Section */}
          <div className="flex justify-center">
            <img src={Zoom}
            className='w-30 h-30 '
            />
          </div>

          {/* Description Section */}
          <div>
            <h2 className="text-4xl font-extrabold text-purple-700 mb-4">Renewing of the Mind PLLC</h2>
            <hr className="border-purple-500 mb-4" />
            <p className="text-gray-800 text-base leading-6 mb-6">
  At Renewing of the Mind PLLC, we provide telehealth services and medication management to support your mental health.
  Experience compassionate care from the comfort of your home. You can connect with us virtually through Zoom or Microsoft Teams for added convenience and flexibility.
</p>

            <ul className="list-disc text-gray-800 text-base space-y-2 pl-4">
              <li>Telehealth Consultations</li>
              <li>Medication Management Services</li>
              <li>Virtual Health Support</li>
              <li>Confidential, Compassionate Care</li>
            </ul>

            <div className="mt-8">
            <button className="text-sm text-white bg-blue-600 transform hover:scale-110 transition duration-300 ease-in-out px-4 py-2 tracking-wide mt-6 rounded">

              <a href="https://calendly.com/admin-renewingofthemindpllc/30min" className="text-white text-lg font-semibold">
                Schedule session
              </a>
              </button>
            </div>

            <hr className="border-purple-500 mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndDescription;
