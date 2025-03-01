import React from 'react';

const blogPosts = [
  {
    title: 'Nginx Deployment with Kubernetes',
    description: 'It works as a load balancer by distributing incoming traffic across multiple instances, preventing overload on any one service.',
    date: 'Jan 31, 2025',
    readTime: '4 min read',
    link: 'https://nginx-deployment-with-kubernetes.hashnode.dev/nginx-deployment-with-kubernetes',
  },
  {
    title: 'Micro-services vs Monolith: Choosing the Right Architectural Approach',
    description: 'Essential best practices for managing infrastructure using Terraform.',
    date: 'March 10, 2024',
    readTime: '7 min read',
    link: 'https://microservices-vs-monolith.hashnode.dev/micro-services-vs-monolith-choosing-the-right-architectural-approach',
  },
  {
    title: 'Comprehensive Kubernetes Notes',
    description: 'Automatic Scaling 📈 No need to manually add more servers when your app gets busy! Kubernetes automatically scales your app up or down depending on how much traffic or load its handling, so you’re always prepared.',
    date: 'Oct 11, 2024',
    readTime: '11 min read',
    link: 'https://kubernets-notes.hashnode.dev/comprehensive-kubernetes-notes-your-ultimate-guide-to-mastering-kubernetes-and-accelerating-your-devops-journey-from-zero-to-hero',
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://hashnode.com/@saimeshaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            View More Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
