import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/bhargavi-kommi-481199293/",
      name: "LinkedIn"
    },
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/bhargavikommi17",
      name: "GitHub"
    },
    {
      icon: <FaXTwitter className="text-xl" />,
      url: "https://x.com/bhargavi_k40370",
      name: "X (Twitter)"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:kommibhargavi7@gmail.com",
      name: "Email"
    }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "backOut" },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)", // Changed to pink
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  // Create floating particles
  const particles = Array(30).fill().map((_, i) => {
    const size = Math.random() * 3 + 1;
    const delay = Math.random() * 5;
    const duration = 10 + Math.random() * 10;
    
    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0.1
        }}
        animate={{
          y: [0, -100],
          x: [0, Math.random() * 100 - 50],
          opacity: [0.1, 0.5, 0]
        }}
        transition={{
          delay,
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      />
    );
  });

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Floating particles */}
        {particles}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          className="flex flex-col items-center"
          data-aos="fade-up"
        >
          {/* Social Links */}
          <motion.div className="flex space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.2,
                  color: "#ec4899" // pink-500
                }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 transition-colors duration-300"
                aria-label={social.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.p 
            custom={socialLinks.length}
            variants={itemVariants}
            className="text-sm text-gray-400 mb-4"
            data-aos="fade-up"
            data-aos-delay={socialLinks.length * 100}
          >
            © {new Date().getFullYear()} Bhargavi Kommi. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;