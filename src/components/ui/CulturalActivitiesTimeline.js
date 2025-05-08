"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const CulturalActivitiesTimeline = ({ data, activeTab }) => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Update measurements whenever content changes or resizes
  useEffect(() => {
    if (!containerRef.current) return;

    const calculateHeights = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.getBoundingClientRect().height;
        setTimelineHeight(containerHeight);
      }
    };

    // Calculate initial heights
    calculateHeights();
    // Set a small delay to ensure all content has rendered
    const timer = setTimeout(() => {
      calculateHeights();
      setIsLoaded(true);
    }, 100);

    // Recalculate on window resize
    window.addEventListener("resize", calculateHeights);

    // Cleanup
    return () => {
      window.removeEventListener("resize", calculateHeights);
      clearTimeout(timer);
    };
  }, [containerRef, activeTab, data]);

  // Improved scroll animation with better start/end trigger points
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"], // Adjusted for better timeline visibility
  });

  // Transform the line based on scroll progress
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-6 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-64 h-64 bg-purple-50 rounded-full opacity-30 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      </div>

      {/* Timeline container */}
      <div ref={containerRef} className="relative max-w-7xl mx-auto pb-20">
        {/* Timeline vertical line container */}
        <div 
          ref={timelineRef}
          className="absolute md:left-8 left-8 top-0 bottom-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height: isLoaded ? timelineHeight : 0 }}
        >
          {/* Animated line overlay */}
          <motion.div
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#FF5722] via-orange-500 to-transparent from-[0%] via-[10%] rounded-full origin-top"
            style={{ 
              scaleY: lineScaleY,
              opacity: lineOpacity,
              height: "100%",
              transformOrigin: "top"
            }}
          />
        </div>

        {/* Timeline content */}
        {data.map((item, index) => (
          <TimelineItem 
            key={`${activeTab}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

// Extracted TimelineItem component for better organization
const TimelineItem = ({ item, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.3 });
  
  return (
    <motion.div
      ref={itemRef}
      className="flex justify-start pt-10 md:pt-16 md:gap-10"

      
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-100">
          <motion.div 
            className="h-4 w-4 rounded-full bg-gradient-to-r from-[#FF5722] to-orange-600"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
        </div>
        <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
          {item.title}
        </h3>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full min-h-[400px]">
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
          {item.title}
        </h3>
        {item.content}
      </div>
    </motion.div>
  );
};

export default CulturalActivitiesTimeline;