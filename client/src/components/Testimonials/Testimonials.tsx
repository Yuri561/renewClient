import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './TestimonialsStyles.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import './TestimonialsStyles.css';

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
    name: 'Mark Adair',
    text: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.',
    image: 'https://readymadeui.com/profile_3.webp'
  },
  {
    name: 'Mark Adair',
    text: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.',
    image: 'https://readymadeui.com/profile_3.webp'
  },
  {
    name: 'Mark Adair',
    text: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.',
    image: 'https://readymadeui.com/profile_3.webp'
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
    <div className="testimonials-section">
      <div className="testimonials-container">
        <Splide
          options={{
            type: 'loop',
            direction: 'ttb',
            height: '600px',
            perPage: 4,
            perMove: 1,
            focus: 'center',
            wheel: true,
            waitForTransition: true,
            pagination: true,
            arrows: false,
            gap: '1rem',
            autoScroll: {
              speed: 1,
            },
            padding: {
              top: '2rem',
              bottom: '2rem'
            },
            breakpoints: {
              768: {
                padding: {
                  top: '1rem',
                  bottom: '1rem'
                }
              },
              360: {
                padding: {
                  top: '0.5rem',
                  bottom: '0.5rem'
                }
              }
            }
          }}
          extensions={{ AutoScroll }}
          className="splide max-w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SplideSlide>
              <div className={`testimonial-card ${index ? 'highlight' : ''}`}>
                <div className="testimonial-content">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
                <img src={testimonial.image} className="testimonial-image" alt={testimonial.name} />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
