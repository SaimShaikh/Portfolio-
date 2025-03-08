import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Instagram, Linkedin, Hash } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a dark mode preference saved
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    // Update dark mode class and save preference
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">SS.</h1>
          <div className="flex items-center gap-6">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-gray-200" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
            <div className="flex gap-4">
              <a href="https://github.com/SaimShaikh" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/_saimeshaikh_02/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/saim-shaikh-devops/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://hashnode.com/@saimeshaikh" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Hash className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Blogs />
        <Contact />
      </main>


      <Footer />
    </div>
  );
}

export default App;