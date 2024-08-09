import React from 'react';
import { Card, Carousel, Button } from 'flowbite-react';
import { Home, Heart, Users, Globe, MessageCircle, LifeBuoy, Smile } from 'lucide-react';
import FamilyCounseling from '../../../../public/family-therapy.webp';
import Communication from '../../../../public/communication.jpg';
import Bonding from '../../../../public/bonding.jpg';
import Support from '../../../../public/support.jpg';
import Connection from '../../../../public/bonding.jpg';
import FamilyWorkshop from '../../../../public/family.jpg';

const FamilyComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 p-6 sm:p-12 rounded-lg shadow-md max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Family Counseling Programs</h2>
            <p className="text-lg mb-12 text-center text-gray-600 max-w-2xl mx-auto">
                Strong family relationships are essential for emotional and mental well-being. Our family counseling programs provide support and guidance to improve communication, resolve conflicts, and strengthen family bonds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={FamilyCounseling} alt="Family Counseling" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Home className="text-blue-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-gray-800">Family Counseling</h3>
                        </div>
                        <p className="text-white">
                            Work with experienced family therapists to improve communication, resolve conflicts, and create a supportive home environment.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Customized counseling sessions for families.</li>
                            <li>Focus on understanding and empathy.</li>
                            <li>Strategies for building strong family connections.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Communication} alt="Effective Communication" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <MessageCircle className="text-green-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Effective Communication</h3>
                        </div>
                        <p className="text-white">
                            Learn effective communication skills to express feelings, listen actively, and resolve conflicts within the family.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Techniques for active listening and empathy.</li>
                            <li>Strategies for expressing needs and emotions.</li>
                            <li>Conflict resolution and problem-solving skills.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Bonding} alt="Family Bonding Activities" className="rounded-t-lg object-cover h-49 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Users className="text-yellow-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Family Bonding Activities</h3>
                        </div>
                        <p className="text-white">
                            Participate in activities that promote family bonding and connection, fostering a sense of togetherness and support.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Outdoor activities and family games.</li>
                            <li>Creative projects and team-building exercises.</li>
                            <li>Focus on fun, collaboration, and trust.</li>
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
                                Provide emotional support to family members, helping them understand each other better and navigate challenges together.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <LifeBuoy className="text-green-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Crisis Intervention</h4>
                            <p className="text-gray-600">
                                Access immediate support and guidance during family crises to restore balance and find solutions to pressing issues.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <MessageCircle className="text-indigo-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Conflict Resolution</h4>
                            <p className="text-gray-600">
                                Develop skills to effectively resolve conflicts and disagreements, fostering a more harmonious family environment.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Globe className="text-teal-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Cultural Awareness</h4>
                            <p className="text-gray-600">
                                Gain insights into different cultural perspectives on family dynamics and mental health, enhancing understanding and respect.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Smile className="text-orange-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Joyful Living</h4>
                            <p className="text-gray-600">
                                Promote joyful living by focusing on positive interactions, shared experiences, and mutual support within the family.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Users className="text-pink-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Community Engagement</h4>
                            <p className="text-gray-600">
                                Encourage families to engage with their communities, fostering a sense of belonging and shared purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-8">
                <Carousel className="h-64 rounded-lg shadow-md">
                    <img src={Support} alt="Support" className="object-cover h-full w-full" />
                    <img src={Connection} alt="Family Connection" className="object-cover h-full w-full" />
                    <img src={FamilyWorkshop} alt="Family Workshop" className="object-cover h-full w-full" />
                </Carousel>
            </div>

            <div className="text-center mt-12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    Strengthen Family Bonds
                </Button>
            </div>
        </div>
    );
};

export default FamilyComponent;
