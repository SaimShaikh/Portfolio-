import React, { useState } from "react";
import { Mail, MapPin, MessageCircle, Briefcase, Info } from "lucide-react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", linkedin: "", message: "" });
  const [status, setStatus] = useState({ success: false, message: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formDataWithAccessKey = new FormData();
    formDataWithAccessKey.append("access_key", "3ae7327b-340d-430c-8654-0294fcfa5c0d");
    formDataWithAccessKey.append("name", formData.name);
    formDataWithAccessKey.append("email", formData.email);
    formDataWithAccessKey.append("linkedin", formData.linkedin);
    formDataWithAccessKey.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataWithAccessKey,
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire({ title: "Good job ☺️", text: "Thanks for reaching out!", icon: "success" });
      } else {
        setStatus({ success: false, message: "Something went wrong. Try again!" });
      }
    } catch (error) {
      setStatus({ success: false, message: "Network error. Try again later!" });
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          animate={{ backgroundSize: ["200% 200%", "300% 300%", "200% 200%"], backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{ backgroundImage: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)", backgroundSize: "200% 200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          Get in Touch
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Why Contact Me & Contact Info Combined */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Why Contact Me?</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-600 dark:text-gray-300">Have questions about DevOps, Kubernetes, or AWS?</span>
              </li>
              <li className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-600 dark:text-gray-300">Looking for a skilled fresher in DevOps?</span>
              </li>
              <li className="flex items-center space-x-2">
                <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-600 dark:text-gray-300">Want to discuss collaborations?</span>
              </li>
            </ul>
            <hr className="my-4 border-gray-300 dark:border-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <a href="mailto:shaikhsaime02@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">shaikhsaime02@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-600 dark:text-gray-300">Pune, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col h-full">
            <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1" >Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">LinkedIn URL</label>
                <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm" required></textarea>
              </div>
              <button type="submit" className="w-full px-4 py-2 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors" style={{ backgroundImage: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)", backgroundSize: "200% auto" }}>Send Message</button>
              {status.message && <p className={`mt-2 text-xs ${status.success ? "text-green-500" : "text-red-500"}`}>{status.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
