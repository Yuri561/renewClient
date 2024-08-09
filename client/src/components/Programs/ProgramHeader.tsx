import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const ProgramHeader: React.FC = () => {


    const greetUser = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning!";
        if (hour < 18) return "Good Afternoon!";
        return "Good Evening!";
    };

    return (
        <div className="p-8 mt-[55px] bg-[#004d66] px-6  py-10 font-[sans-serif]">
            <div className="max-w-screen-xl  mx-auto text-center text-3xl text-white">
                <motion.h1
                    className="text-5xl sm:text-3xl font-extrabold leading-tight mb-6"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {greetUser()} How are you feeling today?
                </motion.h1>
                <p className="text-lg mb-12">
                    Choose from a variety of programs we offer.
                </p>
                <motion.button
                    type="button"
                    className="bg-blue-600 text-white text-lg tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </div>
        </div>
    );
}

export default ProgramHeader;
