import React from "react";

const ReadyJourneySection = () => (
  <section className="w-full flex justify-center items-center py-8 md:py-10 bg-transparent">
    <div
      className="max-w-3xl w-full mx-4 md:mx-auto rounded-2xl shadow-2xl p-6 md:p-8 text-center relative mt-12 md:mt-20"
      style={{
        background: "linear-gradient(90deg, #FFF8E1 0%, #FFEFD0 100%)",
        boxShadow: "0 8px 32px 0 rgba(44, 44, 44, 0.10), 0 1.5px 8px 0 rgba(0,0,0,0.07), 0 0 0 8px #fff8"
      }}
    >
      {/* SVG curve behind text */}
      <div className="absolute left-0 right-0 top-[54%] md:top-[56%] z-0 pointer-events-none">
        <svg width="100%" height="40" viewBox="0 0 800 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 25 Q400 0 780 25 Q790 27 800 35" stroke="#FFD180" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.18"/>
          <circle cx="800" cy="35" r="12" fill="#FFD180" opacity="0.18"/>
        </svg>
      </div>
      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-extrabold mb-3 text-[#23263B] drop-shadow-sm tracking-tight">Ready to Begin the Journey?</h2>
        <div className="text-[#4B4F5C] text-sm md:text-base font-medium leading-snug space-y-1">
          <div>At Agasthya Vidyanikethan, we don&apos;t just open classroom doors. We create<br className="hidden md:inline"/> pathways for growth, learning, and lifelong possibilities.</div>
          <div className="mt-3 md:mt-4 font-bold">Explore the branch that best fits with your child&apos;s journey and goals.</div>
        </div>
      </div>
    </div>
  </section>
);

export default ReadyJourneySection; 