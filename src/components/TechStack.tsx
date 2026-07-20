"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const techStack = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    category: "Programming",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    category: "Database",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg",
    category: "Framework",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    category: "Language",
  },
  {
    name: "Tableau",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tableau/tableau-original.svg",
    category: "Visualization",
  },
  {
    name: "R",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
    category: "Analytics",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    category: "Version Control",
  },
  {
    name: "Excel",
    icon: "/icons/excel.svg",
    category: "Spreadsheets",
  },
  {
    name: "Power BI",
    icon: "/icons/powerbi.svg",
    category: "Visualization",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    category: "Data Science",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={containerRef}
      className="relative w-full py-32 bg-transparent flex flex-col overflow-hidden"
    >
      {/* Left spacer for the character */}
      <div className="w-full flex flex-col md:flex-row">
        <div className="hidden md:block md:w-[45vw] shrink-0" />
        
        <div className="w-full md:w-[55vw] px-6 md:px-12">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-[60px] font-bold text-white tracking-tighter mb-4">
              Core <span className="text-[#aa42ff]">Stack</span>
            </h2>
            <p className="text-gray-400 font-light text-sm md:text-base max-w-md">
              Tools and technologies I use to turn data into decisions.
            </p>
          </div>

          {/* Icon Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                className="group relative flex flex-col items-center justify-center gap-3 p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#aa42ff]/40 hover:bg-[#aa42ff]/[0.04] transition-colors duration-300 cursor-default"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[#aa42ff]/0 group-hover:bg-[#aa42ff]/[0.03] transition-all duration-500 blur-xl" />
                
                <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(170,66,255,0.3)] transition-all duration-300"
                  />
                </div>
                <span className="text-xs md:text-sm text-gray-400 group-hover:text-white font-medium tracking-wide transition-colors duration-300">
                  {tech.name}
                </span>
                <span className="text-[9px] text-gray-600 group-hover:text-gray-400 uppercase tracking-widest font-light transition-colors duration-300">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
