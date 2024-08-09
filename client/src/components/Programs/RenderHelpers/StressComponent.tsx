import React from 'react';
import { Card, Carousel, Button } from 'flowbite-react';
import { Coffee, Heart, Smile, Brain, Feather, LifeBuoy, Sun, Shield, Cloud } from 'lucide-react';
import Relaxation from '../../../../public/relaxation.jpg';
import Breathing from '../../../../public/breathing.jpg';
import Yoga from '../../../../public/yoga.jpg';
import Meditation from '../../../../public/meditation.jpg';
import Nature from '../../../../public/nature.jpg';
import Exercise from '../../../../public/exercise.jpg';

const StressComponent: React.FC = () => {
    return (
        <div className="bg-gray-100 p-6 sm:p-12 rounded-lg shadow-md max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Stress Management Programs</h2>
            <p className="text-lg mb-12 text-center text-gray-600 max-w-2xl mx-auto">
                Stress is a natural response to life's demands, but it can become overwhelming and affect your well-being. Our stress management program offers effective strategies to help you manage stress, improve resilience, and enhance your quality of life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Relaxation} alt="Relaxation Techniques" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Coffee className="text-blue-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Relaxation Techniques</h3>
                        </div>
                        <p className="text-white">
                            Learn relaxation techniques to calm your mind and body. These techniques help reduce stress, improve focus, and promote a sense of well-being.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Guided imagery and progressive muscle relaxation.</li>
                            <li>Mindfulness meditation and breathing exercises.</li>
                            <li>Visualizations and stress reduction techniques.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Breathing} alt="Breathing Exercises" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Feather className="text-green-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Breathing Exercises</h3>
                        </div>
                        <p className="text-white">
                            Practice breathing exercises to regulate your stress response and enhance your emotional regulation. These exercises promote relaxation and calmness.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Deep breathing and diaphragmatic breathing techniques.</li>
                            <li>Box breathing and alternate nostril breathing.</li>
                            <li>Breathing exercises for stress relief.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={Yoga} alt="Yoga and Mindfulness" className="rounded-t-lg object-cover h-48 w-full" />
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <Brain className="text-yellow-500 mr-2" size={28} />
                            <h3 className="font-bold text-xl text-white">Yoga and Mindfulness</h3>
                        </div>
                        <p className="text-white">
                            Engage in yoga and mindfulness practices to improve physical and mental health. These practices enhance flexibility, balance, and stress resilience.
                        </p>
                        <ul className="list-disc ml-6 mt-2 text-white">
                            <li>Yoga poses for stress relief and relaxation.</li>
                            <li>Mindfulness exercises to increase awareness.</li>
                            <li>Yoga sequences for mental clarity and focus.</li>
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
                            <h4 className="font-bold text-lg text-gray-800">Emotional Resilience</h4>
                            <p className="text-gray-600">
                                Build emotional resilience to effectively cope with stressors and challenges. Our program focuses on enhancing self-awareness and emotional regulation.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <LifeBuoy className="text-green-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Stress Reduction Strategies</h4>
                            <p className="text-gray-600">
                                Learn stress reduction strategies to manage daily stress effectively. Our approach includes time management, goal setting, and relaxation techniques.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Sun className="text-indigo-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Positive Psychology</h4>
                            <p className="text-gray-600">
                                Practice positive psychology techniques to cultivate happiness and well-being. Our program focuses on gratitude, optimism, and strength-based approaches.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Smile className="text-teal-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Mindful Living</h4>
                            <p className="text-gray-600">
                                Embrace mindful living to enhance your quality of life. Our approach emphasizes mindfulness in daily activities, self-care, and self-compassion.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Shield className="text-orange-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Self-Care Practices</h4>
                            <p className="text-gray-600">
                                Develop self-care practices to support physical and mental well-being. Our program focuses on nurturing the body, mind, and spirit.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Cloud className="text-pink-500 mr-3" size={32} />
                        <div>
                            <h4 className="font-bold text-lg text-gray-800">Nature Connection</h4>
                            <p className="text-gray-600">
                                Explore the healing power of nature to reduce stress and enhance well-being. Our program includes nature walks, outdoor activities, and eco-therapy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-8">
                <Carousel className="h-64 rounded-lg shadow-md">
                    <img src={Meditation} alt="Meditation" className="object-cover h-full w-full" />
                    <img src={Nature} alt="Healing Nature" className="object-cover h-full w-full" />
                    <img src={Exercise} alt="Exercise" className="object-cover h-full w-full" />
                </Carousel>
            </div>

            <div className="text-center mt-12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    Start Managing Stress
                </Button>
            </div>
        </div>
    );
};

export default StressComponent;
