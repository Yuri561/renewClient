import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-white sm:px-6 p-4 font-[sans-serif]">
      <div className="max-w-2xl mx-auto">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-500 text-sm mt-4">
            At Renewing of the Mind PLLC, we offer key services to support your mental well-being and health, all provided with the highest level of care and confidentiality.
          </p>
        </div>
        <hr className="my-10" />
        <div className="grid gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Telehealth Consultations</h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Access virtual consultations with healthcare professionals from the comfort of your home, providing the care you need remotely.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Medication Management Services</h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Our medication management ensures your treatment is carefully monitored and adjusted for optimal results.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Virtual Health Support</h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Receive comprehensive virtual support tailored to your individual health needs, ensuring consistent and compassionate care.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Confidential, Compassionate Care</h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                We prioritize confidentiality and empathy, ensuring a safe space for you to receive the care you deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
