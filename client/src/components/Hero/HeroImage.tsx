import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import careImage from '../../../public/care.jpg';
import supportImage from '../../../public/support.jpg';
import therapistImage from '../../../public/therapist.jpg';
import personalImage from '../../../public/personal.jpg';

const HeroImageCarousel: React.FC = () => {
  const images = [careImage, supportImage, therapistImage, personalImage];

  // Define motion variants
  const slideVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
  };

  return (
    <div className="carousel-container mx-auto max-w-8xl overflow-hidden">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        className="mySwiper rounded p-5"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="swiper-slide-bg p-2"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '80vh'
              }}
              variants={slideVariant}
              initial="hidden"
              animate="visible"
            />
            <motion.div
              className="text-white p-6 absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black"
              variants={textVariant}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold">
                {["Personalized Care", "Personalized Support", "Expert Therapists", "Flexible Scheduling"][index]}
              </h2>
              <p>
                {["Experience tailored mental health care designed to suit your individual needs, all from the comfort of your home.",
                  "Connect with over 100 trusted therapists who use proven strategies to help you achieve mental wellness.",
                  "Book sessions at times that work for you, with easy rescheduling options to ensure you never miss out on care."][index]}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroImageCarousel;
