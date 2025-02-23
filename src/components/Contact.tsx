import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import Swal from 'sweetalert2'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ success: false, message: '' });

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const formDataWithAccessKey = new FormData();
    formDataWithAccessKey.append("access_key", "3ae7327b-340d-430c-8654-0294fcfa5c0d");
    formDataWithAccessKey.append("name", formData.name);
    formDataWithAccessKey.append("email", formData.email);
    formDataWithAccessKey.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataWithAccessKey,
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire({
          title: "Good job ☺️ ",
          text: "Thanks for reaching out!",
          icon: "success"
        });
      } else {
        setStatus({ success: false, message: "Something went wrong. Try again!" });
      }
    } catch (error) {
      setStatus({ success: false, message: "Network error. Try again later!" });
    }
  };

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="your-web3forms-access-key" />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
              {status.message && (
                <p className={`mt-3 text-sm ${status.success ? "text-green-500" : "text-red-500"}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <a href="mailto:shaikhsaime02@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                    shaikhsaime02@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-gray-600 dark:text-gray-300">Pune, India</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Connect with Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to reach out for collaborations, consulting opportunities, or just to say hello. I'm always excited to connect with fellow technology enthusiasts and professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
