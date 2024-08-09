import React, { useState } from 'react';

const MoodSection: React.FC = () => {
    const [selectedMood, setSelectedMood] = useState('');

    const moods = [
        { id: 1, name: "Happy", suggestions: "Enjoy this beautiful day!" },
        { id: 2, name: "Sad", suggestions: "Consider watching a comforting movie or reading a book." },
        { id: 3, name: "Anxious", suggestions: "Try some breathing exercises or a short meditation." },
        { id: 4, name: "Angry", suggestions: "Physical activity can help. Maybe a walk or some yoga?" },
        { id: 5, name: "Tired", suggestions: "A short nap can restore your energy levels." }
    ];

    const handleMoodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const mood = moods.find(mood => mood.name === event.target.value);
        setSelectedMood(mood ? mood.suggestions : '');
    };

    return (
        <div className="bg-blue-900 text-white p-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">How are you feeling?</h2>
                <div className="mb-6">
                    <select
                        onChange={handleMoodChange}
                        className="w-full p-3 bg-blue-800 rounded outline-none"
                    >
                        <option value="">Select Your Current Mood</option>
                        {moods.map(mood => (
                            <option key={mood.id} value={mood.name}>{mood.name}</option>
                        ))}
                    </select>
                </div>
                {selectedMood && (
                    <div className="mt-4 p-4 bg-blue-800 rounded">
                        <p className="text-xl">Suggestion: {selectedMood}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoodSection;
