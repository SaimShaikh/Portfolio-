import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Saime Shaikh</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Cloud Computing & DevOps Enthusiast

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              
              <a
                href="/images/Saime-Shaikh-Devops.pdf"
                download
                className="px-8 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
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