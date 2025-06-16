import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const experiences = [
  {
    role: "Sr Data Engineer",
    company: "JP Morgan & Chase Co.",
    period: "Feb 2024– Present",
    location: "New York, USA",
    responsibilities: [
      "Leading the build of a data platform on Azure for real-time risk and compliance analytics using Event Hubs, ADLS Gen2, and Azure Functions.",
      "Collaborating with quant teams and ML engineers to streamline model input data pipelines for market risk and stress testing simulations.",
      "Engineered end-to-end workflows in Azure Data Factory and orchestrated machine learning batch inference using Synapse and Databricks.",
      "Developed Delta Lake-based datasets with change data capture (CDC) to track transaction-level audit trails.",
      "Enabled business teams with self-service analytics through curated Power BI datasets, row-level security, and governance tagging.",
      "Optimized Spark clusters for heavy workloads, reducing job latency by 45% through caching, partition tuning, and adaptive execution.",
      "Automated metadata cataloging and schema validation workflows with Azure Purview and dbt.",
      "Integrated pipeline health dashboards with Azure Monitor and Application Insights to support 24x7 data availability SLAs."
    ],
  },
  {
    role: "AWS Data Engineer",
    company: "(TCS) Citi Bank",
    period: "May 2021– Jan 2023",
    location: "Hyderabad, India",
    responsibilities: [
      "Designed and developed secure, scalable ETL pipelines in AWS Glue and PySpark to support regulatory reporting across multiple financial product lines.",
      "Partnered with data science teams to deliver engineered features for credit risk scoring and customer churn modeling.",
      "Processed batch and streaming data using S3, Kinesis, Lambda, and Step Functions to enable near real-time transaction monitoring.",
      "Optimized data pipeline performance and cost using partitioning, bucketing, and lifecycle policies on S3.",
      "Implemented a reusable metadata-driven ingestion framework to handle 100+ data sources with schema drift handling.",
      "Integrated Lake Formation and IAM policies to ensure granular access control and encryption compliance (SOX/PCI-DSS).",
      "Built visualizations using QuickSight to help compliance teams monitor high-risk transactions and anomalies.",
      "Worked closely with DevOps and security teams to integrate pipelines with centralized monitoring and secrets management via CloudWatch and AWS Secrets Manager."
    ],
  },
  {
    role: "Data Engineer",
    company: "Flipkart",
    period: "May 2019– April 2021",
    location: "Mumbai, India",
    responsibilities: [
      "Built a unified data ingestion framework using Apache Spark and Hive on Hadoop to process 20TB+ of user activity data daily for Flipkart's product recommendation engine.",
      "Collaborated with data scientists to preprocess and transform training datasets for personalization models using PySpark.",
      "Integrated streaming data from Kafka and Flume to enable near real-time user behavior tracking and A/B testing analytics.",
      "Designed and implemented star schema models for the Product and Customer domains to support executive dashboards.",
      "Contributed to Flipkart's transition to a data lake architecture by organizing raw, processed, and curated zones on HDFS.",
      "Enabled fraud detection and inventory anomaly use cases through anomaly detection features built using Spark MLlib.",
      "Automated pipeline validation, data profiling, and anomaly detection workflows using Python and Airflow.",
      "Worked in cross-functional teams with product managers and analysts to ensure feature data requirements met business KPIs."
    ],
  },
];

// Custom Flip Card Component
const CardFlip = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className="relative w-full h-[400px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="absolute w-full h-full rounded-xl shadow-2xl border border-white/10 overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
          background: "linear-gradient(145deg, #1a1a1a, #1e1e1e)",
          boxShadow: "0 10px 30px rgba(255, 255, 255, 0.05)",
        }}
      >
        {front}
      </motion.div>
      <motion.div
        className="absolute w-full h-full rounded-xl shadow-2xl border border-white/10 overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: "linear-gradient(145deg, #1f1f1f, #1a1a1a)",
          boxShadow: "0 10px 30px rgba(255, 255, 255, 0.05)",
        }}
      >
        {back}
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const controls = useAnimation();

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
      id="experience"
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

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Professional Journey
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My career path in data engineering across leading organizations.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto relative z-10">
        {experiences.map((exp, index) => (
          <CardFlip
            key={index}
            front={
              <ExperienceCardFront exp={exp} index={index} />
            }
            back={
              <ExperienceCardBack exp={exp} />
            }
          />
        ))}
      </div>
    </section>
  );
};

const ExperienceCardFront = ({ exp, index }) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="w-full h-full p-6 flex flex-col justify-between"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 15px 40px rgba(255, 255, 255, 0.1)",
      }}
      onMouseEnter={() => controls.start({ scale: 1.1, rotateZ: 1 })}
      onMouseLeave={() => controls.start({ scale: 1, rotateZ: 0 })}
    >
      <div>
        <div className="flex items-center mb-4">
          <motion.div
            animate={controls}
            className="p-3 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white mr-4"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </motion.div>
          <div>
            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            <p className="text-pink-400">{exp.company}</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 font-medium mb-4">
          {exp.period} | {exp.location}
        </p>
        <ul className="space-y-2 mt-4 text-gray-300">
          {exp.responsibilities.slice(0, 2).map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-pink-400 mt-2 mr-2"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-700 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="inline-block px-3 py-1 text-xs font-medium text-pink-400 border border-pink-500 rounded-full">
            Data Engineering
          </span>
        </div>
        <span className="text-sm text-gray-400">Click to explore</span>
      </div>
    </motion.div>
  );
};

const ExperienceCardBack = ({ exp }) => {
  return (
    <div className="w-full h-full p-6 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white">Key Responsibilities</h3>
        <button 
          className="text-xs text-pink-400 hover:text-pink-300 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            e.currentTarget.closest('.relative').querySelector('motion-div').click();
          }}
        >
          Back to Entry
        </button>
      </div>
      <div className="overflow-y-auto flex-grow pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <ul className="space-y-3 text-gray-300">
          {exp.responsibilities.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-pink-400 mt-2 mr-2 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-700 flex justify-between items-center">
        {exp.github && (
          <a 
            href={exp.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="mr-2" />
            <span>View GitHub</span>
          </a>
        )}
        <span className="text-xs text-gray-500">{exp.responsibilities.length} responsibilities listed</span>
      </div>
    </div>
  );
};

export default Experience;