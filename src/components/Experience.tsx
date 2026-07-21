"use client";

import Image from "next/image";

export default function Experience() {
  return (
    <section className="relative w-full bg-transparent py-32 px-6 md:px-12 z-20 flex flex-col items-end overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/experience_bg.jpg"
          alt="Abstract Finance Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-[#121212]" />
      </div>

      <div className="max-w-4xl ml-auto mr-0 md:mr-12 relative z-10 w-full flex flex-col items-center">
        
        <h2 className="text-5xl md:text-[70px] leading-tight md:leading-[70px] font-light text-center mb-24 tracking-tight">
          <span className="bg-gradient-to-t from-[#7f40ff] to-[#ffffff] bg-clip-text text-transparent">
            My career <span className="font-sans font-light">&</span>
            <br /> experience
          </span>
        </h2>

        <div className="relative w-full max-w-4xl mx-auto flex flex-col">
          
          {/* Animated Timeline Line & Dot */}
          <div className="absolute top-[-50px] left-4 md:left-1/2 md:-translate-x-1/2 w-[3px] h-[calc(100%+50px)] bg-gradient-to-t from-transparent via-[#aa42ff] to-transparent opacity-50" />
          
          <div className="absolute bottom-0 left-4 md:left-1/2 transform -translate-x-[4px] md:-translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#aa42ff] shadow-[0_0_5px_2px_#d29bff,0_0_15px_8px_#d097ff,0_0_110px_20px_#f2c0ff] animate-pulse" />

          {/* Experience Item 1: 2026 Corporate Finance Intern */}
          <div className="group relative w-full mb-10 p-6 md:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-[#aa42ff]/50 transition-all duration-500 backdrop-blur-xl shadow-lg cursor-pointer">
            <div className="flex flex-col md:flex-row justify-between w-full">
              <div className="flex w-full md:w-[48%] justify-between gap-4 md:gap-8 flex-col md:flex-row mb-4 md:mb-0">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-2xl md:text-[28px] leading-tight font-medium text-white tracking-wide">
                      Corporate Finance Intern
                    </h4>
                  </div>
                  <h5 className="text-base md:text-lg font-normal text-[#aa42ff] tracking-wide">
                    Altaf Trading Agencies <span className="text-xs text-gray-400 block sm:inline sm:ml-2">(Apr 2026 – Jun 2026)</span>
                  </h5>
                </div>
                <h3 className="text-3xl md:text-[40px] font-medium text-white leading-none">
                  2026
                </h3>
              </div>
              
              <div className="w-full md:w-[48%] flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium tracking-wider uppercase mb-2 group-hover:text-[#aa42ff] transition-colors">
                  <span>Overview</span>
                  <span className="text-[10px] group-hover:translate-y-0.5 transition-transform">↓ Hover for details</span>
                </div>
                <p className="text-gray-300 font-light text-xs md:text-sm leading-relaxed mb-2">
                  Financial reporting, forecasting, investment analysis, and client engagement automation.
                </p>

                {/* Expandable Hover Details */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden pt-2 border-t border-white/10">
                  <ul className="text-gray-300 font-light text-xs md:text-sm leading-relaxed list-disc list-outside space-y-2 pl-4">
                    <li>Prepared financial statements and reconciled records with banking transactions, improving reporting accuracy and ensuring compliance.</li>
                    <li>Developed financial forecasts & investment recommendations, projecting a 5%+ reduction in operational costs and 2%+ increase in profitability.</li>
                    <li>Built an automated client engagement application using Anti Gravity, streamlining email & WhatsApp communication for 20+ vendors, buyers, and investors.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Item 2: 2025 Market Researcher */}
          <div className="group relative w-full mb-10 p-6 md:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-[#aa42ff]/50 transition-all duration-500 backdrop-blur-xl shadow-lg cursor-pointer">
            <div className="flex flex-col md:flex-row justify-between w-full">
              <div className="flex w-full md:w-[48%] justify-between gap-4 md:gap-8 flex-col md:flex-row mb-4 md:mb-0">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-2xl md:text-[28px] leading-tight font-medium text-white tracking-wide">
                      Market Researcher
                    </h4>
                  </div>
                  <h5 className="text-base md:text-lg font-normal text-[#aa42ff] tracking-wide">
                    Century Plyboards <span className="text-xs text-gray-400 block sm:inline sm:ml-2">(Jun 2025 – Jul 2025)</span>
                  </h5>
                </div>
                <h3 className="text-3xl md:text-[40px] font-medium text-white leading-none">
                  2025
                </h3>
              </div>
              
              <div className="w-full md:w-[48%] flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium tracking-wider uppercase mb-2 group-hover:text-[#aa42ff] transition-colors">
                  <span>Overview</span>
                  <span className="text-[10px] group-hover:translate-y-0.5 transition-transform">↓ Hover for details</span>
                </div>
                <p className="text-gray-300 font-light text-xs md:text-sm leading-relaxed mb-2">
                  Pre-hung doors market feasibility study across Delhi NCR & competitor positioning.
                </p>

                {/* Expandable Hover Details */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden pt-2 border-t border-white/10">
                  <ul className="text-gray-300 font-light text-xs md:text-sm leading-relaxed list-disc list-outside space-y-2 pl-4">
                    <li>Executed a comprehensive market feasibility study for the pre-hung doors segment across Delhi NCR to support expansion decisions.</li>
                    <li>Analyzed primary market data from key industry stakeholders, identifying customer needs, demand drivers, and adoption barriers.</li>
                    <li>Benchmarked competitor products, pricing models, and channel strategies to support Century Plyboards&apos; go-to-market strategy.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Item 3: 2025 PGDM Candidate */}
          <div className="group relative w-full mb-10 p-6 md:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-[#aa42ff]/50 transition-all duration-500 backdrop-blur-xl shadow-lg cursor-pointer">
            <div className="flex flex-col md:flex-row justify-between w-full">
              <div className="flex w-full md:w-[48%] justify-between gap-4 md:gap-8 flex-col md:flex-row mb-4 md:mb-0">
                <div>
                  <h4 className="text-2xl md:text-[28px] leading-tight font-medium text-white tracking-wide mb-1">
                    PGDM Candidate
                  </h4>
                  <h5 className="text-base md:text-lg font-normal text-[#aa42ff] tracking-wide">
                    Great Lakes Institute
                  </h5>
                </div>
                <h3 className="text-3xl md:text-[40px] font-medium text-white leading-none">
                  2025
                </h3>
              </div>
              
              <div className="w-full md:w-[48%] flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium tracking-wider uppercase mb-2 group-hover:text-[#aa42ff] transition-colors">
                  <span>Overview</span>
                  <span className="text-[10px] group-hover:translate-y-0.5 transition-transform">↓ Hover for details</span>
                </div>
                <p className="text-gray-300 font-light text-xs md:text-sm leading-relaxed mb-2">
                  Specializing in Corporate Finance and Analytics with data-driven decision-making foundations.
                </p>

                {/* Expandable Hover Details */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden pt-2 border-t border-white/10">
                  <p className="text-gray-300 font-light text-xs md:text-sm leading-relaxed">
                    Focused on Finance and Analytics with strong foundations in financial analysis, valuation, and data-driven decision-making. Experienced in analyzing capital structures, profitability drivers, and investment risks through analytical tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Item 4: 2023 NGO Work */}
          <div className="group relative w-full mb-10 p-6 md:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-[#aa42ff]/50 transition-all duration-500 backdrop-blur-xl shadow-lg cursor-pointer">
            <div className="flex flex-col md:flex-row justify-between w-full">
              <div className="flex w-full md:w-[48%] justify-between gap-4 md:gap-8 flex-col md:flex-row mb-4 md:mb-0">
                <div>
                  <h4 className="text-2xl md:text-[28px] leading-tight font-medium text-white tracking-wide mb-1">
                    NGO Volunteer & Project Leader
                  </h4>
                  <h5 className="text-base md:text-lg font-normal text-[#aa42ff] tracking-wide">
                    NGO Work
                  </h5>
                </div>
                <h3 className="text-3xl md:text-[40px] font-medium text-white leading-none">
                  2023
                </h3>
              </div>
              
              <div className="w-full md:w-[48%] flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium tracking-wider uppercase mb-2 group-hover:text-[#aa42ff] transition-colors">
                  <span>Overview</span>
                  <span className="text-[10px] group-hover:translate-y-0.5 transition-transform">↓ Hover for details</span>
                </div>
                <p className="text-gray-300 font-light text-xs md:text-sm leading-relaxed mb-2">
                  Operational & route optimization leadership for community initiatives.
                </p>

                {/* Expandable Hover Details */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden pt-2 border-t border-white/10">
                  <p className="text-gray-300 font-light text-xs md:text-sm leading-relaxed">
                    Coordinated a 12-member team for community initiative projects, optimizing route collection and resource logistics, achieving 22% faster execution times and a 15% improvement in operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
