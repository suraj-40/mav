"use client";
import TabButtonSecondary from "@/components/shared/buttons/TabButtonSecondary";
import HeadingSecondary from "@/components/shared/headings/HeadingSecondary";
import HeroName from "@/components/shared/section-names/HeroName";
import TabContentWrapper from "@/components/shared/wrappers/TabContentWrapper";
import useTab from "@/hooks/useTab";
import React from "react";
import VideoPlayer from "@/components/shared/videoplayer/VideoPlayer"; // Import the VideoPlayer component

const Overview = () => {
  const { currentIdx, handleTabClick } = useTab();

  const tabButtons = [
    {
      name: "Edutainment Videos",
      content: "Learn at your own pace with videos that educate and entertain!",
      videoUrl: "https://www.youtube.com/embed/XOjp43I98Q4",
    },
    {
      name: "eBooks",
      content: "Quick, colorful, and comprehensive guides for lasting knowledge!",
      videoUrl: "https://www.youtube.com/embed/GUgMc4v5t8Y",
    },
    {
      name: "True or False Questions",
      content: "Challenge yourself with quick decisions—three chances to succeed!",
      videoUrl: "https://www.youtube.com/embed/kGKZqyscgVc",
    },
    {
      name: "MCQ Questions",
      content: "Test your skills, boost your score, and level up your learning!",
      videoUrl: "https://www.youtube.com/embed/eeCkcK44llI",
    },
    {
      name: "eLab",
      content: "Code, practice, and perfect—your virtual playground for programming!",
      videoUrl: "https://www.youtube.com/embed/WSDGLGmmsOs",
    },
  ];

  return (
    <section
    id="ourofferings"
    className="pt-10 pb-24 md:my-auto px-4 container md:px-6 lg:px-8 bg-gradient-to-b overflow-hidden"
    data-aos="fade-up"
  >
      <div className="container pt-20px">
      <div className="mb-5 md:mb-10" data-aos="fade-up">
  <div className="text-center">
    <h1 className="text-avorange text-3xl md:text-4xl lg:text-[42px] 2xl:text-[48px] leading-[40px] md:leading-[50px] lg:leading-[55px] 2xl:leading-[60px] font-bold">
      AV-ATOMS
    </h1>
  </div>
  <HeadingSecondary>
    <span className="relative text-sm md:text-3xl inline-block w-full md:w-auto after:w-full after:h-[3px] md:after:bottom-0 after:z-[-1]">
    A Glimpse of Your Self-Paced {" "}
    <span className="text-avorange">Skill Journey</span>
      <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-gradient-to-r from-av via-av to-avorange"></span>
    </span>
  </HeadingSecondary>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-up" className="flex flex-col justify-center gap-4">
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
                    <p className="text-center text-lg  text-contentColor  dark:text-contentColor" >{tabButtons[idx].content}</p>
                    <div className="tab-contents items-center mt-3 md:hidden">
                        <TabContentWrapper key={currentIdx} idx={currentIdx} isShow={true}>
                          <VideoPlayer videoUrl={tabButtons[currentIdx]?.videoUrl} />
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
