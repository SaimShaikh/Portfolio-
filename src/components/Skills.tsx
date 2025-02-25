import React from 'react';

const skills = [
  { name: 'AWS', level: 'Expert', category: 'Cloud Platform' },
  { name: 'Docker', level: 'Expert', category: 'Containerization' },
  { name: 'Jenkins', level: 'Expert', category: 'CI/CD' },
  { name: 'Terraform', level: 'Advanced', category: 'IaC' },
  { name: 'Linux', level: 'Expert', category: 'Operating System' },
  { name: 'Python', level: 'Advanced', category: 'Programming' },
  { name: 'Git', level: 'Expert', category: 'Version Control' },
  { name: 'GitHub', level: 'Expert', category: 'Version Control & SCM' },
  { name: 'Kubernetes', level: 'Expert', category: 'Container Orchestration' },
  { name: 'Ansible', level: 'Expert', category: 'Configuration Management' },
  { name: 'Grafana', level: 'Expert', category: 'Visualization' },
  { name: 'Blog Writer', level: 'Expert', category: 'Social Media' },

];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;