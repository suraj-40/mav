"use client";
import React, { useState } from "react";
import CulturalActivitiesHeader from "./CulturalActivitiesHeader";
import { CulturalActivitiesTimeline } from "@/components/ui/CulturalActivitiesTimeline";
import CulturalActivitySection from "./CulturalActivitySection";


// ULLAL BRANCH
// Gita Jayanti images
import UGitajayanti1 from "@/assets/images/cultural/ullal/GitaJayanti/img1.jpg";
import UGitajayanti2 from "@/assets/images/cultural/ullal/GitaJayanti/img2.jpg";  
import UGitajayanti3 from "@/assets/images/cultural/ullal/GitaJayanti/img3.jpg";
import UGitajayanti4 from "@/assets/images/cultural/ullal/GitaJayanti/img4.jpg";  

// Baala Kauthukam images
import UBaalkauthukam1 from "@/assets/images/cultural/ullal/BaalaKauthukam/img1.jpg";
import UBaalkauthukam2 from "@/assets/images/cultural/ullal/BaalaKauthukam/img2.jpg";
import UBaalkauthukam3 from "@/assets/images/cultural/ullal/BaalaKauthukam/img3.jpg";
import UBaalkauthukam4 from "@/assets/images/cultural/ullal/BaalaKauthukam/img4.jpg";

// Market Day images
import UMarketday1 from "@/assets/images/cultural/ullal/MarketDay/img1.jpg";
import UMarketday2 from "@/assets/images/cultural/ullal/MarketDay/img2.jpg";
import UMarketday3 from "@/assets/images/cultural/ullal/MarketDay/img3.jpg";
import UMarketday4 from "@/assets/images/cultural/ullal/MarketDay/img4.jpg";

// Guru Poornima images
import UGurupoornima1 from "@/assets/images/cultural/ullal/GuruPoornima/img1.jpg";
import UGurupoornima2 from "@/assets/images/cultural/ullal/GuruPoornima/img2.jpg";
import UGurupoornima3 from "@/assets/images/cultural/ullal/GuruPoornima/img3.jpg";
import UGurupoornima4 from "@/assets/images/cultural/ullal/GuruPoornima/img4.jpg";

// Yoga Day images
import UYogaday1 from "@/assets/images/cultural/ullal/YogaDay/img1.jpg";
import UYogaday2 from "@/assets/images/cultural/ullal/YogaDay/img2.jpg";
import UYogaday3 from "@/assets/images/cultural/ullal/YogaDay/img3.jpg";
import UYogaday4 from "@/assets/images/cultural/ullal/YogaDay/img4.jpg";

// Investiture Ceremony images
import UInvestitureceremony1 from "@/assets/images/cultural/ullal/InvestitureCeremony/img1.jpg";
import UInvestitureceremony2 from "@/assets/images/cultural/ullal/InvestitureCeremony/img2.jpg";
import UInvestitureceremony3 from "@/assets/images/cultural/ullal/InvestitureCeremony/img3.jpg";
import UInvestitureceremony4 from "@/assets/images/cultural/ullal/InvestitureCeremony/img4.jpg";

// Guru Charana Pooja images
import UGurucharanapooja1 from "@/assets/images/cultural/ullal/GuruCharanaPooja/img1.jpg";
import UGurucharanapooja2 from "@/assets/images/cultural/ullal/GuruCharanaPooja/img2.jpg";
import UGurucharanapooja3 from "@/assets/images/cultural/ullal/GuruCharanaPooja/img3.jpg";

// Srigandhkaval branch
// Baala Kauthukam images
import SBaalakauthukam1 from "@/assets/images/cultural/srigandhakaval/BaalaKauthukam/img1.jpg";
import SBaalakauthukam2 from "@/assets/images/cultural/srigandhakaval/BaalaKauthukam/img2.jpg";
import SBaalakauthukam3 from "@/assets/images/cultural/srigandhakaval/BaalaKauthukam/img3.jpg";
import SBaalakauthukam4 from "@/assets/images/cultural/srigandhakaval/BaalaKauthukam/img4.jpg";

// Bhashaavali images
import SBhashaavali1 from "@/assets/images/cultural/srigandhakaval/Bhashaavali/img1.jpg";
import SBhashaavali2 from "@/assets/images/cultural/srigandhakaval/Bhashaavali/img2.jpg";
import SBhashaavali3 from "@/assets/images/cultural/srigandhakaval/Bhashaavali/img3.jpg";
import SBhashaavali4 from "@/assets/images/cultural/srigandhakaval/Bhashaavali/img4.jpg";

