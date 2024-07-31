import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
      className={`testimonial-card ${highlight ? 'highlight' : ''}`}
    >
      <div className="testimonial-content">
        <h4 className="testimonial-name">{name}</h4>
        <p className="testimonial-text">{text}</p>
      </div>
      <img src={image} className="testimonial-image" alt={name} />
    </div>
  );
};

export default Testimonial;
