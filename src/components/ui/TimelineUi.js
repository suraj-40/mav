"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export const TimelineUi = ({ data = [] }) => {
  const containerRef = useRef(null);
  const contentRefs = useRef([]);
  const nameRefs = useRef([]); // Refs for each name element
  const lineRef = useRef(null); // Ref for the timeline line

  // Populate contentRefs only once based on data length
  if (Array.isArray(data) && contentRefs.current.length !== data.length) {
    contentRefs.current = Array(data.length)
      .fill(null)
      .map(() => React.createRef());
  }

  useEffect(() => {
    if (!containerRef.current || !data.length) return;

    const sectionHeight = containerRef.current.scrollHeight / data.length;

    // Animate names (entry animations)
    nameRefs.current.forEach((nameEl, index) => {
      if (!nameEl) return;

      if (index === 0) {
        gsap.fromTo(
          nameEl,
          { y: "100vh" },
          {
            y: 0,
            duration: 0.5,
            delay: 0.10,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 5%",
              end: "top 20%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      } else {
        gsap.fromTo(
          nameEl,
          { y: "100vh" },
          {
            y: index * 30,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${index * sectionHeight} 80%`,
              end: `top+=${(index + 0.5) * sectionHeight} 60%`,
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Fade out left section when timeline is scrolled past
    gsap.to(".left-section", {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom 80%",
        end: "bottom 90%",
        scrub: true,
      },
    });

    // Active button highlighting with TabButtonPrimary styling
    nameRefs.current.forEach((nameEl, index) => {
      if (!nameEl || !contentRefs.current[index]?.current) return;

      const underline = nameEl.querySelector(".underline"); // Target the span for underline

      ScrollTrigger.create({
        trigger: contentRefs.current[index].current,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          gsap.to(nameEl, {
            backgroundColor: "#FFFFFF", // Active bg-white
            color: "#F97316", // Active text-orange
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-bottom
            duration: 0.2,
            ease: "none",
          });
          gsap.to(underline, {
            width: "100%", // Full width underline
            duration: 0.2,
            ease: "none",
          });
        },
        onLeave: () => {
          gsap.to(nameEl, {
            backgroundColor: "#FFFFFF", // Default bg-white
            color: "#1a2b4e", // Default text-darkblue
            boxShadow: "none", // No shadow
            duration: 0.2,
            ease: "none",
          });
          gsap.to(underline, {
            width: "0%", // No underline
            duration: 0.2,
            ease: "none",
          });
        },
        onEnterBack: () => {
          gsap.to(nameEl, {
            backgroundColor: "#FFFFFF",
            color: "#F97316",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            duration: 0.2,
            ease: "none",
          });
          gsap.to(underline, {
            width: "100%",
            duration: 0.2,
            ease: "none",
          });
        },
        onLeaveBack: () => {
          gsap.to(nameEl, {
            backgroundColor: "#FFFFFF",
            color: "#1a2b4e",
            boxShadow: "none",
            duration: 0.2,
            ease: "none",
          });
          gsap.to(underline, {
            width: "0%",
            duration: 0.2,
            ease: "none",
          });
        },
      });
    });

    // Refresh ScrollTrigger to ensure proper calculations
    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [data]);

  const scrollToSection = (index) => {
    if (contentRefs.current[index]?.current) {
      contentRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div className="relative max-w-7xl mx-auto pb-20">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Fixed Names (15%) */}
          <div className="left-section fixed w-full md:w-[15%] ml-5 mt-20 h-screen top-0 left-0 flex flex-col gap-6 z-40 pt-10">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (nameRefs.current[index] = el)}
                  className="text-darkblue p-3px pl-4 dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor dark:hover:bg-whiteColor-dark hover:bg-white relative group/btn hover:shadow-bottom dark:shadow-standard-dark disabled:cursor-pointer rounded-standard py-10px" // Added pl-4
                >
                  <span
                    className="underline absolute h-1 bg-primaryColor top-0 left-0 w-0 transition-all duration-200"
                  ></span>
                  <h3
                    className="text-lg md:text-2xl text-center cursor-pointer hover:text-orange" // Changed from text-xl md:text-3xl
                    onClick={() => scrollToSection(index)}
                  >
                    {item.name}
                  </h3>
                </div>
              ))
            ) : (
              <p>No timeline data available</p>
            )}
          </div>

          {/* Right Section - Scrollable Content (85%) */}
          <div className="w-full md:w-[85%] md:ml-[15%] pl-6 pr-4 md:pl-8 relative">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <div
                  key={index}
                  ref={contentRefs.current[index]}
                  className="md:pt-10 min-h-screen"
                >
                  <h3 className="md:hidden block text-xl font-bold text-darkblue mb-4 ">
                    {item.name}
                  </h3>
                  {item.content}
                </div>
              ))
            ) : (
              <p>No content to display</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};