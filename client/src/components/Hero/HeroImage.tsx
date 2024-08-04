import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
 // Ensure this CSS file contains responsive utilities

const HeroImageCarousel: React.FC = () => {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 1,
        autoplay: true,
        pagination: true,
        arrows: false,
        speed: 800,
        interval: 3000,
        pauseOnHover: true,
        width: '100%',
        gap: '1rem',
        breakpoints: {
          640: {
            perPage: 1,
            gap: '0.5rem',
          },
        },
      }}
      aria-label="Hero Carousel"
    >
      {['care.jpg', 'support.jpg', 'therapist.jpg', 'personal.jpg'].map((image, index) => (
        <SplideSlide key={index}>
          <img src={`./${image}`} alt="Carousel Slide" className="w-full object-cover"/>
          <div className="text-white bg-gradient-to-b from-black/30 to-black/60 p-4 absolute bottom-0 w-full">
            <h2 className="text-lg font-bold">{index === 0 ? "Personalized Care" : index === 1 ? "Personalized Support" : index === 2 ? "Expert Therapists" : "Flexible Scheduling"}</h2>
            <p>{index === 0 || index === 1 ? "Experience tailored mental health care designed to suit your individual needs, all from the comfort of your home." : index === 2 ? "Connect with over 100 trusted therapists who use proven strategies to help you achieve mental wellness." : "Book sessions at times that work for you, with easy rescheduling options to ensure you never miss out on care."}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HeroImageCarousel;
