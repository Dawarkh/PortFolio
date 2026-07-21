"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
}

const deployedProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Finance OS",
    category: "Financial Operating System",
    description: "Engineered a unified financial operating system integrating real-time portfolio tracking, DCF/LBO valuation models, and automated ledger reconciliation. Streamlined multi-asset financial workflows into a single dashboard, achieving sub-second data calculations and eliminating manual ledger discrepancies. Centralized automated analytics remove spreadsheet overhead, significantly improving capital tracking precision and valuation accuracy.",
    image: "/quick_expense.jpg",
    tags: ["Finance OS", "Valuation Engine", "Portfolio Management", "Next.js"],
    github: "https://github.com/Dawarkh/finance-os",
  },
  {
    id: 2,
    title: "WhatsApp Blaster",
    category: "Messaging Automation",
    description: "Developed a bulk WhatsApp communication tool using automated batch scheduling for vendor, buyer, and investor outreach. Automated broadcast messaging for 20+ key stakeholders, reducing manual follow-up time by 75%. Automated multi-channel client engagement drastically accelerates conversion cycles and stakeholder responsiveness.",
    image: "/whatsapp_blaster.jpg",
    tags: ["WhatsApp API", "Automation", "Batch Outreach"],
    github: "https://github.com/Dawarkh/wa-blaster_2",
  },
  {
    id: 3,
    title: "CRE Sales Dialer",
    category: "Voice Sales Automation",
    description: "Built an AI-driven voice dialer tailored for commercial real estate brokers to automate outbound sales calls and lead qualification. Automated call logging and CRM pipeline synchronization, increasing daily lead coverage efficiency by 3x. Voice automation reduces agent administrative friction, allowing high-value focus on deal negotiation and closing.",
    image: "/cre_dialer.jpg",
    tags: ["AI Voice", "CRE", "Sales Automation"],
    github: "https://github.com/Dawarkh/cre-dialer",
  },
  {
    id: 4,
    title: "Quick Expense App",
    category: "Personal Finance App",
    description: "Architected a responsive personal expense tracker featuring instant transaction logging and automated category breakdowns. Enabled real-time spending pattern visualization and budget alerts with sub-50ms transaction entry speeds. Minimal-friction user experience directly correlates with logging consistency and long-term financial discipline.",
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
    description: "Analyzed 602 Indian films (2014–24) across 5 regional industries using multi-variable financial performance models. Identified Mollywood as the highest-ROI segment (384% avg ROI, 88% success rate) and formulated a sub-₹25 Cr Action-Thriller entry strategy. Budget cap optimization combined with targeted genre alignment yields a 4.5x revenue multiplier while mitigating downside risk.",
    image: "/cineScope.png",
    tags: ["Power BI", "Data Analytics", "Market Research"],
  },
  {
    id: 2,
    title: "Tata Motors Analysis",
    category: "Credit & Equity Diagnostic",
    description: "Conducted a 5-year financial statement evaluation building Excel-based ratio and DuPont decomposition models. Uncovered capital-efficiency gains through declining finance costs, strengthening debt coverage ratios and equity reserves. Strategic debt deleveraging directly accelerates ROE recovery during cyclical auto sector expansions.",
    image: "/tata_motors.png",
    tags: ["Excel Modelling", "Financial Analysis", "Power BI"],
  },
  {
    id: 3,
    title: "Foodpanda Growth",
    category: "Statistical Revenue Modeling",
    description: "Tested revenue hypotheses using Chi-Square, Mann-Whitney U tests, and multiple regression models on ordering metrics. Explained ~41% of revenue variance (R² = 0.41) and designed data-backed basket upsell strategies. Targeted basket-size incentives yield significantly higher customer lifetime value than top-of-funnel acquisition discounts.",
    image: "/foodpanda.png",
    tags: ["Statistics", "Python", "Power BI"],
  },
  {
    id: 4,
    title: "Micro-Business Pricing",
    category: "Unit Economics & Pricing Model",
    description: "Constructed regression-based demand and pricing models to optimize unit economics for small enterprises. Achieved a 65%+ profit margin through cost-structure re-engineering and value-tier pricing. Elasticity-aware pricing tiers prevent margin erosion while preserving market share in competitive micro-segments.",
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
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
                              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/gh:opacity-100 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 transition-all" />
                            </a>
                          )}
                        </div>
                        <p className="text-gray-400 font-light uppercase tracking-wider text-[11px]">{project.category}</p>
                      </div>
                    </div>

                    {/* AOI Single Paragraph Description */}
                    <p className="text-gray-300 font-light text-xs md:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

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
