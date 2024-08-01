import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Testimonials from './Testimonials';

const MainSection = () => {
  useEffect(() => {
    const textWrapper = document.querySelector('.ml14 .letters');

    if (textWrapper && textWrapper.textContent) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    anime.timeline({ loop: true })
      .add({
        targets: '.ml14 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeInOutExpo",
        duration: 900
      }).add({
        targets: '.ml14 .letter',
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: '-=600',
        delay: (i:number) => 150 + 25 * i
      }).add({
        targets: '.ml14',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }, []);

  return (
    <div className="my-4 font-[sans-serif]">
      <div className="max-w-8xl max-md:max-w-xl mx-auto">
        <div className="bg-purple-800 grid md:grid-cols-2 items-center p-9 lg:gap-32 md:gap-16 gap-9">
          <Testimonials />
          <div className="max-md:-order-1">
            <div className="ml14">
              <span className="text-wrapper">
                <span className="letters">Discover Your Inner Strength</span>
                <span className="line"></span>
              </span>
            </div>
            <h2 className="text-white text-4xl font-extrabold mt-4">Benefits of Joining Our Community</h2>
            <p className="text-sm text-white mt-4 leading-relaxed">
  Welcome to our mental health platform, a safe and supportive space where you can explore your thoughts and feelings with the guidance of experienced professionals. Our team, led by a highly skilled psychiatric nurse practitioner, is dedicated to providing you with personalized care and support. 

  Through our platform, you have access to a range of mental health services designed to help you understand yourself better and improve your overall well-being. Whether you are struggling with anxiety, depression, stress, or any other mental health issue, our compassionate providers are here to help.

  We offer convenient and confidential online consultations via Zoom, allowing you to receive professional care from the comfort of your own home. Our goal is to make mental health support accessible to everyone, regardless of location. 

  Our services include individual therapy sessions, group therapy, and workshops on various topics such as stress management, mindfulness, and coping strategies. We believe in a holistic approach to mental health, addressing not only your symptoms but also the underlying causes and contributing factors.

  Join our community and take the first step towards a healthier, happier you. Explore our resources, connect with our providers, and start your journey to mental well-being today. We are here to support you every step of the way.
</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
