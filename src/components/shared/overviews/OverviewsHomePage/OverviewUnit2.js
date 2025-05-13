"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Av21 from "@/assets/images/av2/img1.jpg";
import Av22 from "@/assets/images/av2/img11.jpg";
// import Av23 from "@/assets/images/av2/img4.jpg";
import Av24 from "@/assets/images/av2/img2.jpg";
import Av25 from "@/assets/images/av2/img6.jpg";
import Av26 from "@/assets/images/av2/img9.jpg";
import Av27 from "@/assets/images/av2/img10.jpg";
import Av28 from "@/assets/images/av2/img3.jpg";
import Av29 from "@/assets/images/av2/img8.jpg";
// import Av210 from "@/assets/images/av2/img5.jpg";
import Av211 from "@/assets/images/av2/img7.jpg";
import PopupVideo from "@/components/shared/popup/PopupVideo";

const images = [Av21, Av22, Av24, Av25, Av26, Av27, Av28, Av29, Av211];

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
          window.scrollBy({ top: -1500, behavior: "smooth" }); // Custom scroll-up
        }
      }, 100);
      return newState;
    });
  };

  return (
    <section className="relative bg-white pb-5 text-justify">
      <div className="">
        {/* Carousel Section */}
        <div className="relative h-[200px] md:h-[360px] mb-5 md:mb-7 flex justify-center items-center overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute"
            >
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
              In 2024, Agasthya Vidyaniketan opened its Ullal branch with a clear mission to revolutionize education and create a space where students aren&apos;t just taught but are inspired to grow into their finest version. While our original branch continues to lead the way, the Ullal branch shines as a beacon for those ready to begin a journey of growth, innovation, and limitless possibilities. We see education as a transformative journey, not just a path through textbooks. It&apos;s av2 igniting curiosity, fueling ideas & innovation, and instilling values that help students succeed in school or life. Here, learning isn&apos;t confined to a classroom; it extends into real-world experiences that build character, resilience, and the confidence to dream big.
            </div>

            {showFullText && (
              <div ref={extraTextRef}>
                  <div className="bg-gray-50 text-gray-800 rounded-lg mt-5 p-6  shadow-inner border border-gray-200 text-md" > 
                  <div className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent  text-lg font-bold text-center">
                  Hands-On Learning Experience </div>
                  We believe in the power of practical knowledge. Our students don&apos;t just learn the theories; they live them. With state-of-the-art facilities like fully equipped science labs, a math lab, a computer lab, a language lab, and a well-stocked library, we create an environment where students are encouraged to explore, experiment, and discover. Concepts come to life when you can touch, test, and interact — this is the Agasthya way of learning.
                  </div>

                  <div className="bg-gray-50   text-gray-800 rounded-lg mt-5 p-6 shadow-inner border border-gray-200 text-md"> 
                  <div className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent  text-lg font-bold text-center">
                  Expert Teachers, Personal Growth </div>
                  Our dedicated educators are not just teachers; they are mentors who focus on making lessons engaging and relevant using practical examples and digital technology. We believe in keeping learning interactive. Students don&apos;t just listen; they actively participate, solve problems, and apply what they learn in real situations. Each student receives the attention they need to succeed, with teachers adjusting their approach based on individual needs and strengths.
                  </div>
                  

                  <div className="bg-gray-50  text-gray-800 rounded-lg mt-5 p-6 shadow-inner border border-gray-200"> 
                  <div className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent  text-lg font-bold text-center">
                  A Secure, Comfortable, and Future-Ready Environment </div>
                  At Agasthya Vidyaniketan, your child&apos;s safety comes first — always. With 24/7 CCTV security and a calm, protected campus, every student can learn and grow with complete peace of mind. Our spacious, sunlit classrooms create the perfect space for young minds to focus and imagine. And with smart tools like LED screens, lessons come alive, blending comfort, safety, and technology to provide an experience that is both secure and exciting every day.
                  </div>

                  <div className="bg-gray-50  text-gray-800 rounded-lg mt-5 p-6 shadow-inner border border-gray-200">
                  <div className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent  text-lg font-bold text-center">
                  All-Round Development: Sports, Arts, and More </div>
                  Excellence isn&apos;t limited to exam scores; it&apos;s reflected in the confidence to perform, the discipline of sport, and the creativity that sparks new ideas. Here, every child steps into arenas that challenge, refine, and expand their true potential. With world-class opportunities in sports, arts, and cultural pursuits, we help students discover their spark and grow into leaders, creators, and innovators.
                  </div>


                  <div className="bg-gray-50  text-gray-800 rounded-lg mt-5 p-6 shadow-inner border border-gray-200">
                  <div className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent  text-lg font-bold text-center">
                  A School Built for Success </div>
                  Success doesn&apos;t happen by accident; it&apos;s built step by step, in the right environment. At Agasthya Vidyaniketan, sharp intellect meets real-world skill, and character grows alongside achievement. With elite academic programs, vibrant libraries, cutting-edge classrooms, and a strong focus on well-being, we create the space where tomorrow&apos;s leaders are shaped with care and precision.
                  </div>

                  <div className="bg-gray-50  text-gray-800 rounded-lg mt-5 p-6 shadow-inner border border-gray-200">
                  <div className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent  text-lg font-bold text-center">
                  More Than a Start — Agasthya Vidyaniketan is a Portal to Success</div>
                  The path to excellence begins with that first bold step. Here, students aren&apos;t just prepared; they are primed to excel, to lead, and to stand apart. Give your child more than schooling, they deserve the tools to excel, the opportunities to lead, and the unwavering support to reach their full potential.
                  <div className="font-bold text-center mt-3">We don&apos;t just educate — we shape confident, capable individuals ready to face the world. </div>
                  </div>

                  <div className="bg-gray-50  text-gray-800 rounded-lg mt-5 p-6 shadow-inner border border-gray-200 text-center">
                  At <span className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent font-bold font-samarkan text-xl"> Agasthya Vidyaniketan </span> we prepare them for a future filled with promise, pride, and limitless possibility.
                  <div className="bg-gradient-to-r from-[#FF5722] to-orange-950 bg-clip-text text-transparent  text-lg font-bold text-center">
                  Enroll now and take the first step toward a future they&apos;ll own.</div>
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
