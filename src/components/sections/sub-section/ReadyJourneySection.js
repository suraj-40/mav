'use client';

import React from "react";

const ReadyJourneySection = () => (
  <section className="w-full flex justify-center items-center py-8 md:py-10 bg-transparent relative overflow-hidden">
    {/* Floating background elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-yellow-200/40 to-amber-200/40 rounded-full blur-lg animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-gradient-to-br from-orange-200/25 to-yellow-200/25 rounded-full blur-md animate-pulse delay-1000"></div>
    </div>

    <div
      className="max-w-3xl w-full mx-4 md:mx-auto rounded-2xl shadow-2xl p-6 md:p-8 text-center relative mt-8 md:mt-12 group transition-all duration-700 hover:scale-105 hover:shadow-3xl"
      style={{
        background: "linear-gradient(135deg, #FFF8E1 0%, #FFEFD0 25%, #FFE4B5 50%, #FFDAB9 75%, #FFEFD0 100%)",
        boxShadow: `
          0 20px 60px -12px rgba(255, 193, 7, 0.25),
          0 8px 32px 0 rgba(44, 44, 44, 0.12),
          0 1.5px 8px 0 rgba(0,0,0,0.08),
          0 0 0 1px rgba(255, 193, 7, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.8)
        `,
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 193, 7, 0.2)"
      }}
    >
      {/* Animated geometric shapes */}
      <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg rotate-45 animate-bounce delay-300 opacity-60"></div>
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full animate-bounce delay-500 opacity-70"></div>
      <div className="absolute top-6 left-6 w-3 h-3 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-sm rotate-12 animate-pulse delay-700 opacity-50"></div>

      {/* Enhanced SVG curve with animations */}
      {/* (SVG curve removed) */}

      {/* Content with enhanced styling */}
      <div className="relative z-10">
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 drop-shadow-lg tracking-tight leading-tight transform group-hover:scale-105 transition-transform duration-500">
            Ready to Begin the Journey?
          </h2>
          {/* Decorative underline */}
          {/* (Underline removed) */}
        </div>

        <div className="text-slate-700 text-sm md:text-base font-semibold leading-relaxed space-y-3 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 via-transparent to-orange-100/50 rounded-lg blur-sm"></div>
            <div className="relative p-3 rounded-lg backdrop-blur-sm">
              At Agasthya Vidyanikethan, we don&apos;t just open classroom doors. We create<br className="hidden md:inline"/>
              <span className="font-bold text-amber-800 drop-shadow-sm"> pathways for growth</span>,
              <span className="font-bold text-orange-800 drop-shadow-sm"> learning</span>, and
              <span className="font-bold text-yellow-800 drop-shadow-sm"> lifelong possibilities</span>.
            </div>
          </div>

          <div className="mt-4 md:mt-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/60 via-amber-100/60 to-orange-100/60 rounded-xl blur-sm"></div>
            <div className="relative p-4 font-bold text-slate-800 bg-gradient-to-r from-amber-50/80 to-orange-50/80 rounded-xl border border-amber-200/50 shadow-inner backdrop-blur-sm">
              <span className="text-base md:text-lg drop-shadow-sm">
                Explore the branch that best fits with your child&apos;s journey and goals.
              </span>
            </div>
          </div>
        </div>

        {/* Call-to-action enhancement */}
        <div className="mt-6 md:mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="text-sm md:text-base">Start Your Journey</span>
            <svg className="w-4 h-4 animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Sparkle effects */}
      <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-12 left-8 w-1 h-1 bg-amber-400 rounded-full animate-ping delay-1500"></div>
      <div className="absolute top-16 left-1/3 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-2000"></div>
    </div>
  </section>
);

export default ReadyJourneySection;

// Custom bounce animation for arrow
<style jsx>{`
  .animate-bounce-slow {
    animation: bounce-slow 1.4s infinite cubic-bezier(0.28, 0.84, 0.42, 1);
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-7px); }
  }
`}</style>