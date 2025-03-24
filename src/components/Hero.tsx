import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  const buttonStyle = {
    backgroundImage: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)",
    backgroundSize: "200% 200%",
    animation: "gradientAnimation 3s linear infinite",
  };

  const cardStyle = {
    backgroundImage: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)", // Adjusted gradient
    backgroundSize: "200% 200%",
    animation: "gradientAnimation 5s linear infinite", // Adjusted duration
    color: 'white'
  };

  const keyframesStyle = `
    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;

  // Dynamically create the style tag to inject into the head
  const styleTag = document.createElement('style');
  styleTag.textContent = keyframesStyle;

  // Only append the style tag once
  if (!document.head.querySelector('style[data-gradient-animation]')) {
    styleTag.setAttribute('data-gradient-animation', 'true'); // Prevent multiple appends
    document.head.appendChild(styleTag);
  }

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
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
              <motion.a
                href="/images/Saime_Resume.pdf"
                download
                className="px-8 py-3 text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={buttonStyle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>
          </div>

          {/* Muhammad Ali Tribute Card (Reduced Size) */}
          <motion.div
            className="flex-1 max-w-sm mx-auto p-6 rounded-lg shadow-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={cardStyle} // Apply cardStyle
          >
            {/* Quote */}
            <p className="text-xl font-semibold mb-4">
            "If my mind can conceive it, and my heart can believe it - then I can achieve it."
            </p>

            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                className="h-24 w-24 rounded-full border-4 border-white shadow-lg"
                src="/images/ali.jpeg"
                alt="Muhammad Ali"
              />
            </div>

            {/* Biography */}
            <p className="text-sm mb-2">
              Muhammad Ali (Jan 17, 1942 – June 3, 2016) 
            </p>
            <p className="text-sm italic">"Float like a butterfly, sting like a bee."</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;