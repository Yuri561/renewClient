import React from 'react';

// Importing example images, replace these URLs with your actual images
import nursingImage from '../../../public/nursing.jpg';
import childCareImage from '../../../public/childcare.jpg';
import graduateStudiesImage from '../../../public/graduates.jpg';
import professionalImage from '../../../public/professional.jpeg';

const MyStory: React.FC = () => {
    return (
        <div className="bg-white text-gray-700 px-6 py-10">
            <div className="max-w-8xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Meet LaToya - A Journey in Mental Health Care</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <img src={nursingImage} alt="LaToya during her early nursing studies" className="rounded-lg shadow-lg"/>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Beginning in Nursing</h3>
                        <p>
                            LaToya, a native of North Carolina, began her nursing studies at Durham Technical Community College,
                            obtaining crucial clinical experience at UNC Chapel Hill hospital in Neuro-Behavioral Health and at Duke University Hospital.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Expanding Her Expertise</h3>
                        <p>
                            She cared for geriatric patients and those chronically mentally ill as she earned her RN, later providing care for children,
                            adolescents, and adults with mental health disorders at several institutions including Doreatha Dix Hospital and Cherry Hospital in North Carolina.
                        </p>
                    </div>
                    <div>
                        <img src={childCareImage} alt="Caring for children and adolescents" className="rounded-lg shadow-lg"/>
                    </div>
                    <div>
                        <img src={graduateStudiesImage} alt="Graduate studies at University of South Alabama" className="rounded-lg shadow-lg"/>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Advanced Education</h3>
                        <p>
                            LaToya completed her graduate nursing studies, specializing in Psychiatry, at the University of South Alabama and attained her Master of Science in Nursing in 2017.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Professional Certification</h3>
                        <p>
                            After her internship at Cape Fear Valley Behavioral Health, she became Board Certified as a Family Psychiatric Mental Health Nurse Practitioner,
                            now qualified to treat individuals across the lifespan.
                        </p>
                    </div>
                    <div>
                        <img src={professionalImage} alt="LaToya as a certified professional" className="rounded-lg shadow-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyStory;
