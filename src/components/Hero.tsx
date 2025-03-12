import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm 
              <motion.span
                className="ml-2 font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Saime Shaikh
              </motion.span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Cloud Computing & DevOps Enthusiast
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/images/Saime_Resume.pdf"
                download
                className="px-8 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="flex-1">
            <img
              src="/images/myavtar.png"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
