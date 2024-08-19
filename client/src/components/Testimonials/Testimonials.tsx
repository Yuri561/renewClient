import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What services does Renewing Of The Mind PLLC offer?",
    answer: "We offer a wide range of mental health services including personalized care plans, virtual therapy sessions, crisis intervention, and 24/7 support.",
  },
  {
    question: "How do I book a telehealth appointment?",
    answer: "Booking a telehealth appointment is easy. You can use our online booking system to schedule a session at a time that is convenient for you.",
  },
  {
    question: "Are my sessions confidential?",
    answer: "Yes, all of our sessions are conducted in a secure and confidential manner. Your privacy is our top priority.",
  },
  {
    question: "What should I expect during my first session?",
    answer: "During your first session, we will assess your needs and discuss your mental health goals. This helps us create a personalized care plan tailored to you.",
  },

];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-gray-300 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-700 focus:outline-none"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mt-2 text-gray-600">{answer}</p>
      </motion.div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="px-4 py-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Testimonials;
