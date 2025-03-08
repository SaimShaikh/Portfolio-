import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology',
    specialization: 'Cloud Computing',
    institution: 'Ajeenkya DY Patil University, Pune',
    duration: '2022 - 2025',
    icon: GraduationCap,
  },
  {
    degree: 'Diploma',
    specialization: 'Computer Engineering',
    institution: 'Government Polytechnic Mumbai',
    duration: '2019 - 2022',
    icon: Award,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4"
            >
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <edu.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                  {edu.specialization}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {edu.institution}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                  {edu.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
