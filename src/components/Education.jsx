import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaBrain, FaDatabase } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const education = [
    {
      degree: "Masters in Data Science",
      institution: "University of New Haven",
      period: "Jan 2023 - Dec 2024",
      location: "West Haven, CT, USA",
      description: "Specialized in data analytics, machine learning, and cloud computing with a focus on real-world data engineering applications.",
      honors: "Microsoft Certified: Azure Data Engineer Associate",
      gpa: "3.7/4",
      icon: <FaDatabase className="text-blue-400 text-xl" />
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Undergraduate University",
      period: "2015 - 2019",
      location: "Hyderabad, India",
      description: "Focused on computer science fundamentals with emphasis on database systems, distributed computing, and software engineering.",
      honors: "AWS Certified: Data Engineer Associate",
      gpa: "8.5/10",
      icon: <FaBrain className="text-purple-400 text-xl" />
    }
  ];

  const certifications = [
    { name: "Microsoft Certified: Azure Data Engineer Associate", year: "2023" },
    { name: "AWS Certified: Data Engineer Associate", year: "2023" },
    { name: "Databricks Certified Data Engineer Associate", year: "2023" },
    { name: "Google Cloud Professional Data Engineer", year: "2022" }
  ];

  const coursework = [
    "Advanced Data Analytics",
    "Big Data Technologies",
    "Cloud Data Architecture",
    "Machine Learning Engineering",
    "Data Pipeline Orchestration",
    "Data Governance & Security",
    "Distributed Systems",
    "Data Warehousing",
    "Real-time Data Processing"
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="relative min-h-screen py-28 px-4 bg-black text-white overflow-hidden">
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            My academic background and professional certifications in data engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <FaGraduationCap className="text-pink-400 mr-3 text-2xl" />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Academic Background
              </span>
            </h3>
            
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-pink-500/30 via-purple-500/30 to-transparent"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm p-6 rounded-xl shadow-lg relative pl-12 border-l-4 border-pink-500 hover:border-purple-500 transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                    {edu.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-lg font-medium text-pink-400 mb-2">{edu.institution}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <span>{edu.period}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="mb-4 text-gray-300">{edu.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center bg-pink-400/10 px-3 py-1 rounded-full border border-pink-400/20">
                      <FaAward className="text-pink-400 mr-2" />
                      <span className="text-pink-400 text-sm font-medium">{edu.honors}</span>
                    </div>
                    <div className="bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                      <span className="text-purple-400 text-sm font-medium">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <FaAward className="text-purple-400 mr-3 text-2xl" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Professional Certifications
              </span>
            </h3>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start bg-gray-700/30 p-4 rounded-lg border-l-4 border-pink-400/50 hover:border-purple-400/50 transition-all"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <span className="text-pink-400 mr-3 mt-1">▹</span>
                    <div>
                      <span className="font-medium text-white">{cert.name}</span>
                      <span className="block text-sm text-gray-400 mt-1">{cert.year}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10"
                data-aos="fade-up"
              >
                <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {coursework.map((course, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 px-3 py-2 rounded-md text-center border border-gray-700 hover:border-pink-400/30 transition-all"
                      data-aos="fade-up"
                      data-aos-delay={i * 50}
                    >
                      <span className="text-sm font-medium">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { number: "3.7", label: "GPA (Master's)", accent: "from-pink-400 to-purple-500" },
            { number: "8.5/10", label: "GPA (Bachelor's)", accent: "from-purple-400 to-indigo-500" },
            { number: "4", label: "Cloud Certifications", accent: "from-blue-400 to-cyan-500" },
            { number: "10+", label: "Data Engineering Projects", accent: "from-teal-400 to-emerald-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm p-6 rounded-xl text-center border border-gray-700 hover:border-pink-500/30 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.accent} text-3xl font-bold mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;