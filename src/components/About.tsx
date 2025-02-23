import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="./images/mypic.jpg"
              alt="DevOps Engineer"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Hi, I'm Saime Shaikh, a final-year BTech student specializing in Cloud Computing at Ajeenkya DY Patil University, Pune. I have a strong foundation in DevOps, cloud technologies, and automation, with hands-on experience in tools like Linux, Docker, Kubernetes, Jenkins, Terraform, and AWS. 
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            My passion lies in building scalable and efficient cloud infrastructure. My future goal is to become a skilled DevOps Engineer, contributing to innovative cloud solutions and enhancing deployment automation. I'm always eager to learn, collaborate, and grow in the ever-evolving tech landscape
            </p>
            {/* <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">5+ Years</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Projects</h3>
                <p className="text-gray-600 dark:text-gray-300">50+ Completed</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;