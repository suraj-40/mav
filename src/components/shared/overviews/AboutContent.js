"use client";

import Image from "next/image";
import React, { useState } from "react";
import overviewImage from "@/assets/images/about/overview.jpg";
import overviewKidImage from "@/assets/images/about/AV-1.png";
import useIsTrue from "@/hooks/useIsTrue";

const AboutContent = () => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");
  const [showFullText, setShowFullText] = useState(false);
  const visibleLines = 3; // Show first 3 paragraphs initially

  // Define paragraphs for the default content (non-/about or /about-dark routes)
  const defaultParagraphs = [
    "AGASTHYA VIDYANIKETHAN, the educational arm of Shree Aradhya Educational & Charitable Trust, began humbly 13 years ago with 30+ students. Today, it serves over 1000+ students across its Srigandhakaval and Ullal branches in Bengaluru, Karnataka, delivering value-based, hands-on experiential education.",
    "Our nursery classes follow Maria Montessori’s trusted approach, offering hands-on exposure to young minds. These formative years are scientifically planned to build a strong foundation, preparing children to face 21st-century challenges with confidence and joy.",
    "As students progress to primary and high school, we focus on academics and instill a strong humanistic personality. Agasthya Vidyanikethan is renowned for its quality education, cultural values, and traditional ethos, making it a top choice in the region.",
    "We are committed to holistic development, equipping students with confidence and skills for future success through a comprehensive educational approach.",
  ];

  // Define paragraphs for /about or /about-dark routes
  const aboutParagraphs = [
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use...",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use...",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use...",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                About Us
                <span className="relative mt-2 block text-school-orange">
                  Our Journey
                  <span className="absolute -bottom-1 left-0 h-1 w-1/3 bg-school-orange"></span>
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {isAbout || isAboutDark ? (
                <>
                  <h4 className="text-xl font-semibold text-school-navy mb-4 mt-6">
                    World Best Education Site - (Computer Engineering)
                  </h4>
                  {aboutParagraphs
                    .slice(0, showFullText ? aboutParagraphs.length : visibleLines)
                    .map((para, index) => (
                      <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  {aboutParagraphs.length > visibleLines && (
                    <button
                      onClick={() => setShowFullText(!showFullText)}
                      className="rounded-lg bg-school-orange px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-school-orange-dark focus:outline-none focus:ring-2 focus:ring-school-orange/50"
                    >
                      {showFullText ? "Show Less" : "Know More"}
                    </button>
                  )}
                </>
              ) : (
                <>
                  {defaultParagraphs
                    .slice(0, showFullText ? defaultParagraphs.length : visibleLines)
                    .map((para, index) => (
                      <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  {defaultParagraphs.length > visibleLines && (
                    <button
                      onClick={() => setShowFullText(!showFullText)}
                      className="rounded-lg bg-school-orange px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-school-orange-dark focus:outline-none focus:ring-2 focus:ring-school-orange/50"
                    >
                      {showFullText ? "Show Less" : "Know More"}
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={isHome9 || isHome9Dark ? overviewKidImage : overviewImage}
                alt={isHome9 || isHome9Dark ? "Agasthya Vidyanikethan Kids" : "Campus Overview"}
                width={600}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                placeholder="blur"
              />
            </div>
            <p className="mt-2 text-center text-sm italic text-gray-500">
              {isHome9 || isHome9Dark ? "Srigandhakaval Branch Campus" : "Main Campus View"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;