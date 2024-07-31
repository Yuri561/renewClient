import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TestimonialProps {
  name: string;
  text: string;
  image: string;
  highlight?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, text, image, highlight }) => {
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={testimonialRef}
      className={`flex sm:items-center max-sm:flex-col-reverse  rounded-lg ${highlight ? 'shadow-lg bg-white' : 'bg-blue-50'} testimonial`}
    >
      <div className="mr-3">
        <h4 className="text-gray-800 text-base font-bold">{name}</h4>
        <p className="text-sm text-gray-500 mt-2">{text}</p>
      </div>
      <img src={image} className="w-16 h-16 rounded-full max-sm:mb-2" alt={name} />
    </div>
  );
};

export default Testimonial;
