"use client";

import { useRef } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Wallet, BarChart3, TrendingUp, PieChart, DollarSign } from "lucide-react";

const deployedProjects = [
  {
    id: 1,
    title: "CRE Sales Dialer",
    category: "Sales Automation",
    description: "An AI-powered voice dialer built for commercial real estate — automates outbound sales calls, logs interactions, and streamlines lead management for brokers and agents.",
    image: "/cre_dialer.jpg",
    tags: ["AI", "Voice", "CRE", "Sales Automation"],
  },
  {
    id: 2,
    title: "WhatsApp Blaster",
    category: "Messaging Automation",
    description: "Bulk WhatsApp messaging tool for targeted outreach campaigns — schedule broadcasts, manage contact lists, and track delivery metrics at scale.",
    image: "/whatsapp_blaster.jpg",
    tags: ["WhatsApp API", "Automation", "Marketing"],
  },
  {
    id: 3,
    title: "Quick Expense",
    category: "Personal Finance App",
    description: "A fast, minimal expense tracking application — log transactions on the go, visualize spending patterns, and stay on top of your budget effortlessly.",
    image: "/quick_expense.jpg",
    tags: ["Mobile App", "Finance", "UX"],
  },
];

const academicProjects = [
  {
    id: 1,
    title: "CineScope",
    category: "Producer's Analytics",
    description: "Indian Film Industry Intelligence Dashboard — analyzed 602 films across 5 industries, identified Mollywood as highest-ROI segment (384% avg ROI). Recommended ₹25 Cr Action-Thriller entry.",
    image: "/cineScope.png",
    tags: ["Power BI", "Data Analytics", "Market Research"],
  },
  {
    id: 2,
    title: "Tata Motors Analysis",
    category: "Credit & Equity Diagnostic",
    description: "Analysed 5 years of financials — built Excel ratio & DuPont models to evaluate ROE drivers and credit profile. Surfaced capital-efficiency gains.",
    image: "/tata_motors.jpg",
    tags: ["Excel Modelling", "Financial Analysis", "Power BI"],
  },
  {
    id: 3,
    title: "Foodpanda Growth",
    category: "Statistical Modelling",
    description: "Tested revenue hypotheses using Chi-Square, Mann-Whitney U and multiple regression — explaining ~41% of variance (R²=0.41); recommended upselling strategies.",
    image: "/foodpanda.png",
    tags: ["Statistics", "Python", "Power BI"],
  },
  {
    id: 4,
    title: "Micro-Business Pricing",
    category: "Unit Economics",
    description: "Built regression-based pricing & demand models; achieved 65%+ profit margin via cost-structure and pricing optimization for micro-businesses.",
    image: "/micro_business.jpg",
    tags: ["Regression", "Excel", "Unit Economics"],
  },
];

const allProjects = [
  ...deployedProjects.map(p => ({ ...p, section: "Deployed Projects", accentColor: "text-emerald-400" })),
  ...academicProjects.map(p => ({ ...p, section: "Academic Projects", accentColor: "text-sky-400" })),
];

export default function Projects() {
  return (
    <section className="relative z-20 w-full bg-transparent py-24">
      {/* Container for the whole section */}
      <div className="w-full flex flex-col md:flex-row">
        
        {/* Left side empty space to let the 3D character show through */}
        <div className="hidden md:block md:w-[45vw] shrink-0" />

        {/* Right side content */}
        <div className="w-full md:w-[55vw] px-6 md:px-12">
          
          {/* Section Header — stays constant at top-0 for the entire projects section */}
          <div className="sticky top-0 z-30 pt-8 pb-6 bg-gradient-to-b from-[#121212] via-[#121212] to-transparent">
            <h2 className="text-5xl md:text-[75px] font-medium tracking-tighter text-white">
              Featured <span className="text-[#aa42ff]">Projects</span>
            </h2>
          </div>

          {/* Continuous Stacked Cards for ALL projects */}
          <div className="relative w-full pb-[10vh]">
            {allProjects.map((project, index) => (
              <div 
                key={`${project.section}-${project.id}`}
                className="sticky top-36 w-full h-[70vh] bg-[#0a0a0a] border border-[#222] rounded-3xl p-8 md:p-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-between mb-[35vh] overflow-hidden"
              >
                {/* Subtle vignette/gradient background for the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-baseline gap-4">
                        <h3 className="text-6xl md:text-[75px] font-bold text-white/5 tracking-tighter leading-none m-0">
                          0{index + 1}
                        </h3>
                        <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 ${project.accentColor}`}>
                          {project.section}
                        </span>
                      </div>
                      <div className="text-right">
                        <h4 className="text-2xl text-white font-medium mb-1">{project.title}</h4>
                        <p className="text-gray-400 font-light uppercase tracking-wider text-xs">{project.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-md">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] uppercase font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative w-full h-[45%] md:h-[50%] mt-6 group overflow-hidden rounded-xl border border-white/10">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
