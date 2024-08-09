import React from 'react';
import { Card, Carousel, Button } from 'flowbite-react';
import { User, Heart, Sun, Smile, CheckCircle, Book, Feather, Activity, LifeBuoy, Globe } from 'lucide-react';
import Counseling from '../../../../public/conseling.webp';
import SupportGroup from '../../../../public/support-group.png';
import Meditation from '../../../../public/meditation.jpg';
import Journaling from '../../../../public/journaling.jpg';
import Nature from '../../../../public/nature.jpg';
import Art from '../../../../public/art.webp';

const DepressionComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 p-6 sm:p-12 rounded-lg shadow-md max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Understanding and Managing Depression</h2>
            <p className="text-lg mb-12 text-center text-gray-600 max-w-2xl mx-auto">
                Depression can feel overwhelming and isolating, but you are not alone. Our comprehensive program is designed to help you understand depression, develop effective coping strategies, and work towards a brighter future through various therapeutic approaches.
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
                            Engage in personalized counseling sessions with compassionate therapists who specialize in depression treatment. We provide a safe and supportive space for you to explore your feelings and develop healthy coping strategies.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Personalized treatment plans tailored to your needs.</li>
                            <li>Focus on building self-esteem and empowerment.</li>
                            <li>Support for navigating challenging emotions and thoughts.</li>
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
                            Connect with others who understand what you're going through in our supportive group sessions. Share experiences, gain strength from others, and learn together in a community setting.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Weekly sessions facilitated by experienced professionals.</li>
                            <li>Build lasting friendships and support networks.</li>
                            <li>Engage in group activities and discussions.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Meditation} alt="Mindfulness and Meditation" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Sun className="text-yellow-500 mr-2" size={32} />
                            <h3 className="font-bold text-xl text-white">Mindfulness and Meditation</h3>
                        </div>
                        <p className="text-white">
                            Practice mindfulness and meditation techniques to help manage stress and improve emotional regulation. Our sessions guide you in cultivating a peaceful and present mind.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Guided meditation sessions to promote relaxation.</li>
                            <li>Mindfulness exercises to enhance self-awareness.</li>
                            <li>Techniques to reduce stress and anxiety.</li>
                        </ul>
                    </div>
                </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Our Holistic Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-start">
                        <Smile className="text-red-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Emotional Support</h4>
                            <p className="text-gray-600">
                                We provide emotional support through all stages of your journey. Our program focuses on helping you find joy and fulfillment in everyday life.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Behavioral Strategies</h4>
                            <p className="text-gray-600">
                                Develop practical behavioral strategies to combat negative patterns and build healthy habits. Our approach encourages positive change and personal growth.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Book className="text-indigo-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Educational Resources</h4>
                            <p className="text-gray-600">
                                Access a variety of educational resources to enhance your understanding of depression. Our library includes books, articles, and online courses to support your learning and growth.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Feather className="text-teal-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Creative Expression</h4>
                            <p className="text-gray-600">
                                Explore creative outlets such as art therapy, journaling, and music therapy. Expressing yourself creatively can be a powerful tool for healing and self-discovery.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Activity className="text-orange-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Physical Activity</h4>
                            <p className="text-gray-600">
                                Incorporate physical activities like yoga, walking, and fitness classes to boost your mood and improve overall well-being. Exercise is a key component of a healthy lifestyle.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <LifeBuoy className="text-purple-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Ongoing Support</h4>
                            <p className="text-gray-600">
                                We provide ongoing support through aftercare programs and follow-up services. Our commitment to your well-being extends beyond your time with us, ensuring you have the tools and resources needed for long-term success.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Globe className="text-pink-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Global Perspectives</h4>
                            <p className="text-gray-600">
                                Learn about depression from a global perspective, understanding how different cultures approach mental health. This insight broadens your understanding and enhances empathy and resilience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-8">
                <Carousel className="h-64 rounded-lg shadow-md">
                    <img src={Journaling} alt="Journaling" className="object-cover h-full w-full" />
                    <img src={Nature} alt="Healing Nature" className="object-cover h-full w-full" />
                    <img src={Art} alt="Art Therapy" className="object-cover h-full w-full" />
                </Carousel>
            </div>

            <div className="text-center mt-12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    Begin Your Healing Journey
                </Button>
            </div>
        </div>
    );
};

export default DepressionComponent;
