import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology',
    specialization: 'Cloud Computing & Information Security',
    institution: 'Ajeenkya DY Patil University, Pune',
    duration: '2022 - 2025',
    icon: GraduationCap,
  },
  {
    degree: 'Diploma',
    specialization: 'Computer Engineering',
    institution: 'Vidya Pratishthans Polytechnic College',
    duration: '2019 - 2022',
    icon: Award,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          animate={{
            backgroundSize: ["200% 200%", "300% 300%", "200% 200%"],
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Education
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg
                         transition-all transform hover:scale-105 hover:shadow-[0_0_15px_rgba(99,102,241,0.8)]"
            >
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent
                              hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.8)]
                              transition-all"></div>

              <div className="flex items-center gap-4">
                {/* Icon with Glow Effect */}
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg
                                transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.8)]">
                  <edu.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 
                                 transition-all duration-300 hover:text-indigo-400 hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                    {edu.specialization}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    {edu.institution}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 
                                   dark:bg-gray-700 px-3 py-1 rounded-full">
                    {edu.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
