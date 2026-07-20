"use client";

import { FileText, Download, ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "dawarkhursheed38@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full min-h-screen bg-transparent border-t border-white/10 py-24 px-6 md:px-12 relative z-20 flex flex-col justify-between">
      
      {/* Main Full Page Content Container */}
      <div className="w-full flex-1 flex flex-col justify-center">
        <div className="w-full flex flex-col md:flex-row items-center">
          
          {/* Left side empty space for 3D character sitting at desk */}
          <div className="hidden md:block md:w-[45vw] shrink-0" />

          {/* Right side content */}
          <div className="w-full md:w-[55vw] px-4 md:px-10">
            <div className="max-w-2xl">
              
              {/* Header Badge & Title */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#aa42ff]/10 border border-[#aa42ff]/30 text-[#c88eff] text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#aa42ff] animate-pulse" />
                Get In Touch
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-none">
                Let&apos;s <span className="bg-gradient-to-r from-[#aa42ff] via-[#d097ff] to-white bg-clip-text text-transparent">Connect.</span>
              </h2>

              <p className="text-gray-400 font-light text-base md:text-lg mb-10 leading-relaxed">
                Whether you want to discuss corporate finance, data analytics, market research, or explore career opportunities, I&apos;m always open to a conversation.
              </p>

              {/* 1. Official Gmail Card */}
              <div className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-500/40 transition-all duration-500 mb-6 backdrop-blur-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Official Multi-Color Gmail SVG Icon */}
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <svg viewBox="0 0 48 48" className="w-8 h-8">
                        <path fill="#4285F4" d="M45,16.2l-5,2.75V37c0,1.66-1.34,3-3,3h-5V22.25L12,37H7c-1.66,0-3-1.34-3-3V18.95l-5-2.75"/>
                        <path fill="#34A853" d="M34,40h3c1.66,0,3-1.34,3-3V18.95l-6,4.5V40z"/>
                        <path fill="#EA4335" d="M12,22.25V40H7c-1.66,0-3-1.34-3-3V18.95l6,4.5V22.25z"/>
                        <path fill="#4285F4" d="M4,12.75V18.95l20,13.5l20-13.5v-6.2c0-2.36-2.72-3.67-4.57-2.2L24,21.55L8.57,10.55C6.72,9.08,4,10.39,4,12.75z"/>
                        <path fill="#FBBC04" d="M39.43,10.55L24,21.55L8.57,10.55C6.72,9.08,4,10.39,4,12.75v1.2l20,13.5l20-13.5v-1.2C44,10.39,41.28,9.08,39.43,10.55z"/>
                      </svg>
                    </div>

                    <div>
                      <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider block mb-1">Official Email</span>
                      <a 
                        href={`mailto:${email}`}
                        className="text-lg md:text-xl font-medium text-white hover:text-red-400 transition-colors tracking-wide block"
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      onClick={handleCopyEmail}
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 font-medium tracking-wider uppercase transition-all flex items-center gap-2"
                      title="Copy Email Address"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Copied!" : "Copy"}</span>
                    </button>
                    
                    <a
                      href={`mailto:${email}`}
                      className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all"
                      title="Send Mail"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. PROPER, BIGGER, EYE-CATCHING CV DOWNLOAD CARD */}
              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#aa42ff]/15 via-white/[0.04] to-transparent border border-[#aa42ff]/30 hover:border-[#aa42ff]/60 transition-all duration-500 mb-8 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(170,66,255,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#aa42ff]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#aa42ff]/20 border border-[#aa42ff]/40 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <FileText className="w-8 h-8 text-[#d8a9ff]" />
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">Curriculum Vitae</h3>
                      <p className="text-gray-400 text-xs md:text-sm font-light">
                        Finance, Valuation, Financial Analytics & Research Profile
                      </p>
                    </div>
                  </div>

                  <a
                    href="/Dawar_Khursheed_CV.pdf"
                    download
                    className="group/btn relative px-8 py-4 bg-gradient-to-r from-[#aa42ff] to-[#8a2be2] hover:from-[#b85aff] hover:to-[#9932cc] text-white rounded-2xl font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(170,66,255,0.4)] hover:shadow-[0_0_30px_rgba(170,66,255,0.7)] flex items-center justify-center gap-3 shrink-0 text-base overflow-hidden"
                  >
                    <Download className="w-5 h-5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    <span>Download CV</span>
                  </a>

                </div>
              </div>

              {/* 3. Social Links (LinkedIn & GitHub) */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/dawarkh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all duration-500 flex items-center justify-between backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/30 flex items-center justify-center text-[#0077b5]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block">LinkedIn</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0077b5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="https://github.com/Dawarkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all duration-500 flex items-center justify-between backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block">GitHub</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Copyright Bar */}
      <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Peerzada Dawar Khursheed. All rights reserved.</p>
        <p>Built with Next.js, Three.js, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
