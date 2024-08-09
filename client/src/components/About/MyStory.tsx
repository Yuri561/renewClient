import React from 'react';
import { motion } from 'framer-motion';

// Importing example images, replace these URLs with your actual images
import nursingImage from '../../../public/nursing.jpg';
import childCareImage from '../../../public/childcare.jpg';
import graduateStudiesImage from '../../../public/graduates.jpg';
import professionalImage from '../../../public/professional.jpeg';

const MyStory: React.FC = () => {
  return (
    <div className="bg-white text-gray-700 px-8 py-16 mt-6 rounded">
      <div className="max-w-8xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet LaToya - A Journey in Mental Health Care
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={nursingImage}
              alt="LaToya during her early nursing studies"
              className="w-full h-80 object-cover rounded-xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">Beginning in Nursing</h3>
            <p className="text-lg leading-relaxed mb-4">
              LaToya, a native of North Carolina, embarked on her nursing journey at Durham Technical Community College.
              It was during her time at UNC Chapel Hill Hospital in Neuro-Behavioral Health and Duke University Hospital where she honed her skills,
              developing a deep understanding of complex mental health conditions. This period laid the groundwork for her empathetic approach,
              emphasizing the importance of treating patients with dignity and respect.
            </p>
            <p className="text-lg leading-relaxed">
              Her early experiences were pivotal in shaping her career, providing insights into patient-centered care and the critical role of mental health professionals
              in fostering recovery and resilience. These formative years fueled her passion for making a meaningful difference in the lives of those she served.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Expanding Her Expertise</h3>
            <p className="text-lg leading-relaxed mb-4">
              As LaToya progressed in her career, she provided care for diverse populations, including geriatric patients and individuals with chronic mental illnesses.
              Her tenure at Dorothea Dix Hospital and Cherry Hospital in North Carolina offered her invaluable experiences in crisis intervention and therapeutic communication.
            </p>
            <p className="text-lg leading-relaxed">
              Working with children, adolescents, and adults across various settings, LaToya learned to adapt her techniques to meet the unique needs of each patient group.
              Her holistic approach emphasized the interconnectedness of mental, emotional, and physical well-being, fostering a supportive environment for healing and growth.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <img
              src={childCareImage}
              alt="Caring for children and adolescents"
              className="w-full h-80 object-cover rounded-xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img
              src={graduateStudiesImage}
              alt="Graduate studies at University of South Alabama"
              className="w-full h-80 object-cover rounded-xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6">Advanced Education</h3>
            <p className="text-lg leading-relaxed mb-4">
              Driven by a desire to expand her knowledge and skills, LaToya pursued her graduate studies in Psychiatry at the University of South Alabama.
              She achieved her Master of Science in Nursing in 2017, focusing on advanced psychiatric assessments, therapeutic modalities, and medication management.
            </p>
            <p className="text-lg leading-relaxed">
              Her academic endeavors included research into innovative treatment methodologies, broadening her understanding of evidence-based practices.
              LaToya's commitment to education underscored her dedication to offering the highest quality of care, and she graduated with honors, lauded for her insightful approach to mental health challenges.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Professional Certification</h3>
            <p className="text-lg leading-relaxed mb-4">
              Following a comprehensive internship at Cape Fear Valley Behavioral Health, LaToya became Board Certified as a Family Psychiatric Mental Health Nurse Practitioner.
              This credential empowered her to deliver family-centered care across all life stages, from children to the elderly.
            </p>
            <p className="text-lg leading-relaxed">
              Her certification journey emphasized the importance of lifelong learning and adaptation to the evolving landscape of mental health care.
              LaToya actively engages in continuing education to stay abreast of the latest research, ensuring that her practice reflects current standards and innovations in the field.
            </p>
          <p className="text-lg leading-relaxed  mx-auto mb-4">
            LaToya’s journey is a testament to her dedication to improving mental health care and her unwavering commitment to her patients.
            Her approach combines clinical expertise with compassion, aiming to empower individuals and families on their path to mental wellness.
            Join her on this transformative journey and discover the difference that personalized, patient-centered care can make.
          </p>
          <p className="text-lg leading-relaxed  mx-auto mb-4">
            Through her leadership and vision, LaToya has inspired countless others to pursue careers in mental health.
            Her impact extends beyond her immediate practice, influencing mental health policies and advocating for increased access to quality mental health care.
            With a focus on holistic well-being, she continues to innovate and lead in the mental health field.
          </p>
          <p className="text-lg leading-relaxed  mx-auto">
            LaToya believes in the power of community and collaboration, often engaging with local organizations to promote mental health awareness and education.
            Her efforts are directed towards building resilient communities where mental health is openly discussed and prioritized.
            Through workshops, seminars, and public speaking engagements, she strives to dismantle the stigma surrounding mental health, encouraging open dialogue and acceptance.
          </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <img
              src={professionalImage}
              alt="LaToya as a certified professional"
              className="w-[30rem] h-70 object-fill rounded-xl shadow-xl mx-auto"
            />
          </motion.div>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
        </motion.div>
      </div>
    </div>
  );
};

export default MyStory;
