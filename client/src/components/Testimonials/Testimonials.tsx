import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialsStyles.css';
const testimonialsData = [
  {
    quote: "Renewing Of The Mind PLLC has truly transformed my life. The personalized care and attention to detail are unmatched.",
    author: "John Doe",
    role: "Patient",
  },
  {
    quote: "The virtual therapy sessions are convenient and have made a significant difference in my mental health journey.",
    author: "Jane Smith",
    role: "Patient",
  },
  {
    quote: "I highly recommend their services. The support and resources provided are top-notch.",
    author: "Alice Johnson",
    role: "Patient",
  },
  {
    quote: "The team at Renewing Of The Mind PLLC is incredible. They truly care about their patients and go above and beyond.",
    author: "Michael Brown",
    role: "Patient",
  },
  {
    quote: "I was hesitant about virtual therapy, but this experience has exceeded all my expectations.",
    author: "Emily Davis",
    role: "Patient",
  },
  {
    quote: "Their approach to mental health is both compassionate and effective. I feel better than I have in years.",
    author: "Chris Wilson",
    role: "Patient",
  },
  {
    quote: "Renewing Of The Mind PLLC offers a level of support and understanding that I haven't found anywhere else.",
    author: "Laura White",
    role: "Patient",
  },
  {
    quote: "The convenience of telehealth, combined with their expertise, makes this service invaluable.",
    author: "David Johnson",
    role: "Patient",
  },
  {
    quote: "I've been to many therapists, but the care I've received here is unparalleled. Highly recommend!",
    author: "Sarah Lee",
    role: "Patient",
  },
  {
    quote: "The resources and tools provided have helped me manage my mental health better than I ever could on my own.",
    author: "James Miller",
    role: "Patient",
  },
  {
    quote: "Their services have been a lifeline for me during a very difficult time in my life.",
    author: "Anna Garcia",
    role: "Patient",
  },
  {
    quote: "I feel heard and understood like never before. The staff is amazing.",
    author: "Mark Anderson",
    role: "Patient",
  },
  {
    quote: "The ease of access to professional mental health care through their platform is incredible.",
    author: "Sophia Martinez",
    role: "Patient",
  },
  {
    quote: "From the first session, I felt a connection and a sense of hope. They've made a big difference in my life.",
    author: "Daniel Thomas",
    role: "Patient",
  },
  {
    quote: "The holistic approach they use addresses every aspect of mental wellness. I'm grateful for their support.",
    author: "Olivia Taylor",
    role: "Patient",
  },
  {
    quote: "Their commitment to mental health is evident in everything they do. I've seen real results.",
    author: "Matthew Lewis",
    role: "Patient",
  },
  {
    quote: "They've given me the tools to manage my anxiety in ways I never thought possible.",
    author: "Samantha Harris",
    role: "Patient",
  },
  {
    quote: "The telehealth platform is user-friendly and makes scheduling easy. I can't imagine going back to traditional therapy.",
    author: "Brian Walker",
    role: "Patient",
  },
  {
    quote: "I was struggling with depression, but their team has helped me find a way forward. I'm eternally grateful.",
    author: "Nicole Young",
    role: "Patient",
  },
  {
    quote: "Renewing Of The Mind PLLC is a game-changer in mental health care. Their service is unmatched.",
    author: "Kevin King",
    role: "Patient",
  },
];


const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <div className="testimonial-container">
      <motion.div
        className="testimonial-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="testimonial-card"
          >
            <p className="testimonial-quote">"{testimonialsData[current].quote}"</p>
            <p className="testimonial-author">- {testimonialsData[current].author}</p>
            <p className="testimonial-role">{testimonialsData[current].role}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="testimonial-navigation">
        <button onClick={prevTestimonial} className="nav-button">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextTestimonial} className="nav-button">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;