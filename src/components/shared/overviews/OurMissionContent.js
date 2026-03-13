"use client";
import Image from "next/image";
import React, { useState } from "react";
import missionImage from "@/assets/images/about/AV-Ullal.jpg";

const OurMissionContent = () => {
  const [showFullText, setShowFullText] = useState(false);
  const visibleLines = 3;

  const paragraphs = [
    "MAHARSHI AGASTHYA VIDYANIKETHAN, the educational arm of Shree Aradhya Educational & Charitable Trust, began humbly 13 years ago with 30+ students. Today, it serves over 1000+ students across its Srigandhakaval and Ullal branches in Bengaluru, Karnataka, delivering value-based, hands-on experiential education.",
    "Our nursery classes follow Maria Montessori’s trusted approach, offering hands-on exposure to young minds. These formative years are scientifically planned to build a strong foundation, preparing children to face 21st-century challenges with confidence and joy.",
    "As students progress to primary and high school, we focus on academics and instill a strong humanistic personality. Maharshi Agasthya Vidyanikethan is renowned for its quality education, cultural values, and traditional ethos, making it a top choice in the region.",
    "We are committed to holistic development, equipping students with confidence and skills for future success through a comprehensive educational approach.",
    "Our bagless schooling lightens physical burdens and enriches learning, supported by the ATOMS personalized learning portal, ensuring tailored education for each student with an impeccable academic track record.",
    "Our curriculum fosters creativity, critical thinking, and adaptability through project-based learning, group work, and real-world problem-solving. This engaging approach prepares students to contribute to the knowledge economy, driven by dedicated management and highly qualified staff.",
  ];

  return (
    <section className="relative bg-white py-12 md:py-16 transition-opacity duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              {paragraphs
                .slice(0, showFullText ? paragraphs.length : visibleLines)
                .map((para, index) => (
                  <p
                    key={index}
                    className="text-gray-600 leading-relaxed text-base"
                  >
                    {para}
                  </p>
                ))}
              {paragraphs.length > visibleLines && (
                <button
                  onClick={() => setShowFullText(!showFullText)}
                  className="inline-block rounded-lg bg-orange-500 px-6 py-2 font-medium text-white shadow-md transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  aria-label={showFullText ? "Show less content" : "Show more content"}
                >
                  {showFullText ? "Show Less" : "Know More"}
                </button>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src={missionImage}
                alt="Ullal Campus"
                width={600}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                placeholder="blur"
              />
            </div>
            <p className="mt-2 text-center text-sm italic text-gray-500">
              Ullal Campus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionContent;