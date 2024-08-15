import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import anime from 'animejs/lib/anime.es.js';
import { 
  ShieldCheck, 
  Laptop, 
  Users, 
  ClipboardList, 
  Brain, 
  Puzzle,
  LifeBuoy, 
  HeartPulse, 
  Headphones, 
  CalendarCheck, 
  MessageSquare, 
  Book 
} from 'lucide-react';
import './LocationStyles.css';

const services = [
  {
    title: "Telepsychiatry Consultations",
    description: "Connect with licensed psychiatrists through secure video consultations. Our telepsychiatry services provide you with personalized mental health care, including diagnosis, medication management, and therapy, all from the comfort of your home.",
    icon: <Laptop size={48} className="text-blue-500" />,
  },
  {
    title: "Virtual Behavioral Health Therapy",
    description: "Receive expert counseling and therapy sessions tailored to your behavioral health needs. Our virtual therapy services offer a safe and confidential space for you to discuss your concerns and work towards better mental health.",
    icon: <ShieldCheck size={48} className="text-green-500" />,
  },
  {
    title: "Online Group Therapy Sessions",
    description: "Join virtual group therapy sessions facilitated by experienced mental health professionals. Connect with others facing similar challenges in a supportive online environment that promotes healing and growth.",
    icon: <Users size={48} className="text-purple-500" />,
  },
  {
    title: "Virtual Mental Health Assessments",
    description: "Get comprehensive mental health assessments conducted virtually by our team of experts. These assessments are designed to identify your needs and develop a personalized care plan for your mental well-being.",
    icon: <ClipboardList size={48} className="text-yellow-500" />,
  },
  {
    title: "Psychiatric Medication Management",
    description: "Our psychiatrists provide ongoing medication management through virtual consultations. This service ensures that your treatment plan is effective and adjusted as needed for optimal mental health outcomes.",
    icon: <Brain size={48} className="text-red-500" />,
  },
  {
    title: "Virtual Family Therapy",
    description: "Engage in virtual family therapy sessions to address and resolve conflicts, improve communication, and strengthen relationships within your family. Our therapists provide expert guidance to support your family's mental health.",
    icon: <Puzzle size={48} className="text-pink-500" />,
  },
  {
    title: "Crisis Intervention via Telehealth",
    description: "Access immediate support during mental health crises through our telehealth services. Our crisis intervention team is available 24/7 to provide urgent care and guidance when you need it most.",
    icon: <LifeBuoy size={48} className="text-indigo-500" />,
  },
  {
    title: "Stress and Anxiety Management",
    description: "Participate in virtual sessions focused on managing stress and anxiety. Our mental health professionals will work with you to develop strategies and coping mechanisms that improve your overall well-being.",
    icon: <HeartPulse size={48} className="text-red-500" />,
  },
  {
    title: "Trauma-Informed Virtual Care",
    description: "Receive specialized virtual care to support your recovery from trauma. Our trauma-informed approach includes therapy and coping strategies designed to help you heal and regain control of your life.",
    icon: <Headphones size={48} className="text-teal-500" />,
  },
  {
    title: "Telehealth Follow-ups",
    description: "Schedule regular telehealth follow-up appointments to monitor your progress and adjust your treatment plan as needed. These sessions ensure continuity of care and help you stay on track with your mental health goals.",
    icon: <CalendarCheck size={48} className="text-orange-500" />,
  },
  {
    title: "Psychiatric Consultation Messaging",
    description: "Communicate directly with your psychiatrist through our secure messaging platform. This service allows you to ask questions, request prescription refills, and receive timely advice between appointments.",
    icon: <MessageSquare size={48} className="text-cyan-500" />,
  },
  {
    title: "Educational Mental Health Resources",
    description: "Access a library of educational materials, including articles, videos, and e-books, designed to help you better understand your mental health and treatment options.",
    icon: <Book size={48} className="text-lime-500" />,
  },
];

const serviceVariants = {
  hidden: { opacity: 0, translateY: 50 },
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ServicesSection: React.FC = () => {
  useEffect(() => {
    anime({
      targets: '.service-card',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 200,
      easing: 'easeOutExpo'
    });
  }, []);

  const renderServices = (services: { title: string; description: string; icon: JSX.Element }[]) => {
    return services.map((service, index) => (
      <InView key={index} triggerOnce={true} threshold={0.5}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            variants={serviceVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="service-card p-6 bg-white rounded-lg shadow-lg flex items-start mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex-shrink-0 mr-4">{service.icon}</div>
            <div>
              <h4 className="text-lg font-bold text-blue-600">{service.title}</h4>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </motion.div>
        )}
      </InView>
    ));
  };

  return (
    <div className="max-w-8xl p-5 bg-gradient-to-r from-indigo-600 to-blue-500 max-md:max-w-xl mx-auto font-[sans-serif] my-4">
      <div className="text-center ml5 max-w-2xl mx-auto">
        <h2 className="text-white text-3xl font-extrabold text-center mb-6">
          Comprehensive Virtual Mental Health Services
        </h2>
        <p className="text-white text-sm">
          Our team of experienced professionals is committed to creating a safe, welcoming, and confidential virtual environment 
          where you can explore your thoughts and feelings. We offer a range of telehealth services tailored to meet your unique needs, 
          ensuring that you can access the support you need, when and where it suits you.
        </p>
      </div>
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderServices(services)}
      </div>
    </div>
  );
};

export default ServicesSection;
