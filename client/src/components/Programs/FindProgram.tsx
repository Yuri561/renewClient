import React, { useState } from 'react';

const ProgramsSection: React.FC = () => {
    const [selectedIssue, setSelectedIssue] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [acceptingNew, setAcceptingNew] = useState(false);

    const mentalHealthIssues = [
        { id: 1, name: "Anxiety" },
        { id: 2, name: "Depression" },
        { id: 3, name: "Bipolar Disorder" },
        { id: 4, name: "PTSD" },
        { id: 5, name: "Schizophrenia" }
    ];

    const ageRanges = [
        { id: 1, range: "Under 18" },
        { id: 2, range: "18-35" },
        { id: 3, range: "36-55" },
        { id: 4, range: "56+" }
    ];

    const handleSearch = () => {
        console.log("Searching for programs related to:", selectedIssue, ", Age range:", ageRange, ", Accepting new patients:", acceptingNew);
        // Add actual search logic here
    };

    return (
        <div className="bg-gray-800 p-4 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                        <select
                            value={selectedIssue}
                            onChange={(e) => setSelectedIssue(e.target.value)}
                            className="w-full p-2 bg-gray-700 rounded"
                        >
                            <option value="">Select Mental Health Issue</option>
                            {mentalHealthIssues.map(issue => (
                                <option key={issue.id} value={issue.name}>{issue.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select
                            value={ageRange}
                            onChange={(e) => setAgeRange(e.target.value)}
                            className="w-full p-2 bg-gray-700 rounded"
                        >
                            <option value="">Select Age Range</option>
                            {ageRanges.map(range => (
                                <option key={range.id} value={range.range}>{range.range}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={acceptingNew}
                            onChange={(e) => setAcceptingNew(e.target.checked)}
                            id="accepting-new"
                            className="w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-300"
                        />
                        <label htmlFor="accepting-new" className="ml-2 block text-sm leading-5 text-white">
                            Accepting new patients
                        </label>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                        Search
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                        Add New Program
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProgramsSection;
