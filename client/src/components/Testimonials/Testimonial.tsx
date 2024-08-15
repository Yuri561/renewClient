import  {useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialProps {
  name: string;
  text: string;
  image: string;
  highlight?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, text, image, highlight }: TestimonialProps) => {
  const testimonialRef = useRef<HTMLDivElement>(null);


  return (
    <div
      ref={testimonialRef}
      className={`testimonial-card ${highlight ? 'highlight' : ''} flex flex-col items-center text-center p-4 shadow-lg rounded-lg m-4`}
    >
      <img src={image} alt={name} className="w-24  rounded-full mb-4 sm:w-5 h-5"/>
      <div className="testimonial-content">
        <h4 className="testimonial-name text-lg font-bold">{name}</h4>
        <p className="testimonial-text text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
