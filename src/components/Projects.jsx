import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChartPie,
  FaBrain,
  FaHandshake,
  FaDatabase
} from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const controls = useAnimation();

  const projectFilters = ["All", "Data Science", "Machine Learning", "Computer Vision"];

  const projects = [
    {
      title: "Edu-Predict MVP Tool",
      description:
        "A Power BI and ML-based tool to predict student outcomes, identify at-risk learners, and improve performance with 85% accuracy using ensemble methods.",
      tags: ["Data Science", "Machine Learning"],
      github: "https://github.com/bhargavikommi17/Enrollments-trends-Higher-Education",
      icon: <FaChartPie className="text-2xl text-yellow-500" />,
      bgColor: "from-amber-900/40 to-amber-900/10",
      borderColor: "border-amber-500/20",
      aosDelay: 100
    },
    {
      title: "Automated Parking Tracker",
      description:
        "A deep learning-based system using YOLOv5 and OpenCV to monitor parking spot occupancy in real-time with 92% detection accuracy.",
      tags: ["Machine Learning", "Computer Vision"],
      github: "https://github.com/bhargavikommi17/Automated-Parking-Status-Tracker-Using-Deep-Learning-main",
      icon: <SiTensorflow className="text-2xl text-orange-400" />,
      bgColor: "from-teal-900/40 to-teal-900/10",
      borderColor: "border-teal-500/20",
      aosDelay: 200
    },
    {
      title: "Restaurant Menu Optimization",
      description:
        "NLP system analyzing 10K+ customer reviews using BERT to optimize restaurant menus, increasing satisfaction by 30%.",
      tags: ["NLP", "Machine Learning", "Data Analysis"],
      github: "https://github.com/bhargavikommi17/Restaurant-Menu-Optimization-using-NLP-main",
      icon: <FaBrain className="text-2xl text-teal-400" />,
      bgColor: "from-purple-900/40 to-purple-900/10",
      borderColor: "border-purple-500/20",
      aosDelay: 300
    }
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

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
      boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
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

  const dataPointVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.3,
      }
    })
  };

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

  return (
    <section
      id="projects"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            A collection of my data science, machine learning, and data engineering projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectFilters.map((filter, index) => (
            <motion.button
              key={index}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-md font-medium transition-colors relative overflow-hidden ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white/50"
                  custom={i}
                  variants={dataPointVariants}
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                />
              ))}
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(244, 114, 182, 0.1)",
              }}
              className={`bg-gradient-to-br ${project.bgColor} backdrop-blur-sm rounded-xl p-6 border ${project.borderColor} hover:border-pink-400/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-white/10 flex items-center justify-center border border-gray-700">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-200">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-800 text-gray-200 text-sm rounded-full border border-gray-700"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              <div className="mt-auto">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-3 rounded-lg transition-colors border border-gray-700 relative overflow-hidden"
                >
                  {[0, 1, 2, 3].map((i) => (
                    <motion.span
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-white/50"
                      custom={i}
                      variants={dataPointVariants}
                      style={{
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`,
                      }}
                    />
                  ))}
                  <FaGithub /> View Code
                  <FaExternalLinkAlt className="text-xs" />
                  <motion.span
                    className="ml-2"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <FaDatabase className="text-white" />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-4">Have a project in mind?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm available for freelance work and collaborations. Let's build something amazing together!
          </p>
          <motion.a
            href="#contact"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-md shadow-lg relative overflow-hidden"
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/50"
                custom={i}
                variants={dataPointVariants}
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
              />
            ))}
            <FaHandshake className="mr-2" />
            Let's Collaborate
            <motion.span
              className="ml-2"
              animate={{
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <FaBrain className="text-white" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;