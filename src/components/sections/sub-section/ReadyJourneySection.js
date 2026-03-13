"use client";
import React from "react";

const ReadyJourneySection = () => {
  return (
    <section className="w-full flex justify-center items-center py-8 md:py-16 lg:py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
          Ready to Begin the Journey?
        </h2>
        {/* Decorative underline */}
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 rounded-full mx-auto mb-12" />
        
        {/* Main statement with color emphasis */}
        <p className="text-xl md:text-2xl font-semibold text-gray-800 max-w-3xl mx-auto leading-relaxed mb-10">
          At <span className="font-bold text-amber-600">Maharshi Agasthya Vidyanikethan</span>, we don&apos;t just open classroom doors. We create{' '}
          <span className="text-orange-600 font-bold">pathways for growth</span>,{' '}
          <span className="text-yellow-600 font-bold">learning</span>, and{' '}
          <span className="text-amber-700 font-bold">lifelong possibilities</span>.
        </p>

        {/* Supporting paragraph */}
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Explore the branch that best fits your child&apos;s journey and goals. Our dedicated community ensures a nurturing and inspired environment.
        </p>
      </div>
    </section>
  );
};

export default ReadyJourneySection;
