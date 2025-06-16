import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPython, FaAws, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { 
  SiApachespark, 
  SiDatabricks,  
  SiApachekafka, 
  SiSnowflake,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiApachehadoop,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const Skills = () => {
  const controls = useAnimation();
  const skillsCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        {
          name: "Azure",
          icon: <VscAzure className="text-2xl text-blue-400" />,
        },
        {
          name: "AWS",
          icon: <FaAws className="text-2xl text-orange-400" />,
        },
        {
          name: "Databricks",
          icon: <SiDatabricks className="text-2xl text-blue-300" />,
        },
        {
          name: "Azure Data Factory",
          icon: <VscAzureDevops className="text-2xl text-blue-500" />,
        },
        {
          name: "AWS Glue",
          icon: <FaAws className="text-2xl text-yellow-400" />,
        },
      ],
      bgColor: "from-blue-900/30 to-blue-900/10",
      borderColor: "border-blue-500/20",
      hoverBorderColor: "hover:border-blue-400/40",
    },
    {
      title: "Data Engineering",
      icon: "📊",
      skills: [
        {
          name: "Apache Spark",
          icon: <SiApachespark className="text-2xl text-red-500" />,
        },
        {
          name: "PySpark",
          icon: <FaPython className="text-2xl text-blue-400" />,
        },
        {
          name: "Kafka",
          icon: <SiApachekafka className="text-2xl text-white" />,
        },
        {
          name: "Delta Lake",
          icon: <SiDatabricks className="text-2xl text-blue-200" />,
        },
        {
          name: "dbt",
          icon: <FaDatabase className="text-2xl text-orange-300" />,
        },
      ],
      bgColor: "from-purple-900/30 to-purple-900/10",
      borderColor: "border-purple-500/20",
      hoverBorderColor: "hover:border-purple-400/40",
    },
    {
      title: "Data Warehousing",
      icon: "🗄️",
      skills: [
        {
          name: "Snowflake",
          icon: <SiSnowflake className="text-2xl text-blue-200" />,
        },
        {
          name: "Azure Synapse",
          icon: <VscAzure className="text-2xl text-blue-400" />,
        },
        {
          name: "Redshift",
          icon: <FaAws className="text-2xl text-red-400" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-2xl text-blue-500" />,
        },
        {
          name: "Hadoop/Hive",
          icon: <SiApachehadoop className="text-2xl text-yellow-500" />,
        },
      ],
      bgColor: "from-green-900/30 to-green-900/10",
      borderColor: "border-green-500/20",
      hoverBorderColor: "hover:border-green-400/40",
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-2xl text-red-400" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-2xl text-gray-200" />,
        },
        {
          name: "Docker",
          icon: <SiDocker className="text-2xl text-blue-400" />,
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-2xl text-blue-500" />,
        },
        {
          name: "Terraform",
          icon: <SiTerraform className="text-2xl text-purple-500" />,
        },
      ],
      bgColor: "from-red-900/30 to-red-900/10",
      borderColor: "border-red-500/20",
      hoverBorderColor: "hover:border-red-400/40",
    },
  ];

  const floatingVariants = {
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

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
      id="skills"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Tools and technologies I use to build robust, scalable data solutions
          </p>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-xl p-6 border ${category.borderColor} ${category.hoverBorderColor} shadow-md transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.span
                  variants={floatingVariants}
                  animate="float"
                  className="text-2xl"
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-xl font-bold text-gray-200">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-gray-700"
                  >
                    <motion.div
                      variants={pulseVariants}
                      animate="pulse"
                      className="p-2 rounded-lg bg-white/10 flex items-center justify-center"
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="font-medium text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { 
              name: "Data Governance", 
              icon: "🛡️", 
              description: "Purview, Lake Formation" 
            },
            { 
              name: "Data Visualization", 
              icon: "📈", 
              description: "Power BI, Tableau" 
            },
            { 
              name: "CI/CD Pipelines", 
              icon: "🔄", 
              description: "Azure DevOps, GitHub Actions" 
            },
            { 
              name: "Monitoring", 
              icon: "👀", 
              description: "CloudWatch, Azure Monitor" 
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 p-6 rounded-xl text-center border border-gray-700 hover:border-pink-500/40 transition-all shadow-sm backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold text-gray-200 mb-2">{item.name}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;