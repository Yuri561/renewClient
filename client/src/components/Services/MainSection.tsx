import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopMedical, faPills, faUserMd } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faLaptopMedical,
    title: "Telehealth",
    description:
      "Virtual care from the comfort of your home. Our licensed professionals are available for consultations to support your mental health.",
    color: "text-blue-500",
  },
  {
    icon: faPills,
    title: "Medication Management",
    description:
      "Personalized medication plans to ensure you receive the right treatment and dosage with ongoing support and guidance.",
    color: "text-green-500",
  },
  {
    icon: faUserMd,
    title: "In-Person Sessions",
    description:
      "Face-to-face consultations for medication reviews, mental health assessments, and personalized care in a safe environment.",
    color: "text-purple-500",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services-section py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="service-item bg-white p-6 shadow-lg rounded-lg transition transform hover:translate-y-1 hover:shadow-2xl">
              <div className={`icon mb-4 text-4xl ${service.color}`}>
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
