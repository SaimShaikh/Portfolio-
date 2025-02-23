import React from 'react';
import { Github, Instagram, Linkedin, Hash } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">SS.</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Building robust DevOps solutions
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/SaimShaikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/_saimeshaikh_02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/saim-shaikh-devops/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://hashnode.com/@saimeshaikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Hash className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Saime Shaikh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;