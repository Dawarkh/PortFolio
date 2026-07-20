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

          {/* Experience Item 1 */}
          <div className="flex flex-col md:flex-row justify-between w-full mb-16 pl-12 md:pl-0">
            <div className="flex w-full md:w-[45%] justify-between gap-4 md:gap-12 flex-col md:flex-row mb-4 md:mb-0">
              <div>
                <h4 className="text-2xl md:text-[33px] leading-tight font-medium text-white tracking-wide mb-2">
                  PGDM Candidate
                </h4>
                <h5 className="text-lg md:text-xl font-normal text-[#7f40ff] tracking-wide">
                  Great Lakes Institute
                </h5>
              </div>
              <h3 className="text-4xl md:text-[48px] font-medium text-white leading-none">
                2025
              </h3>
            </div>
            <p className="w-full md:w-[45%] text-gray-300 font-light text-sm md:text-lg leading-relaxed">
              Focused on Finance and Analytics with strong foundations in financial analysis, valuation, and data-driven decision-making. 
              Experienced in analyzing capital structures, profitability drivers, and investment risks through analytical tools.
            </p>
          </div>

          {/* Experience Item 2 */}
          <div className="flex flex-col md:flex-row justify-between w-full mb-16 pl-12 md:pl-0">
            <div className="flex w-full md:w-[45%] justify-between gap-4 md:gap-12 flex-col md:flex-row mb-4 md:mb-0">
              <div>
                <h4 className="text-2xl md:text-[33px] leading-tight font-medium text-white tracking-wide mb-2">
                  Finance Analyst
                </h4>
                <h5 className="text-lg md:text-xl font-normal text-[#7f40ff] tracking-wide">
                  Internship
                </h5>
              </div>
              <h3 className="text-4xl md:text-[48px] font-medium text-white leading-none">
                2024
              </h3>
            </div>
            <p className="w-full md:w-[45%] text-gray-300 font-light text-sm md:text-lg leading-relaxed">
              Managed a simulated multi-asset portfolio, growing capital from $100K to $240K. Applied risk management concepts including leverage analysis, counterparty risk evaluation, and exposure limits.
            </p>
          </div>

          {/* Experience Item 3 */}
          <div className="flex flex-col md:flex-row justify-between w-full mb-16 pl-12 md:pl-0">
            <div className="flex w-full md:w-[45%] justify-between gap-4 md:gap-12 flex-col md:flex-row mb-4 md:mb-0">
              <div>
                <h4 className="text-2xl md:text-[33px] leading-tight font-medium text-white tracking-wide mb-2">
                  Team Leader
                </h4>
                <h5 className="text-lg md:text-xl font-normal text-[#7f40ff] tracking-wide">
                  Optimization Project
                </h5>
              </div>
              <h3 className="text-4xl md:text-[48px] font-medium text-white leading-none">
                2023
              </h3>
            </div>
            <p className="w-full md:w-[45%] text-gray-300 font-light text-sm md:text-lg leading-relaxed">
              Coordinated a 12-member team to optimize waste collection routes, achieving 22% faster collection times and a 15% improvement in segregation accuracy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
