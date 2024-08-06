
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './TestimonialsStyles.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import './TestimonialsStyles.css';

const testimonials = [
  {
    name: 'James R.',
    text: 'Remote counseling has been a lifesaver for me. The ability to connect with my therapist from the comfort of my home has made it easier to manage my anxiety and stay committed to my sessions. The guidance and support I’ve received have been invaluable.',
    image: 'https://readymadeui.com/profile_2.webp'
  },
  {
    name: 'Michael T.',
    text: 'I was initially hesitant about online therapy, but it has exceeded my expectations. My therapist is incredibly supportive and understanding. The convenience of scheduling sessions that fit into my busy life has made a significant difference in my mental well-being.',
    image: 'https://readymadeui.com/profile_3.webp'
  },
  {
    name: 'Sophia L.',
    text: 'The online platform is user-friendly, and I appreciate the privacy it offers. My counselor has helped me navigate through depression and develop coping strategies that have improved my daily life. I feel more empowered and hopeful about the future.',
    image: 'https://readymadeui.com/profile_5.webp'
  },
  {
    name: 'David B.',
    text: 'I love the flexibility that online counseling provides. It’s easy to join a session from anywhere, and my therapist is always attentive and encouraging. I’ve gained new insights into my challenges and feel more equipped to handle them.',
    image: 'https://readymadeui.com/profile_6.webp'
  },
  {
    name: 'Rachel K.',
    text: 'Switching to remote counseling has been a positive change for me. The sessions are just as effective as in-person meetings, and the convenience cannot be overstated. My mental health has improved significantly since I started.',
    image: 'https://readymadeui.com/profile_5.webp'
  },
  {
    name: 'Daniel S.',
    text: 'The support I receive from my online counselor is amazing. They truly understand my struggles with stress and have helped me develop practical strategies to manage it. I appreciate how accessible and responsive they are.',
    image: 'https://readymadeui.com/profile_3.webp'
  },
  {
    name: 'Olivia M.',
    text: 'Remote counseling has allowed me to prioritize my mental health without the stress of commuting. The sessions are convenient and personalized, and I feel heard and supported every step of the way. I highly recommend this service to anyone seeking help.',
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
            height: '100%',
            perPage: 3,
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
                perPage: 1,
                padding: {
                  top: '1rem',
                  bottom: '1rem'
                }
              },
              360: {
                perPage: 1,

                padding: {
                  top: '0.25rem',
                  bottom: '0.25rem'
                },
                width: '100%',
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
                <img src={testimonial.image} className={`testimonial-image sm:hidden`} alt={testimonial.name} />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
