import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './styles.css';

// Fix the default icon issue with React-Leaflet and Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapSection: React.FC = () => {
  return (
    <div className="max-w-8xl p-3 bg-slate-900 max-md:max-w-xl mx-auto font-[sans-serif] my-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-white text-3xl font-extrabold text-center mb-6">Where Can You Find Us</h2>
        <p className="text-white text-sm">Discover our location and easily find us using the map below. We are dedicated to providing a supportive environment for your mental health journey.</p>
      </div>
      <div className="mt-16 grid md:grid-cols-2 items-center gap-16">
        <div style={{ height: '400px', width: '100%' }} className="rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                Our Location
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Our Physical Address</h3>
          <p className="text-white text-sm">Visit us at our office for in-person consultations. Our team is here to provide a welcoming and comfortable environment to discuss your mental health needs.</p>
          <button type="button"
            className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
