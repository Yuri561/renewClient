import React from 'react';
import { Card, Carousel, Button } from 'flowbite-react';
import { Users, Heart, Globe, MessageCircle, Group, Star, Feather, Sun } from 'lucide-react';
import GroupTherapy from '../../../../public/group-therapy.jpg';
import Discussion from '../../../../public/discussion.jpg';
import Nature from '../../../../public/nature.jpg';
import Collaboration from '../../../../public/collaboration.webp';
import Workshop from '../../../../public/workshop.jpg';
import Community from '../../../../public/community.jpg';

const GroupComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 p-6 sm:p-12 rounded-lg shadow-md max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Group Therapy Programs</h2>
            <p className="text-lg mb-12 text-center text-gray-600 max-w-2xl mx-auto">
                Group therapy offers a supportive and collaborative environment where individuals can share experiences, gain insights, and learn from one another. Our group programs are designed to provide a safe space for healing, growth, and connection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={GroupTherapy} alt="Group Session" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Users className="text-blue-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Group Sessions</h3>
                        </div>
                        <p className="text-white">
                            Participate in structured group sessions facilitated by experienced therapists. These sessions focus on sharing experiences, providing mutual support, and developing coping skills.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Weekly sessions with a consistent group.</li>
                            <li>Focus on building trust and connections.</li>
                            <li>Develop communication and interpersonal skills.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Discussion} alt="Open Discussions" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <MessageCircle className="text-green-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Open Discussions</h3>
                        </div>
                        <p className="text-white">
                            Engage in open discussions on various mental health topics. These sessions encourage participants to share their perspectives and learn from each other's experiences.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Inclusive and respectful dialogue.</li>
                            <li>Opportunities to ask questions and share insights.</li>
                            <li>Explore different approaches to mental health.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Collaboration} alt="Collaborative Activities" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Group className="text-yellow-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Collaborative Activities</h3>
                        </div>
                        <p className="text-white">
                            Participate in collaborative activities that foster teamwork and cooperation. These activities help build strong connections and enhance group dynamics.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Team-building exercises and games.</li>
                            <li>Creative projects and problem-solving tasks.</li>
                            <li>Focus on cooperation and mutual support.</li>
                        </ul>
                    </div>
                </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Our Comprehensive Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-start">
                        <Heart className="text-red-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Emotional Support</h4>
                            <p className="text-gray-600">
                                Receive emotional support from peers and facilitators who understand your challenges and provide encouragement and validation.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Feather className="text-green-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Creative Expression</h4>
                            <p className="text-gray-600">
                                Engage in art therapy, music therapy, and other creative outlets to express emotions and explore your inner world. Creative expression can be a powerful tool for healing and self-discovery.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <MessageCircle className="text-indigo-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Communication Skills</h4>
                            <p className="text-gray-600">
                                Learn effective communication skills to express your needs and feelings during group interactions. Our program focuses on enhancing dialogue with peers and professionals.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Sun className="text-teal-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Resilience Building</h4>
                            <p className="text-gray-600">
                                Learn strategies to build resilience and coping skills. Our program helps you strengthen your ability to manage stress and recover from setbacks.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Star className="text-orange-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Peer Support</h4>
                            <p className="text-gray-600">
                                Connect with peers who share similar experiences and challenges. Peer support offers validation, understanding, and encouragement on your journey to wellness.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Globe className="text-pink-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Global Perspectives</h4>
                            <p className="text-gray-600">
                                Gain insights into how different cultures view and manage mental health. This knowledge can help broaden your understanding and foster empathy and resilience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-8">
                <Carousel className="h-64 rounded-lg shadow-md">
                    <img src={Workshop} alt="Workshop" className="object-cover h-full w-full" />
                    <img src={Nature} alt="Healing Nature" className="object-cover h-full w-full" />
                    <img src={Community} alt="Community Building" className="object-cover h-full w-full" />
                </Carousel>
            </div>

            <div className="text-center mt-12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    Join Our Group Therapy
                </Button>
            </div>
        </div>
    );
};

export default GroupComponent;