// Deepothsavam images
import SDeepothsavam1 from "@/assets/images/cultural/srigandhakaval/Deepothsavam/img1.jpg";
import SDeepothsavam2 from "@/assets/images/cultural/srigandhakaval/Deepothsavam/img2.jpg";
import SDeepothsavam3 from "@/assets/images/cultural/srigandhakaval/Deepothsavam/img3.jpg";
import SDeepothsavam4 from "@/assets/images/cultural/srigandhakaval/Deepothsavam/img4.jpg";

// Environment Day images
import SEnvironmentday1 from "@/assets/images/cultural/srigandhakaval/EnvironmentDay/img1.jpg";
import SEnvironmentday2 from "@/assets/images/cultural/srigandhakaval/EnvironmentDay/img2.jpg";
import SEnvironmentday3 from "@/assets/images/cultural/srigandhakaval/EnvironmentDay/img3.jpg";
import SEnvironmentday4 from "@/assets/images/cultural/srigandhakaval/EnvironmentDay/img4.jpg";

// Ganeshotsava images
import SGaneshotsava1 from "@/assets/images/cultural/srigandhakaval/Ganeshotsava/img1.jpg";
import SGaneshotsava2 from "@/assets/images/cultural/srigandhakaval/Ganeshotsava/img2.jpg";
import SGaneshotsava3 from "@/assets/images/cultural/srigandhakaval/Ganeshotsava/img3.jpg";
import SGaneshotsava4 from "@/assets/images/cultural/srigandhakaval/Ganeshotsava/img4.jpg";

// Gita Jayanti images
import SGitajayanti1 from "@/assets/images/cultural/srigandhakaval/GitaJayanti/img1.jpg";
import SGitajayanti2 from "@/assets/images/cultural/srigandhakaval/GitaJayanti/img2.jpg";
import SGitajayanti3 from "@/assets/images/cultural/srigandhakaval/GitaJayanti/img3.jpg";
import SGitajayanti4 from "@/assets/images/cultural/srigandhakaval/GitaJayanti/img4.jpg";

// Guru Charana Pooja images
import SGurucharanapooja1 from "@/assets/images/cultural/srigandhakaval/GuruCharanaPooja/img1.jpg";
import SGurucharanapooja2 from "@/assets/images/cultural/srigandhakaval/GuruCharanaPooja/img2.jpg";
import SGurucharanapooja3 from "@/assets/images/cultural/srigandhakaval/GuruCharanaPooja/img3.jpg";
import SGurucharanapooja4 from "@/assets/images/cultural/srigandhakaval/GuruCharanaPooja/img4.jpg";

// Guru Poornima images
import SGurupoornima1 from "@/assets/images/cultural/srigandhakaval/GuruPoornima/img1.jpg";
import SGurupoornima2 from "@/assets/images/cultural/srigandhakaval/GuruPoornima/img2.jpg";
import SGurupoornima3 from "@/assets/images/cultural/srigandhakaval/GuruPoornima/img3.jpg";
import SGurupoornima4 from "@/assets/images/cultural/srigandhakaval/GuruPoornima/img4.jpg";

// Independence Day images
import SIndependenceday1 from "@/assets/images/cultural/srigandhakaval/IndependenceDay/img1.jpg";
import SIndependenceday2 from "@/assets/images/cultural/srigandhakaval/IndependenceDay/img2.jpg";
import SIndependenceday3 from "@/assets/images/cultural/srigandhakaval/IndependenceDay/img3.jpg";
import SIndependenceday4 from "@/assets/images/cultural/srigandhakaval/IndependenceDay/img4.jpg";

// Jnanatarang images
import SJnanatarang1 from "@/assets/images/cultural/srigandhakaval/Jnanatarang/img1.jpg";
import SJnanatarang2 from "@/assets/images/cultural/srigandhakaval/Jnanatarang/img2.jpg";
import SJnanatarang3 from "@/assets/images/cultural/srigandhakaval/Jnanatarang/img3.jpg";
import SJnanatarang4 from "@/assets/images/cultural/srigandhakaval/Jnanatarang/img4.jpg";

// Karnataka Rajyothsava images
import SKarnatakrajyothsava1 from "@/assets/images/cultural/srigandhakaval/KarnatakaRajyothsava/img1.jpg";
import SKarnatakrajyothsava2 from "@/assets/images/cultural/srigandhakaval/KarnatakaRajyothsava/img2.jpg";
import SKarnatakrajyothsava3 from "@/assets/images/cultural/srigandhakaval/KarnatakaRajyothsava/img3.jpg";
import SKarnatakrajyothsava4 from "@/assets/images/cultural/srigandhakaval/KarnatakaRajyothsava/img4.jpg";

