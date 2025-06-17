import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaArrowUp,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaRocket
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`https://api.web3forms.com/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const confettiColors = [
    "text-pink-400",
    "text-purple-400",
    "text-indigo-400",
    "text-teal-400",
    "text-yellow-400",
    "text-red-400",
  ];

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.05,
      backgroundPosition: "100% 50%",
      boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.2,
      },
    },
  };

  const rocketAnimation = {
    initial: { x: -100, y: 100, rotate: -45, opacity: 0 },
    animate: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3,
      },
    },
    exit: {
      x: 200,
      y: -200,
      rotate: 45,
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const confettiAnimation = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      y: [0, -100],
      x: [0, (i % 2 === 0 ? 1 : -1) * Math.random() * 100],
      scale: [1, 0],
      transition: {
        duration: 1.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="contact" className="relative min-h-screen py-28 px-4 bg-black text-white overflow-hidden">
      {/* Floating Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0.3 }}
          animate={{
            y: [null, Math.random() * -200, null],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
        />
      ))}

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Contact Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {/* Email Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-pink-500 transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaEnvelope className="text-2xl text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Email</h3>
            <p className="text-gray-400 mb-4 text-center">Send me a message directly</p>
            <motion.a
              href="mailto:chimpirivinodhkumar@gmail.com"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="block w-max mx-auto px-6 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400 text-pink-400 rounded-md hover:bg-pink-400/20 transition-colors"
            >
              Email Me
            </motion.a>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMapMarkerAlt className="text-2xl text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Location</h3>
            <p className="text-gray-400 mb-4 text-center">Based in New York, USA</p>
          </motion.div>

          {/* Social Media Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaLinkedin className="text-2xl text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Social Media</h3>
            <p className="text-gray-400 mb-4 text-center">Connect with me online</p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/bhargavi-kommi-481199293/"
                target="_blank"
                whileHover={{ y: -5, scale: 1.2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://github.com/bhargavikommi17"
                target="_blank"
                whileHover={{ y: -5, scale: 1.2 }}
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://x.com/bhargavi_k40370"
                target="_blank"
                whileHover={{ y: -5, scale: 1.2 }}
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                <FaXTwitter className="text-xl" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={confettiAnimation}
                  className={`absolute text-2xl ${
                    confettiColors[i % confettiColors.length]
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  {i % 3 === 0 ? "✦" : i % 3 === 1 ? "✧" : "❋"}
                </motion.div>
              ))}
            </div>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={rocketAnimation}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <FaRocket className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 left-0 right-0 h-2 bg-pink-400/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: 1,
                    opacity: [1, 0.5, 0],
                    transition: {
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      duration: 1.5,
                      ease: "easeOut",
                    },
                  }}
                />
              </div>
            </motion.div>

            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"
            >
              Message Sent!
            </motion.h3>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 mb-8 max-w-md mx-auto"
            >
              Thank you for reaching out! I'll get back to you as soon as possible.
            </motion.p>

            <motion.button
              onClick={() => setSubmitStatus(null)}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md text-white font-medium hover:from-pink-600 hover:to-purple-700 transition-all"
            >
              Send Another Message
            </motion.button>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-4 bg-gradient-to-r from-red-900/20 to-red-800/20 text-red-400 rounded-md border border-red-400/30"
          >
            Please fill in all required fields before submitting.
          </motion.div>
        )}

        {/* Contact Form */}
        {submitStatus !== "success" && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
                Send Me a Message
              </h2>
              <p className="text-center text-gray-400 mb-8">
                Fill out the form below and I'll get back to you soon
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    required
                  />
                </motion.div>

                {/* Phone Field - Added */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                  />
                </motion.div>

                {/* Subject Field - Added */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    required
                  />
                </motion.div>
              </div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello! I'd love to connect..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                  required
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={!isSubmitting ? "hover" : {}}
                  whileTap={!isSubmitting ? "tap" : {}}
                  className={`px-8 py-3 rounded-md font-bold flex items-center justify-center mx-auto ${
                    isSubmitting
                      ? "bg-gradient-to-r from-pink-500/50 to-purple-500/50"
                      : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  } text-white shadow-lg hover:shadow-pink-500/20 transition-all`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default Contact;