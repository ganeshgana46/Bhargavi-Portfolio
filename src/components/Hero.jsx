import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const controls = useAnimation();
  const imageRef = useRef(null);

  // Handle smooth scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle click outside modal
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  // Lock scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Particle animation
  useEffect(() => {
    controls.start((i) => ({
      y: [0, -10, 0],
      opacity: [0.2, 0.6, 0.2],
      transition: {
        delay: i * 0.5,
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }));
  }, [controls]);

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "backOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    tap: { scale: 0.98 },
  };

  // Social links
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bhargavi-kommi-481199293/",
      icon: <FaLinkedin className="text-2xl" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/bhargavikommi17",
      icon: <FaGithub className="text-2xl" />,
    },
    {
      name: "Email",
      href: "mailto:kommibhargavi7@gmail.com",
      icon: <FaEnvelope className="text-2xl" />,
    },
  ];

  // Contact info
  const contactInfo = [
    { icon: <FaPhone className="text-pink-400" />, text: "+1 (203) 822-7693" },
    {
      icon: <FaEnvelope className="text-pink-400" />,
      text: "kommibhargavi7@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-pink-400" />,
      text: "New York, USA",
    },
  ];

  // Mock resume download handler
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "BhargaviKommi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Image hover animation
  const imageVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        y: {
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  // Floating animation for the image container
  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Modal for Resume */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  My Resume
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white focus:outline-none transition-colors"
                >
                  ✖
                </button>
              </div>
              <div className="p-4">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-[70vh] border border-gray-700 rounded bg-gray-900"
                  title="Resume PDF Viewer"
                />
              </div>
              <div className="p-4 border-t border-gray-700 flex justify-center bg-gray-900">
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleDownload}
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-md flex items-center shadow-lg relative overflow-hidden"
                >
                  📄 Download Resume
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Section */}
      <section
        id="home"
        className="relative min-h-screen py-28 px-4 bg-black text-white overflow-hidden"
      >
        {/* Floating Glowing Orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        ></motion.div>

        {/* Subtle Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
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

        <div className="container mx-auto relative z-10 lg:pl-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text & Info */}
            <div className="order-2 md:order-1">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-pink-400 font-mono text-lg mb-2"
              >
                Hi, I'm
              </motion.h4>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                Bhargavi Kommi
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6"
              >
                Senior Data Engineer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg mb-8 max-w-lg text-gray-300"
              >
                Seasoned Data Engineer with over 5 years of experience
                delivering robust, scalable, and cloud-native data solutions
                across Azure and AWS ecosystems.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mb-8"
              >
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center mb-2 text-gray-300"
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span className="ml-2">{item.text}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={scrollToContact}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-md flex items-center shadow-lg"
                >
                  💬 Let's Talk
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-md flex items-center shadow-lg"
                >
                  📄 View Resume
                </motion.button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-pink-400 hover:text-pink-200 transition-colors duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={floatVariants}
              className="order-1 md:order-2 flex justify-center relative"
            >
              {/* Pink background element placed BEHIND the image */}
              <motion.div
                className="absolute -z-10 w-[110%] h-[110%] rounded-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 blur-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>

              {/* Image container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-120 lg:h-120 rounded-full overflow-hidden border-4 border-pink-500/30 shadow-2xl"
                variants={imageVariants}
                whileHover="hover"
                ref={imageRef}
              >
                <motion.img
                  src="/bk_photo.png"
                  alt="Bhargavi Kommi"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-0 rounded-full border-2 border-pink-400/30 pointer-events-none"
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {[
              { number: "5+", label: "Years Experience" },
              { number: "Azure", label: "Data Engineer" },
              { number: "AWS", label: "Certified" },
              { number: "Spark", label: "Specialty" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg text-center border border-gray-700 hover:border-pink-500/50 transition-all"
              >
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 text-2xl font-bold">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;