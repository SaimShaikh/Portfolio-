import React, { useState } from "react";
import { Mail, MapPin, MessageCircle, Briefcase, Info } from "lucide-react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

interface FormDataType {
  name: string;
  email: string;
  linkedin: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    linkedin: "",
    message: "",
  });

  const [status, setStatus] = useState<{ success: boolean; message: string }>({
    success: false,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDataWithAccessKey = new FormData();
    formDataWithAccessKey.append("access_key", "add your_access_key_here");
    Object.entries(formData).forEach(([key, value]) =>
      formDataWithAccessKey.append(key, value)
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataWithAccessKey,
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire({
          title: "Good job ☺️",
          text: "Thanks for reaching out!",
          icon: "success",
        });
        setFormData({ name: "", email: "", linkedin: "", message: "" });
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({ success: false, message: "Something went wrong. Try again!" });
      }
    } catch (error) {
      setStatus({ success: false, message: "Network error. Try again later!" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ success: false, message: "" }), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          animate={{
            backgroundSize: ["200% 200%", "300% 300%", "200% 200%"],
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <motion.div
            className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Why Reach Out?</h3>
            <ul className="space-y-5 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                Curious about DevOps, Kubernetes, or AWS?
              </li>
              <li className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                Hiring a passionate DevOps fresher?
              </li>
              <li className="flex items-center gap-3">
                <Info className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                Brainstorming tech collaborations?
              </li>
            </ul>
            <div className="border-t border-gray-300 dark:border-gray-600 my-6"></div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Contact Info</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <a href="mailto:shaikhsaime02@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  shaikhsaime02@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                Pune, India
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {["name", "email", "linkedin"].map((field, idx) => (
                <div key={idx}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 dark:text-gray-300 capitalize mb-1">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    id={field}
                    aria-label={field}
                    value={formData[field as keyof FormDataType]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                    placeholder={`Enter your ${field}`}
                    required
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  aria-label="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
                  placeholder="Let's talk..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="w-full py-3 font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm shadow-lg transition-all duration-300 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              {status.message && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-xs mt-2 ${status.success ? "text-green-500" : "text-red-500"}`}
                >
                  {status.message}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
