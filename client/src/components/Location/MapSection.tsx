import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Ensure you have imported the Google Font in your main CSS or HTML:
// @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

const LocationAndDescription: React.FC = () => {
  const position: [number, number] = [35.8117, -78.7846]; // Coordinates for Cary, NC

  return (
    <div className="bg-gray-100 px-6 py-12 z-20" id='location'>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Map Section */}
          <div className="flex justify-center">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="rounded-md w-full h-80">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Renewing of the Mind PLLC<br /> 5000 CentreGreen Way Suite 500, Cary, NC, 27513
                </Popup>
              </Marker>
            </MapContainer>
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
