import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Application Observability Using Prometheus and Grafana",
    description:
      "Observability helps teams understand system behavior through logs, metrics, and traces, making debugging easier.",
    link: "https://github.com/SaimShaikh/observability-",
    image: "/images/ober.png",
  },
  {
    title: "Automated Kubernetes Deployment",
    description:
      "Orchestrated deployments via Kubernetes Dashboard ensuring efficient resource utilization.",
    link: "https://github.com/SaimShaikh/Bank-Application-Deployment-using-DevSecOps-on-AWS-EKS",
    image: "/images/cbank.png",
  },
  {
    title: "WanderLust Blog Web-Application",
    description:
      "A simple MERN travel blog website to help developers contribute to open-source and upskill in React.",
    link: "https://github.com/SaimShaikh/Wanderlust-Mega-Project",
    image: "/images/wunder.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Animated Gradient Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          animate={{
            backgroundSize: ["200% 200%", "300% 300%", "200% 200%"],
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Featured Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                scale={1.02}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="rounded-xl"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                  {/* Neon Glow Border on Hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-all duration-300"></div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-xl transition-all duration-300 hover:brightness-110 hover:contrast-125"
                  />

                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-all duration-300 hover:text-indigo-400 hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline transition-all duration-300 hover:text-indigo-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                      onClick={() => console.log(`Opening: ${project.link}`)}
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="flex justify-center mt-8">
          <motion.a
            href="https://github.com/SaimShaikh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(99,102,241,0.9)",
            }}
            transition={{ duration: 0.3 }}
            className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-500 transition-all"
          >
            View More on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
