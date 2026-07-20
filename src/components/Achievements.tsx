"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function HoverText({ text, subtitle }: { text: string; subtitle: string }) {
  return (
    <div className="group cursor-pointer py-6 border-b border-[#363636] flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="relative overflow-hidden inline-block mb-2 md:mb-0">
        <motion.div 
          className="flex flex-col"
          initial="initial"
          whileHover="hover"
        >
          <motion.span 
            className="text-3xl md:text-5xl font-medium text-white block leading-tight"
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" }
            }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {text}
          </motion.span>
          <motion.span 
            className="text-3xl md:text-5xl font-medium text-[#aa42ff] absolute top-full left-0 block leading-tight"
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" }
            }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {text}
          </motion.span>
        </motion.div>
      </div>
      <span className="text-gray-400 font-light tracking-wide">{subtitle}</span>
    </div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-transparent py-32 px-6 md:px-12 z-20 relative">
      <div className="max-w-4xl ml-auto mr-0 md:mr-12 flex flex-col md:flex-row gap-8 md:gap-16">
        
        {/* Header */}
        <div className="w-full md:w-1/3">
          <h2 className="text-5xl md:text-[80px] leading-none font-medium tracking-tighter text-white mb-6 sticky top-32">
            Awards <span className="text-[#aa42ff]">&</span> <br /> Extras
          </h2>
        </div>

        {/* List */}
        <div ref={ref} className="w-full md:w-2/3 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="flex flex-col border-t border-[#363636]"
          >
            <HoverText text="Gold Medalist" subtitle="B.B.A (Hons) Academic Excellence" />
            <HoverText text="Finalist" subtitle="HULT PRIZE 2023" />
            <HoverText text="Top 15" subtitle="Harvard Project for Asian & International Relations (HPAIR)" />
            <HoverText text="General Secretary" subtitle="Literary Club" />
            <HoverText text="Event Coordinator" subtitle="VIVANTE '23 (50+ colleges)" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
