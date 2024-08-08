import React from 'react';
import MyStory from './MyStory';
const AboutSection: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 px-6 sm:py-20 py-10 font-sans text-white">
            <div className="max-w-screen-xl mx-auto text-center">
                <h1 className="text-5xl sm:text-3xl font-extrabold leading-tight mb-6">
                    Welcome to Our Premier Mental Health Services
                </h1>
                <p className="text-lg sm:text-base mb-12">
                    Discover unparalleled mental health support with our expertly tailored services designed to empower your journey towards well-being. Our commitment to providing comprehensive and compassionate care sets us apart.
                </p>
                <button
                    type="button"
                    className="bg-blue-600 text-white text-lg tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out hover:bg-blue-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => alert('Thank you for choosing to explore our services!')}
                >
                    Get Started
                </button>
                <p className="mt-8 text-lg sm:text-base">
                    From personalized therapy sessions to cutting-edge treatment options, our dedicated professionals are here to support every step of your mental health journey. Join us and experience the difference that compassionate, expert care can make.
                </p>
            </div>
            <MyStory />
        </div>
    );
};

export default AboutSection;
