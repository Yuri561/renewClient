import React from 'react';
import { Card, Carousel, Button } from 'flowbite-react';
import { UserCheck, Users, Heart, Activity, Shield, Smile, BookOpen, LifeBuoy, Globe } from 'lucide-react';
import Group from '../../../../public/group.jpg';
import Stress from '../../../../public/stress.jpg';
import Therapy from '../../../../public/therapy.png';
import Meditation from '../../../../public/meditation.jpg';
import Nature from '../../../../public/nature.jpg';
import Help from '../../../../public/help.jpg';

const AbuseComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 p-6 sm:p-12 rounded-lg shadow-md max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Abuse Treatment Program</h2>
            <p className="text-lg mb-12 text-center text-gray-600 max-w-2xl mx-auto">
                Our abuse treatment program offers a compassionate and comprehensive approach to healing for individuals who have experienced physical, emotional, or psychological abuse. 
                We are committed to providing a supportive environment that empowers you to overcome past traumas and build a positive future. Our multi-faceted program includes personalized therapy, 
                group support, and mindfulness practices designed to address the unique needs of each participant.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Therapy} alt="Therapy Session" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <UserCheck className="text-blue-500 mr-2" size={24} />
                            <h3 className="font-bold text-xl text-white">Personalized Therapy</h3>
                        </div>
                        <p className="text-white">
                            Engage in one-on-one therapy sessions with licensed therapists who specialize in trauma recovery. Our personalized approach ensures that therapy is tailored to meet your specific 
                            needs and challenges. Through various therapeutic techniques, including Cognitive Behavioral Therapy (CBT) and trauma-focused therapy, we help you process emotions, develop coping skills, 
                            and foster resilience.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Trauma-informed care to ensure sensitivity and safety.</li>
                            <li>Flexible session scheduling to accommodate your needs.</li>
                            <li>Focus on building self-esteem and empowerment.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Group} alt="Group Support" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Users className="text-green-500 mr-2" size={24} />
                            <h3 className="font-bold text-xl text-white">Group Support</h3>
                        </div>
                        <p className="text-white">
                            Participate in group therapy sessions that provide a supportive and empathetic community. Group support offers a platform for sharing experiences, gaining insights, and learning from 
                            others who have faced similar challenges. Our group facilitators create a safe space where every voice is heard and valued.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Weekly sessions that build trust and camaraderie.</li>
                            <li>Opportunities to develop social skills and confidence.</li>
                            <li>Activities that promote healing and connection.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Stress} alt="Mindfulness Practices" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Activity className="text-purple-500 mr-2" size={24} />
                            <h3 className="font-bold text-xl text-white">Mindfulness Practices</h3>
                        </div>
                        <p className="text-white">
                            Integrate mindfulness and relaxation techniques into your daily routine to manage stress and anxiety. Our mindfulness sessions teach you how to stay present, cultivate inner peace, 
                            and enhance self-awareness. Whether through guided meditation, yoga, or breathing exercises, these practices help you achieve balance and tranquility.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Guided meditation sessions to promote relaxation.</li>
                            <li>Yoga classes focused on stress relief and flexibility.</li>
                            <li>Mindfulness workshops to develop lasting skills.</li>
                        </ul>
                    </div>
                </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Our Commitment to Your Healing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-start">
                        <Shield className="text-red-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Safety and Security</h4>
                            <p className="text-gray-600">
                                We prioritize your safety and ensure our facilities provide a secure, confidential setting for your healing journey. Our dedicated team maintains a nurturing environment that fosters trust and growth.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Heart className="text-pink-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Compassionate Care</h4>
                            <p className="text-gray-600">
                                Our team offers compassionate care, supporting you with empathy and understanding every step of the way. We are committed to helping you heal and thrive beyond the challenges you face.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Smile className="text-yellow-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Positive Outcomes</h4>
                            <p className="text-gray-600">
                                We focus on achieving positive outcomes, empowering you to rebuild your life with confidence and hope for a brighter future. Our success is measured by your progress and well-being.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <BookOpen className="text-blue-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Educational Resources</h4>
                            <p className="text-gray-600">
                                Access a variety of educational resources to enhance your understanding of abuse recovery. Our library includes books, articles, and online courses to support your learning and growth.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <LifeBuoy className="text-teal-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Ongoing Support</h4>
                            <p className="text-gray-600">
                                We provide ongoing support through aftercare programs and follow-up services. Our commitment to your well-being extends beyond your time with us, ensuring you have the tools and resources needed for long-term success.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Globe className="text-indigo-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Community Engagement</h4>
                            <p className="text-gray-600">
                                Participate in community activities and initiatives that promote healing and awareness. Our program encourages you to engage with others, fostering a sense of belonging and empowerment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-8">
                <Carousel className="h-64 rounded-lg shadow-md">
                    <img src={Meditation} alt="Meditation" className="object-cover h-full w-full" />
                    <img src={Nature} alt="Healing Nature" className="object-cover h-full w-full" />
                    <img src={Help} alt="Supportive Hand" className="object-cover h-full w-full" />
                </Carousel>
            </div>

            <div className="text-center mt-12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    Get Started with Our Program
                </Button>
            </div>
        </div>
    );
};

export default AbuseComponent;
