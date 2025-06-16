import React from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

const PhoneButton = () => {
  const phoneVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <motion.a
      href="tel:+12038227693" // Replace with your phone number
      className="fixed bottom-6 right-6 z-50"
      variants={phoneVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      aria-label="Call me"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-pink-500 rounded-full opacity-20 animate-ping"></div>
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg text-white">
          <FaPhone className="text-xl" />
        </div>
      </div>
    </motion.a>
  );
};

export default PhoneButton;