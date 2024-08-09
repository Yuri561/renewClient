import React from 'react';
import { Card, Carousel, Button } from 'flowbite-react';
import { Brain, Shield, Globe, MessageCircle, LifeBuoy, UserCheck, Sun, Feather, Users } from 'lucide-react';
import Counseling from '../../../../public/conseling.webp';
import Medication from '../../../../public/medication.jpg';
import SupportGroup from '../../../../public/support.jpg';
import Therapy from '../../../../public/therapy.png';
import Nature from '../../../../public/nature.jpg';
import ArtTherapy from '../../../../public/arttt.jpg';

const SchizoComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 p-6 sm:p-12 rounded-lg shadow-md max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Schizophrenia Management Programs</h2>
            <p className="text-lg mb-12 text-center text-gray-600 max-w-2xl mx-auto">
                Schizophrenia is a complex mental health condition that requires comprehensive management and support. Our program provides resources and strategies to help individuals manage symptoms, improve quality of life, and achieve personal goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Counseling} alt="Individual Counseling" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Brain className="text-blue-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Individual Counseling</h3>
                        </div>
                        <p className="text-white">
                            Receive personalized counseling sessions with experienced therapists to address individual challenges and develop coping strategies.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Person-centered approach to therapy.</li>
                            <li>Focus on emotional and cognitive support.</li>
                            <li>Strategies for managing symptoms and stress.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Medication} alt="Medication Management" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Shield className="text-green-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Medication Management</h3>
                        </div>
                        <p className="text-white">
                            Collaborate with healthcare professionals to optimize medication regimens and manage side effects effectively.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Regular assessments and medication reviews.</li>
                            <li>Focus on achieving treatment goals.</li>
                            <li>Support for medication adherence.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={SupportGroup} alt="Group Support" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Users className="text-yellow-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Group Support</h3>
                        </div>
                        <p className="text-white">
                            Join our support groups to connect with others who understand your experiences and gain strength from shared insights and mutual support.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Weekly group meetings and discussions.</li>
                            <li>Peer support and shared experiences.</li>
                            <li>Focus on building community and resilience.</li>
                        </ul>
                    </div>
                </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Our Comprehensive Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-start">
                        <UserCheck className="text-red-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Holistic Care</h4>
                            <p className="text-gray-600">
                                Our program takes a holistic approach to care, addressing physical, emotional, and social well-being to promote overall health and wellness.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <LifeBuoy className="text-green-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Crisis Intervention</h4>
                            <p className="text-gray-600">
                                Access immediate support and intervention during times of crisis. Our crisis intervention team is available to provide guidance and assistance.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <MessageCircle className="text-indigo-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Communication Skills</h4>
                            <p className="text-gray-600">
                                Develop effective communication skills to enhance relationships and improve interactions with healthcare providers, family, and peers.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Sun className="text-teal-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Resilience Building</h4>
                            <p className="text-gray-600">
                                Build resilience and coping skills to manage stress and adversity. Our program focuses on empowering individuals to thrive despite challenges.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Globe className="text-orange-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Global Perspectives</h4>
                            <p className="text-gray-600">
                                Gain insights into global perspectives on mental health and schizophrenia management, fostering empathy and understanding.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Feather className="text-pink-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Creative Expression</h4>
                            <p className="text-gray-600">
                                Explore creative outlets such as art and music therapy to express emotions and discover new ways to cope with challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-8">
                <Carousel className="h-64 rounded-lg shadow-md">
                    <img src={Therapy} alt="Therapy" className="object-cover h-full w-full" />
                    <img src={Nature} alt="Healing Nature" className="object-cover h-full w-full" />
                    <img src={ArtTherapy} alt="Art Therapy" className="object-cover h-full w-full" />
                </Carousel>
            </div>

            <div className="text-center mt-12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    Begin Your Journey to Wellness
                </Button>
            </div>
        </div>
    );
};

export default SchizoComponent;
