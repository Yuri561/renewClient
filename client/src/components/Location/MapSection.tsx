import React from 'react';

const LocationAndDescription: React.FC = () => {

  return (
    <div className="bg-gray-100 px-6 py-12 z-20" id='location'>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Map Section */}
          <div className="flex justify-center">
            <iframe
              width="100%"
              height="320"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-78.8500%2C35.7700%2C-78.7000%2C35.8500&layer=mapnik"
              allowFullScreen
            />
          </div>

          {/* Description Section */}
          <div>
            <h2 className="text-4xl font-extrabold text-purple-700 mb-4">Renewing of the Mind PLLC</h2>
            <hr className="border-purple-500 mb-4" />
            <p className="text-gray-800 text-base leading-6 mb-6">
              At Renewing of the Mind PLLC, we provide telehealth services and medication management to support your mental health.
              Experience compassionate care from the comfort of your home.
            </p>

            <ul className="list-disc text-gray-800 text-base space-y-2 pl-4">
              <li>Telehealth Consultations</li>
              <li>Medication Management Services</li>
              <li>Virtual Health Support</li>
              <li>Confidential, Compassionate Care</li>
            </ul>

            <div className="mt-8">
              <a href="https://calendly.com/admin-renewingofthemindpllc/30min" className="text-purple-600 text-lg font-semibold hover:underline">
                Get Started
              </a>
            </div>

            <hr className="border-purple-500 mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndDescription;
