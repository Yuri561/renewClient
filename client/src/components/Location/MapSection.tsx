import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { 
  UserCheck, 
  Video, 
  Users, 
  ClipboardList, 
  Activity, 
  Heart, 
  Shield, 
  Coffee, 
  Brain, 
  Calendar, 
  Phone, 
  BookOpen 
} from 'lucide-react';
import './LocationStyles.css';

const services = [
  {
    title: "In-Person Consultations",
    description: "Meet our team in a welcoming and private environment, where you can discuss your mental health needs face-to-face with our experienced professionals. Our consultations are designed to provide you with a personalized approach to mental wellness, ensuring that you feel heard and supported.",
    icon: <UserCheck size={48} className="text-blue-500" />,
  },
  {
    title: "Online Therapy Sessions",
    description: "Access our professional mental health services from the comfort of your home through secure and confidential online therapy sessions. Our online sessions are designed to provide the same level of care and support as in-person meetings.",
    icon: <Video size={48} className="text-green-500" />,
  },
  {
    title: "Group Therapy",
    description: "Join others in a supportive group setting to share experiences and find mutual support. Our group therapy sessions are facilitated by experienced counselors who create a safe and inclusive environment for everyone.",
    icon: <Users size={48} className="text-purple-500" />,
  },
  {
    title: "Workshops and Seminars",
    description: "Participate in our engaging workshops and seminars designed to promote mental wellness and provide education on various mental health topics. Led by experts in the field, these sessions offer practical tools and insights.",
    icon: <ClipboardList size={48} className="text-yellow-500" />,
  },
  {
    title: "Wellness Activities",
    description: "Engage in holistic activities such as yoga, meditation, and mindfulness exercises to support your mental and physical health. These practices help reduce stress, increase self-awareness, and cultivate a balanced lifestyle.",
    icon: <Activity size={48} className="text-red-500" />,
  },
  {
    title: "Family Counseling",
    description: "Work with our experienced family therapists to improve communication and resolve conflicts within your family. Family counseling sessions help strengthen relationships and create a supportive home environment.",
    icon: <Heart size={48} className="text-pink-500" />,
  },
  {
    title: "Substance Abuse Treatment",
    description: "Our substance abuse treatment program provides comprehensive support for individuals struggling with addiction. We offer detoxification, counseling, and aftercare planning to help you achieve and maintain sobriety.",
    icon: <Shield size={48} className="text-indigo-500" />,
  },
  {
    title: "Stress Management",
    description: "Learn effective techniques for managing stress and anxiety in your daily life. Our stress management program includes workshops, individual counseling, and practical tools to help you cope with life's challenges.",
    icon: <Coffee size={48} className="text-brown-500" />,
  },
  {
    title: "Trauma Recovery",
    description: "Receive specialized care and support to heal from past traumas. Our trauma recovery program includes therapy sessions, coping strategies, and a safe space to process your experiences.",
    icon: <Brain size={48} className="text-teal-500" />,
  },
  {
    title: "Crisis Intervention",
    description: "Get immediate support and intervention during times of crisis. Our crisis intervention team is available 24/7 to provide guidance and assistance when you need it most.",
    icon: <Phone size={48} className="text-orange-500" />,
  },
  {
    title: "Mindfulness Training",
    description: "Develop mindfulness skills to improve focus and emotional regulation. Our mindfulness training sessions teach you how to be present in the moment and reduce negative thinking patterns.",
    icon: <Calendar size={48} className="text-cyan-500" />,
  },
  {
    title: "Educational Resources",
    description: "Access a wide range of educational materials and resources on mental health topics. Our library includes books, articles, and online courses designed to expand your knowledge and understanding.",
    icon: <BookOpen size={48} className="text-lime-500" />,
  },
];

const renderServices = (services: { title: string; description: string; icon: JSX.Element }[]) => {
  return services.map((service, index) => (
    <div key={index} className="service-card p-6 bg-white rounded-lg shadow-lg flex items-start mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="flex-shrink-0 mr-4">{service.icon}</div>
      <div>
        <h4 className="text-lg font-bold text-blue-600">{service.title}</h4>
        <p className="text-gray-700">{service.description}</p>
      </div>
    </div>
  ));
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

  return (
    <div className="max-w-8xl p-5 bg-gradient-to-r from-indigo-600 to-blue-500 max-md:max-w-xl mx-auto font-[sans-serif] my-4">
      <div className="text-center ml5 max-w-2xl mx-auto">
        <h2 className="text-white text-3xl font-extrabold text-center mb-6">
        Comprehensive Mental Health Services
        </h2>
        <p className="text-white text-sm">
        Our team of experienced professionals is committed to creating a safe, welcoming, and confidential environment 
          where you can explore your thoughts and feelings. We offer both individual and group sessions, tailored to meet 
          your unique needs. From in-person consultations to online therapy sessions, our flexible options ensure that 
          you can access the support you need, when and where it suits you.
        </p>
      </div>
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderServices(services)}
      </div>
    </div>
  );
};

export default ServicesSection;
