import React from 'react';
import Testimonial from './Testimonial';
import './styles.css'; // Assuming you have the CSS in a file named styles.css

const testimonials = [
  {
    name: 'John Doe',
    text: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.',
    image: 'https://readymadeui.com/profile_2.webp'
  },
  {
    name: 'Mark Adair',
    text: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.',
    image: 'https://readymadeui.com/profile_3.webp'
  },
  {
    name: 'Simon Konecki',
    text: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.',
    image: 'https://readymadeui.com/profile_4.webp'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="space-y-6 testimonials-container ">
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          text={testimonial.text}
          image={testimonial.image}
          highlight={index === 1} // Highlight the middle testimonial
        />
      ))}
    </div>
  );
};

export default Testimonials;
