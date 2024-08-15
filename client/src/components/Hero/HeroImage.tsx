import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './HeroImageCarousel.css';

const HeroSection: React.FC = () => {
  const slidesContent = [
    {
      title: "Telehealth Services",
      description: "Experience the convenience and accessibility of telehealth. Connect with our experienced professionals for personalized mental health care from the comfort of your home.",
    },
    {
      title: "Comprehensive Telemedicine",
      description: "Receive expert psychiatric care through our secure telemedicine platform. Whether it's diagnosis, treatment, or ongoing support, we've got you covered.",
    },
    {
      title: "Virtual Behavioral Health",
      description: "Engage in virtual therapy sessions tailored to your unique needs. Our therapists provide support that adapts to your lifestyle and mental health goals.",
    },
    {
      title: "Virtual Psychiatric Services",
      description: "Our virtual psychiatric services offer specialized care for a variety of mental health conditions. Benefit from treatment plans designed just for you.",
    },
    {
      title: "Crisis Intervention",
      description: "In a mental health crisis? Our 24/7 virtual crisis intervention services provide immediate support when you need it most.",
    },
  ];

  const slideVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative hero-section-container mx-auto max-w-full overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900">
      <div className="overlay"></div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        className="relative mySwiper rounded"
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="swiper-slide-content"
              variants={slideVariant}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-2xl text-white leading-relaxed drop-shadow-lg">
                {slide.description}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Elements for Added Effect */}
      <motion.div
        className="floating-elements"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.5 } }}
      >
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
