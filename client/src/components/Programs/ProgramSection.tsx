
import React from 'react';
import ProgramHeader from './ProgramHeader';
import FindProgram from './FindProgram';
import MoodSection from './MoodSection';

const ProgramSection: React.FC = () => {
    return (
        <div>
            <ProgramHeader />
            <MoodSection />
            <FindProgram />
        </div>
    );
};

export default ProgramSection;
