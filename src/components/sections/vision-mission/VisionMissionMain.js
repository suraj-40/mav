import React from 'react';
import { Timeline } from "@/components/ui/timeline";
import VisionMission1 from './VisionMission1';
import VisionMission2 from "./VisionMission2";
import VisionMission3 from "./VisionMission3";
import VisionMission4 from "./VisionMission4";

export default function VisionMissionMain() {
  const data = [
    {
      title: "Our Commitment to NEP",
      content: <VisionMission1/>
    },
    {
      title: "Modern Facilities",
      content: <VisionMission2 />
    },
    {
      title: "Experienced Educators",
      content: <VisionMission3 />
    },
    {
      title: "Comprehensive Growth",
      content: <VisionMission4 />
    }
  
  ];
  
  return React.createElement(
    "div",
    { className: "relative w-full overflow-clip" },
    React.createElement(Timeline, { data: data })
  );
}