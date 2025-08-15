"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CertificationShowcase = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const certifications = [
    {
      title: "Oracle Certified Professional: Java SE 17 Developer",
      issuer: "Oracle",
      description:
        "Oracle Certified Professional Java SE 17 Developer certification",
      skills: ["Java SE 17", "OOP", "Professional Java Development"],
      bgGradient: "from-red-600 via-orange-500 to-yellow-500",
      icon: "☕",
      credentialId: "1021295560OCPJSE17",
      link: "https://drive.google.com/file/d/1dQfPHSahw2eZH-hK-pE3F1AxRqmxgzQ6/view?usp=sharing",
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services (AWS)",
      description: "AWS Cloud Computing introduction and fundamentals",
      skills: ["Amazon Web Services (AWS)", "AWS Cloud", "Cloud Computing"],
      bgGradient: "from-orange-500 via-amber-500 to-yellow-400",
      icon: "☁️",
      credentialId: "AWS Badge",
      link: "https://www.credly.com/badges/30e58d35-8ec9-4f57-8eea-32d798b0a6ac/linked_in_profile",
    },
    {
      title: "Machine Learning Training",
      issuer: "Internshala Trainings",
      description: "Comprehensive machine learning training and certification",
      skills: ["Machine Learning", "Python", "Data Science"],
      bgGradient: "from-blue-600 via-purple-500 to-indigo-600",
      icon: "🧠",
      credentialId: "lyrpcidys8_",
      link: "https://drive.google.com/file/d/1sDeYrKjmWjQvLsUELjw9pqh19mDjXeyM/view?usp=sharing",
    },
    {
      title: "Full Stack Web Development",
      issuer: "100xDevs",
      description: "Full stack web development certification program",
      skills: ["Full Stack Development", "Web Development", "JavaScript"],
      bgGradient: "from-green-500 via-emerald-500 to-teal-500",
      icon: "🌐",
      credentialId: "100xDevs Certificate",
      link: "https://drive.google.com/file/d/12N4lzrZiDkrZ5nRxv4KHrBVdBl7rR_fJ/view?usp=sharing",
    },
    {
      title: "Data Analytics and Visualization Job Simulation",
      issuer: "Accenture North America - Forage",
      description: "Data analytics and visualization job simulation program",
      skills: ["Data Science", "Data Analytics", "Visualization"],
      bgGradient: "from-cyan-500 via-blue-500 to-indigo-500",
      icon: "📊",
      credentialId: "x3ShrLtLyCBvheyPG",
      link: "https://drive.google.com/file/d/16V7h7nC9_P8IzcdOgObJwXHLI3cXcwhR/view?usp=sharing",
    },
    {
      title: "Excellence in Python Programming",
      issuer: "Coding Ninjas",
      description: "Excellence in Python programming certification",
      skills: ["Python", "Programming", "Data Structures"],
      bgGradient: "from-yellow-400 via-orange-400 to-red-500",
      icon: "🐍",
      credentialId: "Coding Ninjas Certificate",
      link: "https://drive.google.com/file/d/1DQPs2WBKYpXYien7A_1kmPTJpXa6GE-L/view?usp=sharing",
    },
    {
      title: "Goldman Sachs - Software Engineering Job Simulation",
      issuer: "Goldman Sachs - Forage",
      description: "Software engineering job simulation program",
      skills: ["Software Engineering", "Financial Technology", "System Design"],
      bgGradient: "from-gray-700 via-blue-800 to-indigo-900",
      icon: "🏦",
      credentialId: "tQFLxJ7gg6uAuvWdW",
      link: "https://drive.google.com/file/d/1mF0STHoLEVGjG81uv4xn6eZP3M_GTDPA/view?usp=sharing",
    },
    {
      title: "Google Analytics Academy",
      issuer: "Google",
      description: "Google Analytics certification program",
      skills: ["Google Analytics", "Digital Marketing", "Data Analysis"],
      bgGradient: "from-green-400 via-blue-500 to-purple-600",
      icon: "📈",
      credentialId: "Google 2023-2026",
      link: "https://drive.google.com/file/d/1oFQ_wsrZ_wZKEpqu8n6JkLQzzaiHlQJB/view?usp=sharing",
    },
    {
      title: "Flipkart GRiD 7.0 National Runner Up",
      issuer: "Flipkart",
      description: "National Runner Up in Flipkart GRiD 7.0 competition",
      skills: ["Problem Solving", "Programming", "Competition"],
      bgGradient: "from-violet-500 via-purple-500 to-pink-500",
      icon: "🏆",
      credentialId: "National Achievement",
      link: "https://drive.google.com/file/d/1FJbwrq1z7MZYFMQjBcS_dEUwd2aVLhW8/view?usp=sharing",
    },
    {
      title: "Excellence in Data Structures and Algorithms in Python",
      issuer: "Coding Ninjas",
      description: "Excellence in Data Structures and Algorithms certification",
      skills: ["Python", "Data Structures", "Algorithms"],
      bgGradient: "from-emerald-400 via-teal-500 to-cyan-600",
      icon: "🔧",
      credentialId: "Coding Ninjas Certificate",
      link: "https://drive.google.com/file/d/1i1aeZ2aoM5dYmKu09wcMRlO4xNFqUdOd/view?usp=sharing",
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "NSDC International Limited",
      description: "Introduction to machine learning fundamentals",
      skills: ["Machine Learning", "Data Science", "AI"],
      bgGradient: "from-pink-500 via-rose-500 to-red-500",
      icon: "🤖",
      credentialId: "lyrpcidys8_",
      link: "https://drive.google.com/file/d/1exsFJotC-M5lPBBjdrqWSDEp-U1H_YeQ/view?usp=sharing",
    },
    {
      title: "Internship & Job Preparation",
      issuer: "Internshala Trainings",
      description: "Internship and job preparation training program",
      skills: ["Career Development", "Job Preparation", "Professional Skills"],
      bgGradient: "from-indigo-500 via-purple-500 to-pink-500",
      icon: "💼",
      credentialId: "97piw45siij5",
      link: "https://drive.google.com/file/d/1a_NAxykEuGSotuBqPPjMKddOJlNSBpzi/view?usp=sharing",
    },
    {
      title: "Arduino For Beginners - 2023 Complete Course",
      issuer: "Packt",
      description: "Complete Arduino programming and electronics course",
      skills: ["Arduino", "Electronics", "IoT", "Programming"],
      bgGradient: "from-teal-400 via-cyan-500 to-blue-600",
      icon: "🔌",
      credentialId: "2R6BRNREVMBD",
      link: "https://drive.google.com/file/d/1DEVnKf0tmYcPJbmjpOmOiwgzvoEjVvNF/view?usp=sharing",
    },
  ];

  return (
    <div className="relative min-h-screen py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and achievements that demonstrate
            expertise across various technologies and domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer"
            >
              <div
                className={`relative h-80 rounded-2xl bg-gradient-to-br ${cert.bgGradient} p-6 shadow-2xl overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 -left-4 w-24 h-24 bg-white rounded-full blur-xl animate-pulse" />
                  <div className="absolute bottom-0 -right-4 w-32 h-32 bg-white rounded-full blur-xl animate-pulse delay-1000" />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <motion.div
                    className="text-4xl mb-4 transform-gpu"
                    animate={
                      hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }
                    }
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {cert.icon}
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>

                  <p className="text-white/80 text-sm mb-4 font-medium">
                    {cert.issuer}
                  </p>

                  <div className="flex-1 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>

                    <motion.div
                      className="inline-flex items-center justify-center w-full py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium"
                      whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      View Certificate
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 pointer-events-none"
                  animate={
                    hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{selectedCert.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {selectedCert.title}
                    </h3>
                    <p className="text-lg text-blue-400 font-medium">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedCert.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">
                    Skills & Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedCert.credentialId && (
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm">
                      <span className="font-medium">Credential ID:</span>{" "}
                      {selectedCert.credentialId}
                    </p>
                  </div>
                )}
              </div>

              <motion.a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Certificate
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificationShowcase;
