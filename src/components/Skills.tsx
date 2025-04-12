import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // 👈 Import Tilt

import { 
  SiAmazon, SiDocker, SiJenkins, SiTerraform, SiPython, 
  SiGit, SiGithub, SiKubernetes, SiAnsible, SiGrafana, SiBlogger
} from 'react-icons/si';
import { FaLinux } from 'react-icons/fa';

const skills = [
  { name: 'AWS', icon: <SiAmazon className="text-yellow-500" />, category: 'Cloud Platform' },
  { name: 'Docker', icon: <SiDocker className="text-blue-500" />, category: 'Containerization' },
  { name: 'Jenkins', icon: <SiJenkins className="text-red-500" />, category: 'CI/CD' },
  { name: 'Terraform', icon: <SiTerraform className="text-purple-500" />, category: 'IaC' },
  { name: 'Linux', icon: <FaLinux className="text-black dark:text-white" />, category: 'Operating System' },
  { name: 'Python', icon: <SiPython className="text-yellow-400" />, category: 'Programming' },
  { name: 'Git', icon: <SiGit className="text-orange-500" />, category: 'Version Control' },
  { name: 'GitHub', icon: <SiGithub className="text-black dark:text-white" />, category: 'Version Control & SCM' },
  { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" />, category: 'Container Orchestration' },
  { name: 'Ansible', icon: <SiAnsible className="text-red-600" />, category: 'Configuration Management' },
  { name: 'Grafana', icon: <SiGrafana className="text-orange-400" />, category: 'Visualization' },
  { name: 'Blog Writing', icon: <SiBlogger className="text-orange-500" />, category: 'Social Media' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white bg-clip-text text-transparent"
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
          Technical Skills
        </motion.h2>

        {/* Skill Cards with Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              key={index}
            >
              <motion.div
                className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all hover:shadow-neon"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  {skill.category}
                </p>

                {/* Optional neon border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-all"></div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
