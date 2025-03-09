import React from 'react';
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Latest Blog Posts
        </h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all transform
                         hover:scale-105 hover:shadow-[0_0_15px_rgba(99,102,241,0.8)]"
            >
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent
                              hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.8)]
                              transition-all"></div>

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-xl transition-all duration-300
                           hover:brightness-110 hover:contrast-125"
              />

              <div className="relative z-10">
                {/* Date & Read Time */}
                <div className="flex items-center justify-between mt-4 mb-2 text-gray-500 dark:text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-indigo-500" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-indigo-500" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-all duration-300
                               hover:text-indigo-400 hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{post.description}</p>

                {/* Read More Button */}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-indigo-600 dark:text-indigo-400 
                             hover:underline transition-all duration-300
                             hover:text-indigo-300 hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View More Blogs Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://hashnode.com/@saimeshaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md 
                       hover:bg-indigo-500 transition-all
                       hover:shadow-[0_0_15px_rgba(99,102,241,0.9)]"
          >
            View More Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
