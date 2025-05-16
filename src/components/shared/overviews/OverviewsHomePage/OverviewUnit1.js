"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Av21 from "@/assets/images/av1/img4.jpg";
import Av22 from "@/assets/images/av1/img10.jpeg";
import Av23 from "@/assets/images/av1/img6.jpg";
import Av24 from "@/assets/images/av1/img3.jpg";
import Av25 from "@/assets/images/av1/img8.jpg";
import Av26 from "@/assets/images/av1/img9.jpg";
import Av27 from "@/assets/images/av1/img2.jpg";
import Av28 from "@/assets/images/av1/img5.jpg";
import Av29 from "@/assets/images/av1/img1.jpg";
import Av30 from "@/assets/images/av1/img7.jpg";
import PopupVideo from "@/components/shared/popup/PopupVideo";

const images = [Av21,  Av29, Av23, Av22, Av24, Av25, Av26, Av27, Av28, Av30];

const OverviewUnit2 = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [current, setCurrent] = useState(0);
  const extraTextRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKnowMoreClick = () => {
    setShowFullText((prev) => {
      const newState = !prev;
      setTimeout(() => {
        if (prev) {
          extraTextRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollBy({ top: -1000, behavior: "smooth" }); // Custom scroll-up
        }
      }, 100);
      return newState;
    });
  };

  return (
    <section className="relative bg-white pb-5 text-justify">
      <div className="">
        {/* Carousel Section */}
        <div className="relative  h-[200px] md:h-[360px] mb-5 md:mb-7 flex justify-center items-center overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute"
            >
              <div className="shadow-xl overflow-hidden">
              <Image
                src={images[current]}
                alt={`Slide ${current + 1}`}
                width={600}
                height={300}
                className=""
                placeholder="blur"
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                <PopupVideo videoUrl="https://youtu.be/ZxUeiNTYHfA" />
              </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Control Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-2/5 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-2/5 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
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
          <div className="space-y-4">
            <div className="leading-relaxed text-base">
            <b>Founded in 2012,</b> Agasthya Vidyanikethan&apos;s Srigandhakaval branch has been a proud cradle of academic excellence, creativity, and culture. Here, students don&apos;t just study — they perform, create, compete, and evolve into confident individuals who carry their culture and skills with pride. As our longest-standing branch, Srigandhakaval continues to raise young minds who are ready to shine in every sphere — academic, co-curricular, and beyond. For us, education isn&apos;t a routine — it&apos;s an awakening. Here, resilience isn&apos;t taught, it&apos;s built in the moments students take the stage, solve the challenge, or create something uniquely theirs. Learning steps out of books and into action — on the chessboard, in the science fair, through theatre performances, and in every space where children discover not just answers, but their own power.
            </div>

            {showFullText && (
              <div ref={extraTextRef}>
                  <div className="bg-gray-50 text-gray-800 rounded-lg mt-5 p-6  shadow-inner border border-gray-200 text-md" > 
                  <div className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent  text-lg font-bold text-center">
                  Skills Are Honed and Stages Are Owned</div>
                  Students don&apos;t just participate — they take the spotlight. From theatre skits that build fearless speakers to chess matches that sharpen young strategists, every activity is designed to craft real-world skills. Science labs turn curiosity into discovery, art & craft melas unleash hidden talents, and Olympiads and exhibitions challenge students to rise, compete, and conquer. Here, learning doesn&apos;t sit still — it moves, performs, and wins.
                  </div>

                  <div className="bg-gray-50   text-gray-800 rounded-lg mt-5 p-6 shadow-inner border border-gray-200 text-md"> 
                  <div className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent  text-lg font-bold text-center">
                  Educators dedicated to Individual Growth </div>
                  With seasoned educators who spot strengths others might miss, every child in Agasthya Vidyanikethan receives guidance that feels personal and purposeful. Lessons turn into lively conversations, doubts are turned into discoveries, and hidden talents quietly grow into proud skills. Whether it&apos;s helping a shy learner find their voice or polishing a budding writer&apos;s flair, our teachers craft every child&apos;s path with care, patience, and insight.
                  </div>
                  

                  <div className="bg-gray-50  text-gray-800 rounded-lg mt-5 p-6 shadow-inner border border-gray-200"> 
                  <div className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent  text-lg font-bold text-center">
                  Top-Notch Facilities for our Champions </div>
                  Our campus is more than just a place to learn—it&apos;s a space designed to inspire, support, and prepare students for the future. With state-of-the-art labs, well-organized transport, and a peaceful, disciplined environment, every corner is tailored to foster growth. Yoga sessions instill mindfulness and resilience, while cutting-edge computer science programs empower students with the skills they need for a rapidly changing world. This is where tradition blends seamlessly with innovation, and each day sets the stage for tomorrow&apos;s success.
                  </div>
                  <div className="bg-gray-50  text-gray-800 rounded-lg mt-5 p-6 shadow-inner border border-gray-200">
                  <div className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent  text-lg font-bold text-center">
                  A Tradition of Excellence and Holistic Growth
                  </div>
                  Growth at Agasthya Vidyanikethan starts with a culture that anchors, discipline that shapes, and academics that sharpen every child&apos;s mind. Here, potential is awakened through experiences that build both knowledge and character. Every child is guided to think critically, perform better, and carry their culture with pride, excelling in studies while growing into a confident and capable individual. Academic strength is deeply intertwined with character building, ensuring that your child is ready for every challenge and opportunity that comes their way. With every lesson mastered, every event embraced, and every experience lived, they step forward stronger in knowledge, richer in values, and ready to shine. With every subject learned, every event participated in, and every experience embraced, they move forward with greater knowledge, deeper values, and the readiness to succeed.
                  </div>                           
              </div>
            )}

            <div className="text-center">
              <button
                onClick={handleKnowMoreClick}
                className="inline-block rounded-lg bg-orange-500 px-6 py-2 font-medium text-white shadow-md transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              >
                {showFullText ? "Show Less" : "Know More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewUnit2;


