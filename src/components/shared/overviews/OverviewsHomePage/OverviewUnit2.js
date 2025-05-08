"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Av21 from "@/assets/images/about/AV-21.png";
import Av22 from "@/assets/images/about/AV-2.png";
import Av23 from "@/assets/images/about/AV-23.png";
import Av24 from "@/assets/images/about/AV-13.jpeg";
import PopupVideo from "@/components/shared/popup/PopupVideo";

const images = [Av21,  Av23, Av22, Av24];
const OverviewUnit2 = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [current, setCurrent] = useState(0);
  const visibleLines = 2;

  const paragraphs = [
    "AGASTHYA VIDYANIKETHAN, the educational arm of Shree Aradhya Educational & Charitable Trust, began humbly 13 years ago with 30+ students. Today, it serves over 1000+ students across its Srigandhakaval and Ullal branches in Bengaluru, Karnataka, delivering value-based, hands-on experiential education.",
    "Our nursery classes follow Maria Montessori’s trusted approach, offering hands-on exposure to young minds. These formative years are scientifically planned to build a strong foundation, preparing children to face 21st-century challenges with confidence and joy.",
    "As students progress to primary and high school, we focus on academics and instill a strong humanistic personality. Agasthya Vidyanikethan is renowned for its quality education, cultural values, and traditional ethos, making it a top choice in the region.",
    "We are committed to holistic development, equipping students with confidence and skills for future success through a comprehensive educational approach.",
    "Our bagless schooling lightens physical burdens and enriches learning, supported by the ATOMS personalized learning portal, ensuring tailored education for each student with an impeccable academic track record.",
    "Our curriculum fosters creativity, critical thinking, and adaptability through project-based learning, group work, and real-world problem-solving. This engaging approach prepares students to contribute to the knowledge economy, driven by dedicated management and highly qualified staff.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative bg-white pb-5 text-justify">
      <div className="container">
        {/* Carousel Section */}
        <div className="relative w-full h-[300px] md:h-[500px] flex justify-center items-center overflow-hidden ">
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute"
            >              
              <div className="inline-block px-4 relative">
              <Image
                src={images[current]}
                alt={`Slide ${current + 1}`}
                width={600}
                height={400}
                className="rounded-xl shadow-xl object-cover"
                placeholder="blur"
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                  <PopupVideo videoUrl="https://youtu.be/JtNwasPIvO4" />
              </div>  
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Control Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-avorange text-white p-1 w-10 rounded-full shadow-md hover:text-avorange  hover:shadow-xl hover:bg-white z-20"
            aria-label="Previous slide"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-avorange text-white p-1 w-10 rounded-full shadow-md hover:text-avorange hover:shadow-xl hover:bg-white z-20"
            aria-label="Next slide"
          >
            ▶
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-orange-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <div className="space-y-4  ">
            {paragraphs
              .slice(0, showFullText ? paragraphs.length : visibleLines)
              .map((para, index) => (
                <p key={index} className="text-gray-600 leading-relaxed text-base">
                  {para}
                </p>
              ))}
            {paragraphs.length > visibleLines && (
              <div className="text-center">
              <button
                onClick={() => setShowFullText(!showFullText)}
                className="inline-block rounded-lg bg-orange-500 px-6 py-2 font-medium text-white shadow-md transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              >
                {showFullText ? "Show Less" : "Know More"}
              </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewUnit2;