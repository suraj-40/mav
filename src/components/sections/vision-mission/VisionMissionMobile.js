"use client";

import { useState } from "react";
import VisionMission1 from "./VisionMission1";
import VisionMission2 from "./VisionMission2";
import VisionMission3 from "./VisionMission3";
import VisionMission4 from "./VisionMission4";
import TabButtonPrimary from "@/components/shared/buttons/TabButtonPrimary";
import TabContentWrapper from "@/components/shared/wrappers/TabContentWrapper";

const VisionMissonMobile = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const tabButtons = [
    { name: "Our Commitment to NEP", content: <VisionMission1 /> },
    { name: "Modern Facilities", content: <VisionMission2 /> },
    { name: "Experienced Educators", content: <VisionMission3 /> },
    { name: "Comprehensive Growth", content: <VisionMission4 /> },
  ];

  const handleTabClick = (idx) => setCurrentIdx(idx);

  return (
    <section data-aos="fade-up">
      <div className="overflow-hidden text-justify mb-10">
        <div className="container py-20px lg:pb-20 2xl:pb-100px relative z-0">
          {/* Animated background */}
          <div className="absolute top-[20%] left-[-135px] z-[-1] animate-move-hor">
            <svg
              width="938"
              height="919"
              viewBox="0 0 938 919"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M926.588 668.954C845.79 881.299 578.082 976.498 328.645 881.587C79.2083 786.675 -57.5003 537.594 23.2975 325.25C104.095 112.905 842.659 -201.917 722.687 181.03C612.239 533.576 1007.39 456.609 926.588 668.954Z"
                fill="url(#paint0_linear_141_3)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_141_3"
                  x1="621.24"
                  y1="112.617"
                  x2="328.645"
                  y2="881.586"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.9999" stopColor="#FBAED8" stopOpacity="0.08" />
                  <stop offset="1" stopColor="#B64AA4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="tab">
            <div
              className="tab-links flex w-full gap-1 grid justify-center items-center grid-cols-2  md:gap-11px text-blackColor text-lg lg:text-size-22 bg-transparent mt-30px  mb-43px"
              data-aos="fade-up"
            >
              {tabButtons.map(({ name }, idx) => (
                <TabButtonPrimary
                  key={idx}
                  name={name}
                  handleTabClick={handleTabClick}
                  currentIdx={currentIdx}
                  idx={idx}
                  button="lg"
                />
              ))}
            </div>

            <div className="tab-contents">
              {tabButtons.map(({ content }, idx) => (
                <TabContentWrapper key={idx} isShow={idx === currentIdx}>
                  {content}
                </TabContentWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissonMobile;
