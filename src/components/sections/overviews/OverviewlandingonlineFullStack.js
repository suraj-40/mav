"use client";
import TabButtonSecondary from "@/components/shared/buttons/TabButtonSecondary";
import HeadingSecondary from "@/components/shared/headings/HeadingSecondary";
import HeroName from "@/components/shared/section-names/HeroName";
import TabContentWrapper from "@/components/shared/wrappers/TabContentWrapper";
import useTab from "@/hooks/useTab";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import VideoPlayer from "@/components/shared/videoplayer/VideoPlayer"; // Import the VideoPlayer component

const Overview = () => {
  const { currentIdx, handleTabClick } = useTab();

  const tabButtons = [
    {
      name: "Edutainment Videos",
      content: "Learn at your own pace with videos that educate and entertain!",
      videoUrl: "https://www.youtube.com/embed/6vX17JjPWR0"
    },
    {
      name: "eBooks",
      content:
        "Quick, colorful, and comprehensive guides for lasting knowledge!",
      videoUrl: "https://www.youtube.com/embed/rY4xLF4mEeU"
    },
    {
      name: "True or False Questions",
      content:
        "Challenge yourself with quick decisions—three chances to succeed!",
      videoUrl: "https://www.youtube.com/embed/mv7E5rZ5Jcg"
    },
    {
      name: "MCQ Questions",
      content:
        "Test your skills, boost your score, and level up your learning!",
      videoUrl: "https://www.youtube.com/embed/m0cy3tyKq4c"
    },
    {
      name: "Fill in the Blanks",
      content:
        "Think, recall, and type it right—sharpen your memory one blank at a time!",
      videoUrl: "https://www.youtube.com/embed/_nS6hrMr0PY"
    }
  ];

  return (
    <section
      id="ourofferings"
      className="pt-10 pb-24 md:my-auto px-4 container md:px-6 lg:px-8 bg-gradient-to-b overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container pt-20px">

        <motion.div
            className=" mb-10 text-center relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            {/* Text content with staggered animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.h1
                className="text-3xl md:text-4xl font-bold  tracking-tight"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
                 A Glimpse of AV-ATOMS Learning Platform
                </span>
              </motion.h1>              

              <motion.div
                className="flex justify-center "
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <svg
                  className="w-[120px] h-[20px] sm:w-[180px] sm:h-[30px]" // Adjust size for mobile and larger screens
                  viewBox="0 0 180 30"
                >
                  <defs>
                    <linearGradient
                      id="headingUnderline"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FF5722" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#FF5722" stopOpacity="1" />
                      <stop
                        offset="100%"
                        stopColor="#FF5722"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M5,20 Q90,5 175,20"
                    fill="none"
                    stroke="url(#headingUnderline)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="d"
                      dur="6s"
                      repeatCount="indefinite"
                      values="M5,20 Q90,5 175,20; M5,15 Q90,25 175,15; M5,20 Q90,5 175,20"
                      calcMode="spline"
                      keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    />
                  </path>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-4 gap-8">
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center gap-4"
          >
            {tabButtons.map(({ name }, idx) => (
              <div key={idx}>
                <TabButtonSecondary
                  name={name}
                  idx={idx}
                  currentIdx={currentIdx}
                  handleTabClick={handleTabClick}
                  className="w-full"
                />
                {currentIdx === idx && (
                  <div className="m-4">
                    <p className="text-center text-lg  text-contentColor  dark:text-contentColor">
                      {tabButtons[idx].content}
                    </p>
                    <div className="tab-contents items-center mt-3 md:hidden">
                      <TabContentWrapper
                        key={currentIdx}
                        idx={currentIdx}
                        isShow={true}
                      >
                        <VideoPlayer
                          videoUrl={tabButtons[currentIdx]?.videoUrl}
                        />
                      </TabContentWrapper>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="tab-contents items-center mt-50px hidden md:block">
            <TabContentWrapper key={currentIdx} idx={currentIdx} isShow={true}>
              <VideoPlayer videoUrl={tabButtons[currentIdx]?.videoUrl} />
            </TabContentWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
