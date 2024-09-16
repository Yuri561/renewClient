import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-14 px-6 font-sans tracking-wide">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
        <p className="text-lg leading-relaxed mb-8">
          At Renewing Of the Mind PLLC, we are committed to offering exceptional mental health care and support. Whether you’re looking for virtual consultations, medication management, or in-person viewing services, we are here to assist you every step of the way. 
          <br />
          We understand the importance of timely, accessible, and empathetic care. Please don't hesitate to reach out to us for any inquiries or appointments. We strive to respond to all messages as quickly as possible, ensuring you get the support you need in a timely manner.
          <br />
          Our knowledgeable and compassionate team is available to help you through the process of receiving the care you deserve, answering any questions about our services, or scheduling your first consultation.
        </p>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">Get In Touch</h3>
          <p className="text-md leading-relaxed">
            If you need help or want more information, feel free to contact us:
          </p>
          <p className="text-lg font-semibold mt-3">Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (919) 446-4999</a></p>
          <p className="text-lg">Email: <a href="mailto:info@renewingofthemind.com" className="text-blue-500">info@renewingofthemind.com</a></p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">Visit Us</h3>
          <p className="text-md leading-relaxed">
            While we primarily offer telehealth services, we also offer in-person consultations. Our office is located in a peaceful and private setting, designed to make you feel comfortable and welcome.
          </p>
          <p className="text-lg font-semibold mt-3">Address: 5000 Centregreen Way, Cary, USA</p>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-3">Office Hours</h3>
          <p className="text-md leading-relaxed">
            We are available Monday through Friday, from 9 AM to 5 PM. Weekend and after-hours appointments can be scheduled by request to accommodate your needs. Please contact us to arrange a convenient time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
