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

const listItems = [
  "Visit us at our office for in-person consultations. Our team is here to provide a welcoming and comfortable environment to discuss your mental health needs.",
  "At our facility, we specialize in treating a variety of mental health issues, including depression, anxiety, and substance abuse. Our comprehensive programs are designed to support individuals at every stage of their mental health journey.",
  "Depression is a serious mental health condition that affects millions of people worldwide. It can lead to severe symptoms such as persistent sadness, loss of interest in activities, and difficulty functioning in daily life. Our depression treatment program includes individual therapy, group therapy, and medication management to help clients manage their symptoms and improve their quality of life.",
  "Substance abuse is another critical area we address. Our substance abuse program provides a safe and supportive environment for individuals struggling with addiction. We offer a range of services, including detoxification, counseling, and aftercare planning, to ensure clients have the tools they need to achieve and maintain sobriety.",
  "In addition to our depression and substance abuse programs, we offer specialized services for anxiety, trauma, and other mental health disorders. Our team of experienced therapists and counselors is dedicated to providing personalized care to meet the unique needs of each client.",
  "We believe in a holistic approach to mental health treatment, which is why we also offer complementary therapies such as yoga, mindfulness, and art therapy. These therapies can help clients develop healthy coping mechanisms and improve their overall well-being."
];

const renderListItems = (items: string[]) => {
  return items.map((item, index) => (
    <li key={index} className="text-white text-sm mt-4 flex items-start">
      <div className="bg-blue-600 text-white rounded-full w-10 h-10 p-5 flex items-center justify-center mr-4">{index + 1}</div>
      <span>{item}</span>
    </li>
  ));
};

const MapSection: React.FC = () => {
  return (
    <div className="max-w-8xl p-5 bg-slate-900 max-md:max-w-xl mx-auto font-[sans-serif] my-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-white text-3xl font-extrabold text-center mb-6">Where Can You Find Us</h2>
        <p className="text-white text-sm">Discover our location and easily find us using the map below. We are dedicated to providing a supportive environment for your mental health journey.</p>
      </div>
      <div className="mt-16 grid md:grid-cols-2 items-center gap-16">
        <div style={{ height: '400px', width: '100%' }} className="rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)] z-10">
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
          <ol className="list-decimal pl-5">
            {renderListItems(listItems)}
          </ol>
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
