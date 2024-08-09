import React from 'react';
import { Card, Carousel, Button } from 'flowbite-react';
import { User, Heart, Recycle, Lightbulb, Star, Brain, Sun, Feather, Globe } from 'lucide-react';
import Counseling from '../../../../public/conseling.webp';
import SupportGroup from '../../../../public/support.jpg';
import MoodTracking from '../../../../public/mood.jpg';
import Medication from '../../../../public/medication1.webp';
import Nature from '../../../../public/nature.jpg';
import ArtTherapy from '../../../../public/arttherapy.jpeg';

const BipolarComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 p-6 sm:p-12 rounded-lg shadow-md max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Managing Bipolar Disorder</h2>
            <p className="text-lg mb-12 text-center text-gray-600 max-w-2xl mx-auto">
                Bipolar disorder is a complex mental health condition characterized by extreme mood swings, including emotional highs (mania or hypomania) and lows (depression). 
                Our comprehensive program is designed to provide you with the tools, support, and resources needed to manage bipolar disorder effectively.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Counseling} alt="Individual Counseling" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <User className="text-blue-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Individual Counseling</h3>
                        </div>
                        <p className="text-white">
                            Engage in one-on-one counseling sessions with experienced therapists specializing in bipolar disorder. Our individualized approach focuses on understanding your unique experiences and developing coping strategies tailored to your needs.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Personalized treatment plans to address mood swings.</li>
                            <li>Focus on emotional regulation and resilience.</li>
                            <li>Strategies for maintaining a balanced lifestyle.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={SupportGroup} alt="Support Group" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Heart className="text-green-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Support Groups</h3>
                        </div>
                        <p className="text-white">
                            Connect with others who understand your journey through our support groups. Share experiences, learn from peers, and find comfort in a supportive community setting.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Weekly sessions facilitated by experienced professionals.</li>
                            <li>Build lasting friendships and support networks.</li>
                            <li>Engage in group activities and discussions.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={MoodTracking} alt="Mood Tracking" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Recycle className="text-yellow-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Mood Tracking</h3>
                        </div>
                        <p className="text-white">
                            Learn how to track your moods and identify patterns to better manage your symptoms. Our tools and resources help you stay aware of mood changes and implement strategies to maintain stability.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Track mood changes over time with journaling.</li>
                            <li>Identify triggers and effective coping mechanisms.</li>
                            <li>Develop a personalized mood management plan.</li>
                        </ul>
                    </div>
                </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Our Comprehensive Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-start">
                        <Brain className="text-red-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Cognitive Behavioral Therapy</h4>
                            <p className="text-gray-600">
                                Use Cognitive Behavioral Therapy (CBT) techniques to challenge negative thought patterns and develop healthier ways of thinking and behaving.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Lightbulb className="text-green-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Medication Management</h4>
                            <p className="text-gray-600">
                                Work with our healthcare professionals to explore medication options that can help stabilize your mood. We provide ongoing support and monitoring to ensure effective treatment.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Feather className="text-indigo-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Creative Expression</h4>
                            <p className="text-gray-600">
                                Engage in art therapy, music therapy, and other creative outlets to express emotions and explore your inner world. Creative expression can be a powerful tool for healing and self-discovery.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Sun className="text-teal-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Lifestyle Balance</h4>
                            <p className="text-gray-600">
                                Learn how to create a balanced lifestyle that supports your mental health. We offer guidance on nutrition, exercise, sleep, and daily routines to enhance well-being.
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
                                Gain insights into how different cultures view and manage bipolar disorder. This knowledge can help broaden your understanding and foster empathy and resilience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-8">
                <Carousel className="h-64 rounded-lg shadow-md">
                    <img src={Medication} alt="Medication" className="object-cover h-full w-full" />
                    <img src={Nature} alt="Healing Nature" className="object-cover h-full w-full" />
                    <img src={ArtTherapy} alt="Art Therapy" className="object-cover h-full w-full" />
                </Carousel>
            </div>

            <div className="text-center mt-12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    Start Your Wellness Journey
                </Button>
            </div>
        </div>
    );
};

export default BipolarComponent;
