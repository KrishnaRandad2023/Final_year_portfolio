"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CertificationShowcase = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollX, setScrollX] = useState(0);
  const carouselRef = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      const el = carouselRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      let next = el.scrollLeft + 340; // card width + gap
      if (next > maxScroll + 40) next = 0;
      el.scrollTo({ left: next, behavior: "smooth" });
      setScrollX(next);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

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
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-card-foreground mb-6">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional certifications and achievements that demonstrate
            expertise across various technologies and domains
          </p>
        </motion.div>

        {/* Horizontal scrollable carousel with snap and 3D tilt */}
        <div className="relative">
          <div
            className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
            ref={carouselRef}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 8 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer snap-center min-w-[320px] max-w-xs w-full"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.5,
                  type: "spring",
                }}
                style={{ perspective: 1000 }}
              >
                <div className="relative rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden backdrop-blur-md min-h-[16rem] flex flex-col justify-between p-6">
                  {/* Glass reflection spot */}
                  <div className="absolute top-2 left-1/4 w-1/2 h-1/3 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-md pointer-events-none" />
                  {/* Blue accent glow on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      className="text-4xl mb-4 transform-gpu"
                      animate={
                        hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }
                      }
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {cert.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-card-foreground mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 font-medium">
                      {cert.issuer}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full group-hover:bg-primary/20 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full group-hover:bg-primary/20 transition-colors duration-200">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                    <motion.div
                      className="inline-flex items-center justify-center w-full py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium group-hover:bg-primary/20 transition-colors duration-200 mt-auto"
                      whileHover={{ backgroundColor: "rgba(59,130,246,0.12)" }}
                    >
                      View Certificate
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-3xl p-8 backdrop-blur-md"
            >
              {/* Glass reflection spot */}
              <div className="absolute top-2 left-1/4 w-1/2 h-1/3 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-md pointer-events-none" />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-primary transition-colors"
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
                    <h3 className="text-2xl font-bold text-card-foreground">
                      {selectedCert.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {selectedCert.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-card-foreground font-semibold mb-3">
                    Skills & Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedCert.credentialId && (
                  <div className="mb-6">
                    <p className="text-muted-foreground text-sm">
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
                className="inline-flex items-center justify-center w-full py-3 px-6 bg-primary/90 hover:bg-primary text-primary-foreground font-medium rounded-xl transition-all duration-200 shadow-md"
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
