import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  const buttonStyle = {
    backgroundImage: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)",
    backgroundSize: "200% 200%",
    animation: "gradientAnimation 3s linear infinite",
    color: 'white',
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

  const styleTag = document.createElement('style');
  styleTag.textContent = keyframesStyle;

  if (!document.head.querySelector('style[data-gradient-animation]')) {
    styleTag.setAttribute('data-gradient-animation', 'true');
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
              Cloud Computing & DevOps Enthusiast...!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="/images/Saime_Resume.pdf"
                download
                className="px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={buttonStyle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={buttonStyle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </div>

          {/* Custom SVG Card */}
          <motion.div
            className="flex-1 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            dangerouslySetInnerHTML={{
              __html: `
               <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_105_284)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H50V50H0V0ZM100 50H50V100H0V150H50V200H100V150H150V200H200V150H150V100H200V50H150V0H100V50ZM100 100H150V50H100V100ZM100 100V150H50V100H100Z" fill="url(#paint0_linear_105_284)"/> </g> <defs> <linearGradient id="paint0_linear_105_284" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF"/> <stop offset="1" stop-color="#F3ACFF"/> </linearGradient> <clipPath id="clip0_105_284"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
              `,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
