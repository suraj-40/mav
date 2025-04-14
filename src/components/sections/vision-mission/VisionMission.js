import { TimelineUi } from "@/components/ui/TimelineUi";
import VisionMission1 from "./VisionMission1";
import VisionMission2 from "./VisionMission2";
import VisionMission3 from "./VisionMission3";
import VisionMission4 from "./VisionMission4";

const tabButtons = [
    {
      name: "Our Commitment to NEP",
      content: (
        <VisionMission1 />
      ),
    },
    {
        name: "Modern Facilities",
        content: (
          <VisionMission2 />
        ),
      },
      {
        name: "Experienced Educators",
        content: (
          <VisionMission3 />
        ),
      },
      {
        name: "Comprehensive Growth",
        content: (
          <VisionMission4 />
        ),
      },
    
  ];

function VisionMission() {  

  return (
    <section className="w-full text-justify">
      {/* Timeline Section */}
      <TimelineUi data={tabButtons} />
    </section>
  );
}

export default VisionMission;