import React from 'react';
import { Card, Carousel, Button } from 'flowbite-react';
import { User,  Shield, Bell, Phone, LifeBuoy, Brain, MessageCircle, Globe, Smile } from 'lucide-react';
import Counseling from '../../../../public/counselling.jpg';
import Helpline from '../../../../public/helpline.webp';
import Meditation from '../../../../public/meditation.jpg';
import FirstAid from '../../../../public/firstaid.jpg';
import Nature from '../../../../public/nature.jpg';
import GroupTherapy from '../../../../public/group-therapy.jpg';

const CrisisComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 p-6 sm:p-12 rounded-lg shadow-md max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Crisis Intervention and Support</h2>
            <p className="text-lg mb-12 text-center text-gray-600 max-w-2xl mx-auto">
                Experiencing a mental health crisis can be overwhelming and distressing. Our crisis intervention program is designed to provide immediate support, resources, and guidance to help you navigate difficult times safely and effectively.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Counseling} alt="Emergency Counseling" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <User className="text-blue-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Emergency Counseling</h3>
                        </div>
                        <p className="text-white">
                            Access immediate counseling services to help manage your crisis situation. Our experienced therapists are available to provide support and guidance during challenging times.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>24/7 access to emergency counseling services.</li>
                            <li>Personalized support to address immediate concerns.</li>
                            <li>Strategies for managing distress and anxiety.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Helpline} alt="Crisis Helpline" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Phone className="text-green-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">24/7 Crisis Helpline</h3>
                        </div>
                        <p className="text-white">
                            Reach out to our crisis helpline for immediate assistance and support. Our trained professionals are ready to listen and help you find the resources you need.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Round-the-clock access to crisis support.</li>
                            <li>Compassionate and understanding staff.</li>
                            <li>Guidance for finding additional resources.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Meditation} alt="Relaxation Techniques" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Shield className="text-yellow-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Relaxation Techniques</h3>
                        </div>
                        <p className="text-white">
                            Learn relaxation techniques and mindfulness practices to help calm your mind and body during a crisis. These practices can support emotional regulation and reduce stress.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Guided meditation and breathing exercises.</li>
                            <li>Mindfulness techniques for emotional balance.</li>
                            <li>Tools for managing anxiety and stress.</li>
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
                            <h4 className="font-bold text-lg text-gray-800">Cognitive Behavioral Support</h4>
                            <p className="text-gray-600">
                                Utilize Cognitive Behavioral Therapy (CBT) techniques to manage crisis-related thoughts and emotions effectively. Our approach helps reframe negative thinking patterns.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Bell className="text-green-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Crisis Response Planning</h4>
                            <p className="text-gray-600">
                                Develop a personalized crisis response plan to help you feel prepared and supported in challenging situations. This plan outlines steps and resources for immediate assistance.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <LifeBuoy className="text-indigo-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Peer Support</h4>
                            <p className="text-gray-600">
                                Connect with peers who understand your challenges and offer support. Peer networks provide a sense of community and shared experiences during difficult times.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <MessageCircle className="text-teal-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Communication Skills</h4>
                            <p className="text-gray-600">
                                Learn effective communication skills to express your needs and feelings during a crisis. Our program focuses on enhancing dialogue with loved ones and professionals.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Smile className="text-orange-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Emotional Regulation</h4>
                            <p className="text-gray-600">
                                Build skills for emotional regulation and resilience. Our approach helps you maintain stability and cope with stressors during and after a crisis.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Globe className="text-pink-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Global Perspectives</h4>
                            <p className="text-gray-600">
                                Gain insights into how different cultures handle crises. This knowledge broadens your understanding and fosters empathy and resilience in diverse settings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-8">
                <Carousel className="h-64 rounded-lg shadow-md">
                    <img src={FirstAid} alt="First Aid" className="object-cover h-full w-full" />
                    <img src={Nature} alt="Healing Nature" className="object-cover h-full w-full" />
                    <img src={GroupTherapy} alt="Group Therapy" className="object-cover h-full w-full" />
                </Carousel>
            </div>

            <div className="text-center mt-12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    Access Crisis Support
                </Button>
            </div>
        </div>
    );
};

export default CrisisComponent;