// Market Day images
import SMarketday1 from "@/assets/images/cultural/srigandhakaval/MarketDay/img1.jpg";
import SMarketday2 from "@/assets/images/cultural/srigandhakaval/MarketDay/img2.jpg";
import SMarketday3 from "@/assets/images/cultural/srigandhakaval/MarketDay/img3.jpg";
import SMarketday4 from "@/assets/images/cultural/srigandhakaval/MarketDay/img4.jpg";

// Montessori Observation images
import SMontessoriObservation1 from "@/assets/images/cultural/srigandhakaval/MontessoriObservation/img1.jpg";
import SMontessoriObservation2 from "@/assets/images/cultural/srigandhakaval/MontessoriObservation/img2.jpg";
import SMontessoriObservation3 from "@/assets/images/cultural/srigandhakaval/MontessoriObservation/img3.jpg";
import SMontessoriObservation4 from "@/assets/images/cultural/srigandhakaval/MontessoriObservation/img4.jpg";

// Ramayana Utsavam images
import SRamayanaUtsavam1 from "@/assets/images/cultural/srigandhakaval/Ramayanotsavam/img1.jpg";
import SRamayanaUtsavam2 from "@/assets/images/cultural/srigandhakaval/Ramayanotsavam/img2.jpg";
import SRamayanaUtsavam3 from "@/assets/images/cultural/srigandhakaval/Ramayanotsavam/img3.jpg";
import SRamayanaUtsavam4 from "@/assets/images/cultural/srigandhakaval/Ramayanotsavam/img4.jpg";

// Yoga Day images
import SYogaday1 from "@/assets/images/cultural/srigandhakaval/YogaDay/img1.jpg";
import SYogaday2 from "@/assets/images/cultural/srigandhakaval/YogaDay/img2.jpg";
import SYogaday3 from "@/assets/images/cultural/srigandhakaval/YogaDay/img3.jpg";
import SYogaday4 from "@/assets/images/cultural/srigandhakaval/YogaDay/img4.jpg";


// Data for Ullal branch
const ullalTimelineData = [
  {
    title: "Gita Jayanti",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={0}
        activities={[
          { id: 1, image: UGitajayanti1 },
          { id: 2, image: UGitajayanti2 },
          { id: 3, image: UGitajayanti3 },
          { id: 4, image: UGitajayanti4 },
        ]}
      />
    ),
  },
  {
    title: "Baala Kauthukam",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={1}
        activities={[
          { id: 1, image: UBaalkauthukam1 },
          { id: 2, image: UBaalkauthukam2 },
          { id: 3, image: UBaalkauthukam3 },
          { id: 4, image: UBaalkauthukam4 },
        ]}
      />
    ),
  },
  {
    title: "Market Day",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={3}
        activities={[
          { id: 1, image: UMarketday1 },
          { id: 2, image: UMarketday2 },
          { id: 3, image: UMarketday3 },
          { id: 4, image: UMarketday4 },
        ]}
      />
    ),
  },
  {
    title: "Guru Poornima",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={3}
        activities={[
          { id: 1, image: UGurupoornima1 },
          { id: 2, image: UGurupoornima2 },
          { id: 3, image: UGurupoornima3 },
          { id: 4, image: UGurupoornima4 },
        ]}
      />
    ),
  },
  {
    title: "Yoga Day",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={4}
        activities={[
          { id: 1, image: UYogaday1 },
          { id: 2, image: UYogaday2 },
          { id: 3, image: UYogaday3 },
          { id: 4, image: UYogaday4 },
        ]}
      />
    ),
  },
  {
    title: "Investiture Ceremony",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={5}
        activities={[
          { id: 1, image: UInvestitureceremony1 },
          { id: 2, image: UInvestitureceremony2 },
          { id: 3, image: UInvestitureceremony3 },
          { id: 4, image: UInvestitureceremony4 },
        ]}
      />
    ),
  },
  {
    title: "Guru Charana Pooja",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={6}
        activities={[
          { id: 1, image: UGurucharanapooja1 },
          { id: 2, image: UGurucharanapooja2 },
          // { id: 3, image: UGurucharanapooja3 },
          // { id: 4, image: UGurucharanapooja4 },
        ]}
      />
    ),
  },
];

