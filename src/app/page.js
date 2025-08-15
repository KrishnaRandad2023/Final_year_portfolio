"use client";

// Portfolio page - deployment fix
import { Button } from "@/components/ui/button";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconPhone,
  IconDownload,
  IconUser,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <section className="text-center py-20">
          <h1 className="text-6xl font-bold text-foreground mb-6">
            Krishna Vijaykumar Randad
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI/ML Engineer & Full Stack Developer with 9.13 CGPA at VIT.
            Flipkart GRiD 7.0 National Runner-Up. Building scalable solutions
            with expertise in Python, Java, React, and cloud technologies.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Zk21P9hQxXAqEv07gRW0IsoxhmX7ZDMr/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Download Resume
            </Button>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered E-Commerce Search",
                description:
                  "Hybrid search engine processing 10,000+ queries/day with 85% relevance accuracy using FastAPI, FAISS, and ML algorithms.",
                tech: "Python, React, FastAPI, FAISS",
                link: "https://github.com/KrishnaRandad2023/search_system",
              },
              {
                title: "Quick Add Agency Website",
                description:
                  "Official agency website with 120+ clients, 150+ monthly form submissions, and 99.9% uptime.",
                tech: "React, Node.js, Neon DB, Vercel",
                link: "https://quick-add.me",
              },
              {
                title: "Portfolio Website",
                description:
                  "Responsive portfolio with 97 Lighthouse score, 2.3s load time, and 200+ page views.",
                tech: "React, Next.js, Tailwind, Vercel",
                link: "https://krishnarandad.vercel.app",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-lg shadow-lg border hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.tech}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  View Project →
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Projects */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Additional Projects & Simulations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  title: "Machine Learning Projects",
                  url: "https://github.com/KrishnaRandad2023/Machine_learning_projects-python",
                  desc: "Collection of ML projects including Diabetes Predictor with 91% accuracy using Scikit-learn.",
                  category: "ML/AI",
                  tech: "Python, Scikit-learn",
                },
                {
                  title: "FarmTrack Dashboard",
                  url: "https://github.com/KrishnaRandad2023/Projects/tree/main/FarmTrack_Prudentia-24-main",
                  desc: "Crop tracking dashboard using Node.js and Express handling 200+ farm records.",
                  category: "Web Dev",
                  tech: "Node.js, Express",
                },
                {
                  title: "Learning OpenCV",
                  url: "https://github.com/KrishnaRandad2023/Learning_opencv",
                  desc: "Computer vision projects and OpenCV learning resources with practical implementations.",
                  category: "Computer Vision",
                  tech: "Python, OpenCV",
                },
                {
                  title: "Snake Game",
                  url: "https://github.com/KrishnaRandad2023/Snake-Game",
                  desc: "Classic Snake Game implementation with modern Python programming techniques.",
                  category: "Game Dev",
                  tech: "Python, Pygame",
                },
                {
                  title: "RFID Door Lock System",
                  url: "https://www.tinkercad.com/things/hFL6h2YYySA-rfid-door-lock-system",
                  desc: "IoT-based RFID door lock system simulation with Arduino and security features.",
                  category: "IoT",
                  tech: "Arduino, RFID, Tinkercad",
                },
                {
                  title: "IoT Smart Street Light",
                  url: "https://www.tinkercad.com/things/bdf1pseIh55-iot-based-smart-street-light-system",
                  desc: "Intelligent street lighting system with motion sensors and energy optimization.",
                  category: "IoT",
                  tech: "Arduino, Sensors, Tinkercad",
                },
                {
                  title: "Smart Parking System",
                  url: "https://www.tinkercad.com/things/9OjNlmNgVy2-smart-parking-system-using-arduino",
                  desc: "Arduino-based parking management system with real-time slot monitoring.",
                  category: "IoT",
                  tech: "Arduino, Ultrasonic, Tinkercad",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="p-4 bg-card rounded-lg border hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        project.category === "ML/AI"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                          : project.category === "IoT"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : project.category === "Web Dev"
                          ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                          : project.category === "Computer Vision"
                          ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="mb-3">
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                      {project.tech}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    {project.url.includes("tinkercad")
                      ? "View Simulation"
                      : "View Code"}{" "}
                    →
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* View All Projects Link */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://other-projects-eight.vercel.app/",
                  "_blank"
                )
              }
            >
              View All Projects Portfolio →
            </Button>
          </div>
        </section>

        {/* About Me */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          <div className="max-w-6xl mx-auto">
            {/* Education Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
                Education
              </h3>
              <div className="max-w-4xl mx-auto space-y-6">
                {/* VIT */}
                <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-card-foreground mb-2">
                        Vellore Institute of Technology
                      </h4>
                      <p className="text-lg text-muted-foreground mb-2">
                        Bachelor of Technology in Computer Science with
                        Specialization in IoT
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Tamil Nadu, India
                      </p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <span className="text-2xl font-bold text-primary">
                        9.13 CGPA
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Sept. 2022 - Present
                      </p>
                    </div>
                  </div>
                </div>

                {/* HSC */}
                <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-card-foreground mb-2">
                        R.L.T. College of Science, Akola
                      </h4>
                      <p className="text-lg text-muted-foreground mb-2">
                        HSC - Maharashtra State Board
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Maharashtra, India
                      </p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <span className="text-2xl font-bold text-primary">
                        77%
                      </span>
                      <p className="text-sm text-muted-foreground">
                        May 2020 - Mar. 2022
                      </p>
                    </div>
                  </div>
                </div>

                {/* SSC */}
                <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-card-foreground mb-2">
                        Kothari Convent High School, Akola
                      </h4>
                      <p className="text-lg text-muted-foreground mb-2">
                        SSC - Maharashtra State Board
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Maharashtra, India
                      </p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <span className="text-2xl font-bold text-primary">
                        97%
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Jun. 2010 - Mar. 2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
                Professional Experience
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-card-foreground mb-2">
                        AI Intern (On-site)
                      </h4>
                      <p className="text-lg text-primary font-semibold mb-2">
                        OnDevice Solutions Ltd.
                      </p>
                      <p className="text-md text-muted-foreground mb-3">
                        Hyderabad, India | June 2025 - July 2025
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>
                        • Built an Offline Automated Form Filling system
                        processing 500+ voice transcripts daily, extracting
                        structured data from Android apps and boosting data
                        collection efficiency by 35%
                      </li>
                      <li>
                        • Architected and optimized a modular NLP pipeline
                        combining T5 and RoBERTa models, achieving 92% accuracy
                        and reducing inference time by 40% through ONNX, TFLite,
                        and GGUF deployment strategies
                      </li>
                      <li>
                        • Collaborated with 3 Android engineers across 2 teams
                        to integrate model capabilities, can deliver robust
                        offline functionality for 10,000+ daily active users
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Technical Skills Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
                Technical Skills
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Programming Languages */}
                  <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
                    <h4 className="text-lg font-semibold mb-4 text-card-foreground">
                      Programming Languages
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {["C", "C++", "Python", "Java"].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Web Technologies */}
                  <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
                    <h4 className="text-lg font-semibold mb-4 text-card-foreground">
                      Web Technologies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {["JavaScript", "HTML", "CSS", "React.js", "Node.js"].map(
                        (skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Cloud & Database */}
                  <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
                    <h4 className="text-lg font-semibold mb-4 text-card-foreground">
                      Cloud & Database
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {["AWS", "Vercel", "MySQL"].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ML/AI & Data Science */}
                  <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
                    <h4 className="text-lg font-semibold mb-4 text-card-foreground">
                      ML/AI & Data Science
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "NumPy",
                        "Pandas",
                        "Scikit-learn",
                        "Matplotlib",
                        "OpenCV",
                        "ONNX",
                        "TFLite",
                        "GGUF",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Development Tools */}
                  <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
                    <h4 className="text-lg font-semibold mb-4 text-card-foreground">
                      Development Tools
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {["Git", "VS Code", "Jupyter Notebook", "CodeBlocks"].map(
                        (skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Embedded Systems */}
                  <div className="p-6 bg-card rounded-xl border border-border shadow-lg">
                    <h4 className="text-lg font-semibold mb-4 text-card-foreground">
                      Embedded Systems
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {["Arduino", "Tinkercad"].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Notable Achievements
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>

              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="absolute left-2 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                  <div className="ml-12 p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-card-foreground">
                        Flipkart GRiD 7.0 National Runner-Up
                      </h3>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                        2025
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Team &quot;Runtime Terror&quot; - Team Lead & Project Lead
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        • Selected among top 48 finalists from 180,000+ students
                        nationwide
                      </li>
                      <li>
                        • Presented live at Flipkart HQ, Bangalore to senior
                        leadership
                      </li>
                      <li>
                        • Delivered scalable ML-powered search solution under
                        timed constraints
                      </li>
                      <li>
                        • Represented VIT at national level with team leadership
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1FJbwrq1z7MZYFMQjBcS_dEUwd2aVLhW8/view?usp=sharing",
                          "_blank"
                        )
                      }
                    >
                      View Certificate →
                    </Button>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-2 w-4 h-4 bg-primary/60 rounded-full border-2 border-background"></div>
                  <div className="ml-12 p-6 bg-card rounded-lg border shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-card-foreground">
                        Academic Excellence
                      </h3>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        9.13 CGPA
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Maintaining exceptional academic performance at VIT while
                      pursuing Computer Science with IoT specialization
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-2 w-4 h-4 bg-primary/60 rounded-full border-2 border-background"></div>
                  <div className="ml-12 p-6 bg-card rounded-lg border shadow-sm">
                    <h3 className="text-lg font-semibold text-card-foreground mb-3">
                      Community Impact
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        • <strong>SEWASHRAY Board Member:</strong> 12,000+ free
                        cataract surgeries coordinated
                      </li>
                      <li>
                        • <strong>ADHAAR NGO Volunteer:</strong> 7,500+ meals
                        distributed to communities
                      </li>
                      <li>
                        • <strong>IEEE-VIT Core Member:</strong> 3+ technical
                        events with 800+ participants
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Certifications
          </h2>
          <DraggableCardContainer className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-background via-muted/20 to-background">
            <p className="absolute top-1/2 mx-auto max-w-md -translate-y-3/4 text-center text-xl font-semibold text-muted-foreground md:text-2xl">
              Drag the certificates around to explore my achievements
            </p>
            {[
              {
                title: "Oracle Java SE 17 Developer",
                description: "Oracle Certified Professional",
                className: "absolute top-10 left-[15%] rotate-[-3deg]",
                bgColor: "bg-gradient-to-br from-red-500 to-orange-600",
                link: "https://drive.google.com/file/d/1dQfPHSahw2eZH-hK-pE3F1AxRqmxgzQ6/view?usp=sharing",
                credentialId: "1021295560OCPJSE17",
              },
              {
                title: "AWS Cloud Computing",
                description: "AWS Educate Introduction",
                className: "absolute top-32 left-[25%] rotate-[-8deg]",
                bgColor: "bg-gradient-to-br from-orange-400 to-yellow-500",
                link: "https://www.credly.com/badges/30e58d35-8ec9-4f57-8eea-32d798b0a6ac/linked_in_profile",
                credentialId: "AWS Badge",
              },
              {
                title: "Machine Learning Training",
                description: "Internshala Trainings",
                className: "absolute top-8 left-[45%] rotate-[6deg]",
                bgColor: "bg-gradient-to-br from-blue-400 to-indigo-500",
                link: "https://drive.google.com/file/d/1sDeYrKjmWjQvLsUELjw9pqh19mDjXeyM/view?usp=sharing",
                credentialId: "lyrpcidys8_",
              },
              {
                title: "Full Stack Web Development",
                description: "100xDevs",
                className: "absolute top-28 left-[60%] rotate-[12deg]",
                bgColor: "bg-gradient-to-br from-green-400 to-emerald-600",
                link: "https://drive.google.com/file/d/12N4lzrZiDkrZ5nRxv4KHrBVdBl7rR_fJ/view?usp=sharing",
                credentialId: "100xDevs",
              },
              {
                title: "Data Analytics & Visualization",
                description: "Accenture Job Simulation",
                className: "absolute top-16 right-[25%] rotate-[2deg]",
                bgColor: "bg-gradient-to-br from-purple-400 to-pink-500",
                link: "https://drive.google.com/file/d/16V7h7nC9_P8IzcdOgObJwXHLI3cXcwhR/view?usp=sharing",
                credentialId: "x3ShrLtLyCBvheyPG",
              },
              {
                title: "Python Programming",
                description: "Coding Ninjas Excellence",
                className: "absolute top-40 left-[35%] rotate-[-5deg]",
                bgColor: "bg-gradient-to-br from-yellow-400 to-amber-500",
                link: "https://drive.google.com/file/d/1DQPs2WBKYpXYien7A_1kmPTJpXa6GE-L/view?usp=sharing",
                credentialId: "Coding Ninjas",
              },
              {
                title: "Goldman Sachs SWE",
                description: "Software Engineering Simulation",
                className: "absolute top-12 left-[70%] rotate-[8deg]",
                bgColor: "bg-gradient-to-br from-teal-400 to-blue-600",
                link: "https://drive.google.com/file/d/1mF0STHoLEVGjG81uv4xn6eZP3M_GTDPA/view?usp=sharing",
                credentialId: "tQFLxJ7gg6uAuvWdW",
              },
              {
                title: "Google Analytics",
                description: "Google Analytics Academy",
                className: "absolute top-20 left-[80%] rotate-[-2deg]",
                bgColor: "bg-gradient-to-br from-red-400 to-rose-500",
                link: "https://drive.google.com/file/d/1oFQ_wsrZ_wZKEpqu8n6JkLQzzaiHlQJB/view?usp=sharing",
                credentialId: "Google 2023-2026",
              },
              {
                title: "Flipkart GRiD 7.0",
                description: "National Runner Up",
                className: "absolute top-4 left-[55%] rotate-[15deg]",
                bgColor: "bg-gradient-to-br from-violet-500 to-purple-600",
                link: "https://drive.google.com/file/d/1FJbwrq1z7MZYFMQjBcS_dEUwd2aVLhW8/view?usp=sharing",
                credentialId: "National Achievement",
              },
            ].map((cert, index) => (
              <DraggableCardBody key={index} className={cert.className}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div
                    className={`relative h-64 w-64 rounded-lg ${cert.bgColor} p-6 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer`}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div className="text-center">
                        <div className="mb-4 h-12 w-12 mx-auto rounded-full bg-white/20 flex items-center justify-center">
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold leading-tight">
                          {cert.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/80">
                          {cert.description}
                        </p>
                        {cert.credentialId && (
                          <p className="mt-2 text-xs text-white/60 font-mono">
                            ID: {cert.credentialId}
                          </p>
                        )}
                      </div>
                      <div className="text-center">
                        <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                          Click to Verify
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    {/* External link icon */}
                    <div className="absolute top-3 right-3 text-white/60">
                      <svg
                        className="h-4 w-4"
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
                    </div>
                  </div>
                </a>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Get In Touch
          </h2>
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat about technology. Feel free to
              reach out!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconMail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        Email
                      </h4>
                      <p className="text-muted-foreground">
                        krishnaengg.work2022@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconPhone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        Phone
                      </h4>
                      <p className="text-muted-foreground">+91-94228-60229</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconUser className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        Location
                      </h4>
                      <p className="text-muted-foreground">Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h3>
                <form
                  action="https://formspree.io/f/xpzgojzy"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground placeholder-muted-foreground"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground placeholder-muted-foreground"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Your message..."
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground placeholder-muted-foreground resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Floating Dock */}
          <div className="flex items-center justify-center">
            <FloatingDock
              mobileClassName="translate-y-4"
              items={[
                {
                  title: "Portfolio",
                  icon: (
                    <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "#",
                },
                {
                  title: "Download Resume",
                  icon: (
                    <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "#",
                },
                {
                  title: "Email",
                  icon: (
                    <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "mailto:krishnaengg.work2022@gmail.com",
                },
                {
                  title: "LinkedIn",
                  icon: (
                    <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "https://linkedin.com/in/krishna-randad111",
                },
                {
                  title: "GitHub",
                  icon: (
                    <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "https://github.com/KrishnaRandad2023",
                },
                {
                  title: "Twitter",
                  icon: (
                    <IconBrandTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "https://twitter.com/krishna_randad",
                },
                {
                  title: "Phone",
                  icon: (
                    <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                  ),
                  href: "tel:+919422860229",
                },
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
