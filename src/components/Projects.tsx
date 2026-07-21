"use client";

import Image from "next/image";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  action: string;
  outcome: string;
  insight: string;
  image: string;
  tags: string[];
  github?: string;
}

const deployedProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Finance OS",
    category: "Financial Operating System",
    action: "Engineered a unified financial operating system integrating real-time portfolio tracking, DCF/LBO valuation models, and automated ledger reconciliation.",
    outcome: "Streamlined multi-asset financial workflows into a single dashboard, achieving sub-second calculations and zero manual ledger discrepancies.",
    insight: "Centralized automated analytics eliminate spreadsheet overhead, significantly improving capital tracking precision.",
    image: "/quick_expense.jpg",
    tags: ["Finance OS", "Valuation Engine", "Portfolio Management", "Next.js"],
    github: "https://github.com/Dawarkh/finance-os",
  },
  {
    id: 2,
    title: "WhatsApp Blaster",
    category: "Messaging Automation",
    action: "Developed a bulk WhatsApp communication tool using automated batch scheduling for vendor, buyer, and investor outreach.",
    outcome: "Automated broadcast messaging for 20+ key stakeholders, reducing manual follow-up time by 75%.",
    insight: "Automated multi-channel client engagement drastically accelerates conversion cycles and stakeholder responsiveness.",
    image: "/whatsapp_blaster.jpg",
    tags: ["WhatsApp API", "Automation", "Batch Outreach"],
    github: "https://github.com/Dawarkh/wa-blaster_2",
  },
  {
    id: 3,
    title: "CRE Sales Dialer",
    category: "Voice Sales Automation",
    action: "Built an AI-driven voice dialer tailored for commercial real estate brokers to automate outbound sales calls and lead qualification.",
    outcome: "Automated call logging and CRM pipeline synchronization, increasing daily lead coverage efficiency by 3x.",
    insight: "Voice automation reduces agent administrative friction, allowing high-value focus on deal negotiation and closing.",
    image: "/cre_dialer.jpg",
    tags: ["AI Voice", "CRE", "Sales Automation"],
    github: "https://github.com/Dawarkh/cre-dialer",
  },
  {
    id: 4,
    title: "Quick Expense App",
    category: "Personal Finance App",
    action: "Architected a responsive personal expense tracker featuring instant transaction logging and automated category breakdowns.",
    outcome: "Enabled real-time spending pattern visualization and budget alerts with sub-50ms transaction entry speeds.",
    insight: "Minimal-friction UX directly correlates with user logging consistency and long-term financial discipline.",
    image: "/quick_expense.jpg",
    tags: ["Mobile App", "Expense Tracker", "UX"],
    github: "https://github.com/Dawarkh/QuickExpenseApp",
  },
];

const academicProjects: ProjectItem[] = [
  {
    id: 1,
    title: "CineScope",
    category: "Producer's Intelligence",
    action: "Analyzed 602 Indian films (2014–24) across 5 regional industries using multi-variable financial performance models.",
    outcome: "Identified Mollywood as the highest-ROI segment (384% avg ROI, 88% success rate) and formulated a sub-₹25 Cr Action-Thriller entry strategy.",
    insight: "Budget cap optimization combined with targeted genre alignment yields a 4.5x revenue multiplier while mitigating downside risk.",
    image: "/cineScope.png",
    tags: ["Power BI", "Data Analytics", "Market Research"],
  },
  {
    id: 2,
    title: "Tata Motors Analysis",
    category: "Credit & Equity Diagnostic",
    action: "Conducted a 5-year financial statement evaluation building Excel-based ratio and DuPont decomposition models.",
    outcome: "Uncovered capital-efficiency gains through declining finance costs, strengthening debt coverage ratios and equity reserves.",
    insight: "Strategic debt deleveraging directly accelerates ROE recovery during cyclical auto sector expansions.",
    image: "/tata_motors.png",
    tags: ["Excel Modelling", "Financial Analysis", "Power BI"],
  },
  {
    id: 3,
    title: "Foodpanda Growth",
    category: "Statistical Revenue Modeling",
    action: "Tested revenue hypotheses using Chi-Square, Mann-Whitney U tests, and multiple regression models on ordering metrics.",
    outcome: "Explained ~41% of revenue variance (R² = 0.41) and designed data-backed basket upsell strategies.",
    insight: "Targeted basket-size incentives yield significantly higher customer lifetime value than top-of-funnel acquisition discounts.",
    image: "/foodpanda.png",
    tags: ["Statistics", "Python", "Power BI"],
  },
  {
    id: 4,
    title: "Micro-Business Pricing",
    category: "Unit Economics & Pricing Model",
    action: "Constructed regression-based demand and pricing models to optimize unit economics for small enterprises.",
    outcome: "Achieved a 65%+ profit margin through cost-structure re-engineering and value-tier pricing.",
    insight: "Elasticity-aware pricing tiers prevent margin erosion while preserving market share in competitive micro-segments.",
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
          
          {/* Section Header */}
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
                className="sticky top-32 w-full min-h-[72vh] bg-[#0a0a0a] border border-[#222] rounded-3xl p-6 md:p-10 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-between mb-[35vh] overflow-hidden"
              >
                {/* Subtle vignette/gradient background for the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Header bar */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-5xl md:text-[65px] font-bold text-white/10 tracking-tighter leading-none m-0">
                          0{index + 1}
                        </h3>
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 ${project.accentColor}`}>
                          {project.section}
                        </span>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-3 justify-end">
                          <h4 className="text-xl md:text-2xl text-white font-medium mb-0.5">{project.title}</h4>
                          {project.github && (
                            <a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-white/5 hover:bg-[#aa42ff]/20 border border-white/10 hover:border-[#aa42ff]/50 text-gray-300 hover:text-white transition-all flex items-center gap-1 group/gh"
                              title="View Source Code on GitHub"
                            >
                              <Github className="w-4 h-4" />
                              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/gh:opacity-100 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 transition-all" />
                            </a>
                          )}
                        </div>
                        <p className="text-gray-400 font-light uppercase tracking-wider text-[11px]">{project.category}</p>
                      </div>
                    </div>

                    {/* AOI Framework Grid */}
                    <div className="grid grid-cols-1 gap-2.5 my-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-start gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#aa42ff]/20 text-[#d097ff] border border-[#aa42ff]/30 shrink-0">
                          Action
                        </span>
                        <p className="text-gray-300 font-light text-xs leading-relaxed">{project.action}</p>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                          Outcome
                        </span>
                        <p className="text-gray-300 font-light text-xs leading-relaxed">{project.outcome}</p>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30 shrink-0">
                          Insight
                        </span>
                        <p className="text-gray-300 font-light text-xs leading-relaxed">{project.insight}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] uppercase font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Image Container */}
                  <div className="relative w-full h-44 md:h-52 group overflow-hidden rounded-xl border border-white/10 mt-2">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
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
