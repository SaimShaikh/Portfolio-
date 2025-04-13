import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          <motion.span
            className="text-indigo-600 dark:text-indigo-400"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              backgroundSize: '200% auto',
              backgroundImage: 'linear-gradient(90deg, #4F46E5, #A78BFA, #4F46E5)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            About Me
          </motion.span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
          <img
              src="/images/p1.jpeg"
              alt="DevOps Engineer"
              className="rounded-xl shadow-xl dark:shadow-indigo-500/20"
            />
          </div>
          <div className="text-justify"> {/* Add text-justify class here */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            🚀 Hello! I'm Saime Shaikh, a tech-driven innovator and final-year BTech student specializing in Cloud Computing at Ajeenkya DY Patil University, Pune. My expertise lies in DevOps, cloud technologies, and automation, where I craft scalable and resilient infrastructures.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              My passion lies in building scalable and efficient cloud infrastructure. My future goal is to become a skilled DevOps
              Engineer, contributing to innovative cloud solutions and enhancing deployment automation. I'm always eager to learn,
              collaborate, and grow in the ever-evolving tech landscape.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            🎯 My ultimate goal? To become a skilled DevOps Engineer, contributing to cutting-edge cloud solutions that transform the way businesses operate. I’m always eager to learn, collaborate, and push boundaries in the fast-paced world of technology.

🤝 Let’s connect and create something remarkable together!
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">3 Months </p>
                <p className="text-gray-600 dark:text-gray-300">June 5, 2024 – Aug 30, 2024</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">SmartED</h3>
                <p className="text-gray-600 dark:text-gray-300">Cloud Computing Intern</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
