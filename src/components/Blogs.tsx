import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    title: 'Nginx Deployment with Kubernetes',
    description: 'Learn how to use Nginx as a load balancer and deploy it in a Kubernetes cluster.',
    date: 'Jan 31, 2025',
    readTime: '4 min read',
    link: 'https://nginx-deployment-with-kubernetes.hashnode.dev/nginx-deployment-with-kubernetes',
    image: '/images/ng.png',
  },
  {
    title: 'Micro-services vs Monolith: Choosing the Right Architecture',
    description: 'Understanding the difference between microservices and monolithic architecture.',
    date: 'March 10, 2024',
    readTime: '7 min read',
    link: 'https://microservices-vs-monolith.hashnode.dev/micro-services-vs-monolith-choosing-the-right-architectural-approach',
    image: '/images/mono.png',
  },
  {
    title: 'Comprehensive Kubernetes Notes',
    description: 'Master Kubernetes concepts with detailed notes and explanations.',
    date: 'Oct 11, 2024',
    readTime: '11 min read',
    link: 'https://kubernets-notes.hashnode.dev/comprehensive-kubernetes-notes-your-ultimate-guide-to-mastering-kubernetes-and-accelerating-your-devops-journey-from-zero-to-hero',
    image: '/images/kuber.png',
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          animate={{
            backgroundSize: ['200% 200%', '300% 300%', '200% 200%'],
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: 'linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Latest Blog Posts
        </motion.h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.9)]"
            >
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-all"></div>

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-t-xl transition-all duration-300 hover:brightness-110 hover:contrast-125"
              />

              <div className="p-6 relative z-10">
                {/* Date & Read Time */}
                <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-indigo-500" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-indigo-500" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-all duration-300 hover:text-indigo-400 hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>

                {/* Read More Button */}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline transition-all duration-300 hover:text-indigo-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More Blogs Button */}
        <div className="flex justify-center mt-10">
          <a
            href="https://hashnode.com/@saimeshaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-500 transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.9)]"
          >
            View More Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
