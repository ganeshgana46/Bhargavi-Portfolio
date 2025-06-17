import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPython, FaAws } from "react-icons/fa";
import { SiApachespark, SiDatabricks, SiTableau } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const About = () => {
  const controls = useAnimation();
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "2", label: "Certifications" },
    { value: "100+", label: "Data Sources" },
  ];

  // Tech logos for the cloud carousel
  const techLogos = [
    { icon: <FaPython className="text-3xl text-blue-400" />, name: "Python" },
    { icon: <FaAws className="text-3xl text-orange-400" />, name: "AWS" },
    {
      icon: <VscAzureDevops className="text-3xl text-blue-500" />,
      name: "Azure",
    },
    { icon: <SiTableau className="text-3xl text-blue-500" />, name: "Tableau" },
    {
      icon: <SiApachespark className="text-3xl text-red-500" />,
      name: "Spark",
    },
    {
      icon: <SiDatabricks className="text-3xl text-blue-300" />,
      name: "Databricks",
    },
  ];

  // State for the current logo index
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  // Auto-rotate logos every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) =>
        prevIndex === techLogos.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
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

  return (
    <section
      id="about"
      className="relative min-h-screen py-28 px-4 bg-black text-white overflow-hidden"
    >
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              About
            </span>{" "}
            Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            Seasoned Data Engineer with expertise in cloud-native data solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section with Rotating Logos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="order-1 lg:order-1 flex justify-center relative lg:pr-20 pr-30"
          >
            {/* Circular Profile Image - Responsive sizing */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-70 h-80 md:w-100 md:h-120 border-0"
            >
              <img
                src="/bk1.png"
                alt="Bhargavi Kommi"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-md -z-10"
            />
            {/* Thought Cloud */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute right-10 lg:right-25 top-1/6 transform -translate-y-1/2"
            >
              <div className="relative">
                {/* Cloud shape */}
                <div className="bg-white rounded-full p-4 w-24 h-20 lg:w-35 lg:h-25 flex items-center justify-center shadow-lg">
                  <div className="absolute -left-4 bottom-4 w-8 h-8 bg-white rounded-full"></div>
                  <div className="absolute -left-2 bottom-8 w-6 h-6 bg-white rounded-full"></div>
                  <div className="absolute right-4 top-2 w-6 h-6 bg-white rounded-full"></div>
                  <div className="absolute right-2 top-6 w-4 h-4 bg-white rounded-full"></div>

                  {/* Cloud tail */}
                  <div className="absolute -left-4 bottom-6 w-6 h-6 bg-white transform rotate-45"></div>

                  {/* Logo carousel inside cloud */}
                  <motion.div
                    key={currentLogoIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 flex flex-col items-center justify-center"
                  >
                    {techLogos[currentLogoIndex].icon}
                    <span className="text-xs text-gray-800 font-medium mt-1">
                      {techLogos[currentLogoIndex].name}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              Who am I?
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              I'm Bhargavi Kommi, a Senior Data Engineer with over 5 years of
              experience delivering robust, scalable, and cloud-native data
              solutions across Azure and AWS ecosystems. I specialize in
              building real-time and batch data pipelines using tools like Azure
              Data Factory, AWS Glue, Apache Spark, and Databricks.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">
              My expertise includes implementing secure, cost-efficient
              architectures for clients in finance and e-commerce, enabling
              AI/ML workflows with clean datasets, and establishing data
              governance standards. I'm passionate about mentoring junior
              engineers and driving data engineering best practices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px -5px rgba(236, 72, 153, 0.3)",
                  }}
                  className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700 hover:border-pink-500/50 transition-all backdrop-blur-sm"
                >
                  <h4 className="text-xl font-bold text-pink-400">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;