// Data for Srigandhkaval branch
const srigandhkavalTimelineData = [
  
  {
    title: "Gita Jayanti",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={0}
        activities={[
          { id: 1, image: SGitajayanti1 },
          { id: 2, image: SGitajayanti2 },
          { id: 3, image: SGitajayanti3 },
          { id: 4, image: SGitajayanti4 },
        ]}
      />
    ),
  },
  {
    title: "Guru Charana Pooja",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={1}
        activities={[
          { id: 1, image: SGurucharanapooja1 },
          { id: 2, image: SGurucharanapooja2 },
          { id: 3, image: SGurucharanapooja3 },
          { id: 4, image: SGurucharanapooja4 },
        ]}
      />
    ),
  },
  {
    title: "Baala Kauthukam",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={2}
        activities={[
          { id: 1, image: SBaalakauthukam1 },
          { id: 2, image: SBaalakauthukam2 },
          { id: 3, image: SBaalakauthukam3 },
          { id: 4, image: SBaalakauthukam4 },
        ]}
      />
    ),
  },
  {
    title: "Jnanatarang",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={3}
        activities={[
          { id: 1, image: SJnanatarang1 },
          { id: 2, image: SJnanatarang2 },
          { id: 3, image: SJnanatarang3 },
          { id: 4, image: SJnanatarang4 },
        ]}
      />
    ),
  },
  {
    title: "Market Day",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={4}
        activities={[
          { id: 1, image: SMarketday1 },
          { id: 2, image: SMarketday2 },
          { id: 3, image: SMarketday3 },
          { id: 4, image: SMarketday4 },
        ]}
      />
    ),
  },
  {
    title: "Bhashaavali",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={5}
        activities={[
          { id: 1, image: SBhashaavali1 },
          { id: 2, image: SBhashaavali2 },
          { id: 3, image: SBhashaavali3 },
          { id: 4, image: SBhashaavali4 },
        ]}
      />
    ),
  },
  {
    title: "Montessori Observation",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={6}
        activities={[
          { id: 1, image: SMontessoriObservation1 },
          { id: 2, image: SMontessoriObservation2 },
          { id: 3, image: SMontessoriObservation3 },
          { id: 4, image: SMontessoriObservation4 },
        ]}
      />
    ),
  },
  {
    title: "Ramayana Utsavam",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={7}
        activities={[
          { id: 1, image: SRamayanaUtsavam1 },
          { id: 2, image: SRamayanaUtsavam2 },
          { id: 3, image: SRamayanaUtsavam3 },
          { id: 4, image: SRamayanaUtsavam4 },
        ]}
      />
    ),
  },
  {
    title: "Guru Poornima",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={8}
        activities={[
          { id: 1, image: SGurupoornima1 },
          { id: 2, image: SGurupoornima2 },
          { id: 3, image: SGurupoornima3 },
          { id: 4, image: SGurupoornima4 },
        ]}
      />
    ),
  },
  {
    title: "Ganeshotsava",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={9}
        activities={[
          { id: 1, image: SGaneshotsava1 },
          { id: 2, image: SGaneshotsava2 },
          { id: 3, image: SGaneshotsava3 },
          { id: 4, image: SGaneshotsava4 },
        ]}
      />
    ),
  },
  {
    title: "Yoga Day",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={10}
        activities={[
          { id: 1, image: SYogaday1 },
          { id: 2, image: SYogaday2 },
          { id: 3, image: SYogaday3 },
          { id: 4, image: SYogaday4 },
        ]}
      />
    ),
  },
  {
    title: "Independence Day",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={11}
        activities={[
          { id: 1, image: SIndependenceday1 },
          { id: 2, image: SIndependenceday2 },
          { id: 3, image: SIndependenceday3 },
          { id: 4, image: SIndependenceday4 },
        ]}
      />
    ),
  },
  {
    title: "Karnataka Rajyothsava",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={12}
        activities={[
          { id: 1, image: SKarnatakrajyothsava1 },
          { id: 2, image: SKarnatakrajyothsava2 },
          { id: 3, image: SKarnatakrajyothsava3 },
          { id: 4, image: SKarnatakrajyothsava4 },
        ]}
      />
    ),
  },
  {
    title: "Deepothsavam",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={13}
        activities={[
          { id: 1, image: SDeepothsavam1 },
          { id: 2, image: SDeepothsavam2 },
          { id: 3, image: SDeepothsavam3 },
          { id: 4, image: SDeepothsavam4 },
        ]}
      />
    ),
  },
  {
    title: "Environment Day",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={14}
        activities={[
          { id: 1, image: SEnvironmentday1 },
          { id: 2, image: SEnvironmentday2 },
          { id: 3, image: SEnvironmentday3 },
          { id: 4, image: SEnvironmentday4 },
        ]}
      />
    ),
  },
 
];

const CulturalActivitiesMain = () => {
  const [activeTab, setActiveTab] = useState("srigandhkaval");

  return (
    <div className="relative w-full overflow-clip">
      <CulturalActivitiesHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <CulturalActivitiesTimeline
        data={activeTab === "ullal" ? ullalTimelineData : srigandhkavalTimelineData}
        activeTab={activeTab}
      />
    </div>
  );
};

export default CulturalActivitiesMain;