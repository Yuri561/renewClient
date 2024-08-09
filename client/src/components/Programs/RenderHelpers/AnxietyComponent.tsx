import React from 'react';
import { Card, Carousel, Button } from 'flowbite-react';
import { User, Heart, Brain, Coffee, CheckCircle, Globe } from 'lucide-react';
import Therapy from '../../../../public/therapy.png';
import Support from '../../../../public/support.jpg';
import Relaxation from '../../../../public/relaxation.jpg';
import Yoga from '../../../../public/yoga.jpg';
import Nature from '../../../../public/nature.jpg';
import Help from '../../../../public/help.jpg';

const AnxietyComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 p-6 sm:p-12 rounded-lg shadow-md max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Understanding and Managing Anxiety</h2>
            <p className="text-lg mb-12 text-center text-gray-600 max-w-2xl mx-auto">
                Anxiety is a natural response to stress, but it can become overwhelming and affect your daily life. Our program is designed to help you understand anxiety, develop coping strategies, and find relief through various therapeutic approaches.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Therapy} alt="Therapy Session" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <User className="text-blue-500 mr-2" size={24} />
                            <h3 className="font-bold text-xl text-white">Individual Therapy</h3>
                        </div>
                        <p className="text-white">
                            Engage in one-on-one therapy sessions with experienced therapists who specialize in anxiety treatment. Through Cognitive Behavioral Therapy (CBT) and other evidence-based approaches, we help you identify triggers and develop effective coping mechanisms.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Personalized treatment plans tailored to your needs.</li>
                            <li>Safe and supportive therapeutic environment.</li>
                            <li>Focus on building resilience and self-confidence.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Support} alt="Support Group" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Heart className="text-green-500 mr-2" size={24} />
                            <h3 className="font-bold text-xl text-white">Support Groups</h3>
                        </div>
                        <p className="text-white">
                            Join support groups to connect with others who understand what you're going through. Share experiences, learn from peers, and gain strength in a community setting.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Weekly sessions facilitated by trained professionals.</li>
                            <li>Build lasting friendships and support networks.</li>
                            <li>Participate in group activities and discussions.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Relaxation} alt="Relaxation Techniques" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Coffee className="text-purple-500 mr-2" size={24} />
                            <h3 className="font-bold text-xl text-white">Relaxation Techniques</h3>
                        </div>
                        <p className="text-white">
                            Learn relaxation techniques to manage stress and reduce anxiety. Our sessions teach you how to calm your mind and body through guided relaxation exercises.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Breathing exercises to promote relaxation.</li>
                            <li>Progressive muscle relaxation for tension release.</li>
                            <li>Visualization techniques to reduce stress.</li>
                        </ul>
                    </div>
                </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Our Holistic Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-start">
                        <Brain className="text-red-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Cognitive Support</h4>
                            <p className="text-gray-600">
                                Our cognitive support techniques focus on reshaping negative thought patterns and enhancing problem-solving skills. We guide you to think more positively and handle anxiety-inducing situations effectively.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <CheckCircle className="text-pink-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Behavioral Strategies</h4>
                            <p className="text-gray-600">
                                Develop behavioral strategies to change habits that contribute to anxiety. Our approach helps you gradually face and overcome your fears, empowering you to lead a more fulfilling life.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Globe className="text-yellow-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Global Perspectives</h4>
                            <p className="text-gray-600">
                                Learn about anxiety from a global perspective, understanding how different cultures approach mental health. This insight broadens your understanding and enhances empathy and resilience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-8">
                <Carousel className="h-64 rounded-lg shadow-md">
                    <img src={Yoga} alt="Yoga" className="object-cover h-full w-full" />
                    <img src={Nature} alt="Healing Nature" className="object-cover h-full w-full" />
                    <img src={Help} alt="Supportive Hand" className="object-cover h-full w-full" />
                </Carousel>
            </div>

            <div className="text-center mt-12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    Start Your Journey to Calm
                </Button>
            </div>
        </div>
    );
};

export default AnxietyComponent;
