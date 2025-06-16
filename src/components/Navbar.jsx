import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const controls = useAnimation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mobile menu and body overflow
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Particle animation
  useEffect(() => {
    controls.start(i => ({
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

  // Navigation links with icons
  const navLinks = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaCode /> },
    { name: "Experience", href: "#experience", icon: <FaBriefcase /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  // Social links
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/bhargavi-kommi-481199293/",  icon: <FaLinkedin /> },
    { name: "GitHub", href: "https://github.com/bhargavikommi17",  icon: <FaGithub /> }
  ];

  // Scroll to section smoothly
  const handleNavClick = (href, e) => {
    if (e) e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <>
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

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-gradient-to-b from-gray-900/90 via-gray-800/90 to-black/90 shadow-lg backdrop-blur-md" 
            : "bg-gradient-to-b from-gray-900/70 via-gray-800/70 to-black/70 backdrop-blur-md"
        }`}
        ref={menuRef}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <motion.span
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-pink-400 text-xl"
                  >
                    <FaXmark className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-pink-400 text-xl"
                  >
                    <FaBars className="w-6 h-6" />
                  </motion.span>
                )}
              </button>
            </div>

            {/* Logo / Name */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent font-serif tracking-tight">
                Bhargavi Kommi
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="relative group font-medium font-serif"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-pink-300 group-hover:text-pink-100 transition-colors flex items-center">
                    {link.icon && <span className="mr-2">{link.icon}</span>}
                    {link.name}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
              <motion.button
                onClick={(e) => handleNavClick("#contact", e)}
                className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-medium flex items-center shadow-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="mr-2" />
                Contact Me
              </motion.button>
              <div className="flex space-x-4 ml-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      y: -3, 
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-pink-300 hover:text-pink-100 transition-colors duration-300 text-xl"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden mt-2 pb-6"
              >
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={index}
                      onClick={(e) => handleNavClick(link.href, e)}
                      className="group flex items-center px-5 py-3 transition-colors duration-300 font-medium text-left bg-transparent border-none"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <span className="relative flex items-center">
                        <span className="mr-4 text-pink-400">{link.icon}</span>
                        <span className="text-lg text-pink-200 group-hover:text-pink-50 transition-colors">
                          {link.name}
                        </span>
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-pink-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                      </span>
                    </motion.button>
                  ))}
                  <div className="pt-4 flex justify-center space-x-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        whileHover={{ 
                          scale: 1.2, 
                          y: -3,
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="text-pink-300 hover:text-pink-50 transition-colors duration-300 text-2xl"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                  <motion.button
                    onClick={(e) => handleNavClick("#contact", e)}
                    className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-center font-medium text-lg flex items-center justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)"
                    }}
                  >
                    <FaEnvelope className="mr-2" />
                    Let's Connect
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;