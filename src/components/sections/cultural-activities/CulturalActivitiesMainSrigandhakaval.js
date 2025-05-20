"use client";
import React, { useState } from "react";
import CulturalActivitiesHeader from "./CulturalActivitiesHeader";
import { CulturalActivitiesTimeline } from "@/components/ui/CulturalActivitiesTimeline";
import CulturalActivitySection from "./CulturalActivitySection";

// Srigandhkaval Branch Image Imports
// World Environment Day
import SEnvironmentDay1 from "@/assets/images/gallery/srigandhakaval/WorldEnvironmentDay/img1.JPG";
import SEnvironmentDay2 from "@/assets/images/gallery/srigandhakaval/WorldEnvironmentDay/img2.JPG";
import SEnvironmentDay3 from "@/assets/images/gallery/srigandhakaval/WorldEnvironmentDay/img3.JPG";
import SEnvironmentDay4 from "@/assets/images/gallery/srigandhakaval/WorldEnvironmentDay/img4.JPG";
import SEnvironmentDay5 from "@/assets/images/gallery/srigandhakaval/WorldEnvironmentDay/img5.JPG";
import SEnvironmentDay6 from "@/assets/images/gallery/srigandhakaval/WorldEnvironmentDay/img6.JPG";
import SEnvironmentDay7 from "@/assets/images/gallery/srigandhakaval/WorldEnvironmentDay/img7.JPG";
import SEnvironmentDay8 from "@/assets/images/gallery/srigandhakaval/WorldEnvironmentDay/img8.JPG";

// Investiture Ceremony
import SInvestitureCeremony1 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img2.png";
import SInvestitureCeremony3 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img3.png";
import SInvestitureCeremony5 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img5.png";
import SInvestitureCeremony7 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img7.png";

// International Yoga Day
// Yoga Day images
import SInternationalYogaDay1 from "@/assets/images/cultural/srigandhakaval/YogaDay/img1.jpg";
import SInternationalYogaDay3 from "@/assets/images/cultural/srigandhakaval/YogaDay/img2.jpg";
import SInternationalYogaDay5 from "@/assets/images/cultural/srigandhakaval/YogaDay/img3.jpg";
import SInternationalYogaDay7 from "@/assets/images/cultural/srigandhakaval/YogaDay/img4.jpg";

// Market Day
import SMarketDay1 from "@/assets/images/cultural/srigandhakaval/MarketDay/img1.jpg";
import SMarketDay3 from "@/assets/images/cultural/srigandhakaval/MarketDay/img2.jpg";
import SMarketDay5 from "@/assets/images/cultural/srigandhakaval/MarketDay/img3.jpg";
import SMarketDay7 from "@/assets/images/cultural/srigandhakaval/MarketDay/img4.jpg";

// Guru Purnima
import SGuruPoornima1 from "@/assets/images/gallery/srigandhakaval/GuruPurnima/img1.png";
import SGuruPoornima3 from "@/assets/images/gallery/srigandhakaval/GuruPurnima/img3.png";
import SGuruPoornima5 from "@/assets/images/gallery/srigandhakaval/GuruPurnima/img5.png";
import SGuruPoornima7 from "@/assets/images/gallery/srigandhakaval/GuruPurnima/img7.png";

// Jungle Day
import SJungleDay1 from "@/assets/images/gallery/srigandhakaval/JungleDay/img1.png";
import SJungleDay3 from "@/assets/images/gallery/srigandhakaval/JungleDay/img3.png";
import SJungleDay5 from "@/assets/images/gallery/srigandhakaval/JungleDay/img5.png";
import SJungleDay7 from "@/assets/images/gallery/srigandhakaval/JungleDay/img7.png";

// Independence Day
import SIndependenceDay1 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img1.png";
import SIndependenceDay3 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img3.png";
import SIndependenceDay5 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img5.png";
import SIndependenceDay7 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img7.png";

// Krishna Janmastami
import SKrishnaJanmastami1 from "@/assets/images/gallery/srigandhakaval/KrishnaJanmastami/img1.png";
import SKrishnaJanmastami3 from "@/assets/images/gallery/srigandhakaval/KrishnaJanmastami/img3.png";
import SKrishnaJanmastami5 from "@/assets/images/gallery/srigandhakaval/KrishnaJanmastami/img2.png";
import SKrishnaJanmastami7 from "@/assets/images/gallery/srigandhakaval/KrishnaJanmastami/img8.png";

// Jnana Tarang
import SJnanaTarang1 from "@/assets/images/gallery/srigandhakaval/JnanaTarang/img1.png";
import SJnanaTarang3 from "@/assets/images/gallery/srigandhakaval/JnanaTarang/img3.png";
import SJnanaTarang5 from "@/assets/images/gallery/srigandhakaval/JnanaTarang/img5.png";
import SJnanaTarang7 from "@/assets/images/gallery/srigandhakaval/JnanaTarang/img7.png";

// Ganesha Chaturti
import SGaneshaChaturti1 from "@/assets/images/cultural/srigandhakaval/Ganeshotsava/img1.jpg";
import SGaneshaChaturti3 from "@/assets/images/cultural/srigandhakaval/Ganeshotsava/img2.jpg";
import SGaneshaChaturti5 from "@/assets/images/cultural/srigandhakaval/Ganeshotsava/img3.jpg";
import SGaneshaChaturti7 from "@/assets/images/cultural/srigandhakaval/Ganeshotsava/img4.jpg";

// Hindi Diwas
import SHindiDiwas1 from "@/assets/images/gallery/srigandhakaval/HindiDiwas/img1.png";
import SHindiDiwas2 from "@/assets/images/gallery/srigandhakaval/HindiDiwas/img2.png";
import SHindiDiwas3 from "@/assets/images/gallery/srigandhakaval/HindiDiwas/img3.png";
import SHindiDiwas4 from "@/assets/images/gallery/srigandhakaval/HindiDiwas/img4.png";

// Dusshera Celebration
import SDussehraCelebration1 from "@/assets/images/gallery/srigandhakaval/DussehraCelebration/img1.png";
import SDussehraCelebration3 from "@/assets/images/gallery/srigandhakaval/DussehraCelebration/img3.png";
import SDussehraCelebration5 from "@/assets/images/gallery/srigandhakaval/DussehraCelebration/img8.png";
import SDussehraCelebration7 from "@/assets/images/gallery/srigandhakaval/DussehraCelebration/img7.png";

// Sports Day
import SSportsDay1 from "@/assets/images/gallery/srigandhakaval/Sports/img1.png";
import SSportsDay3 from "@/assets/images/gallery/srigandhakaval/Sports/img3.png";
import SSportsDay5 from "@/assets/images/gallery/srigandhakaval/Sports/img5.png";
import SSportsDay7 from "@/assets/images/gallery/srigandhakaval/Sports/img7.png";

// Deepavali
import SDeepavali1 from "@/assets/images/cultural/srigandhakaval/Deepothsavam/img1.jpg";
import SDeepavali3 from "@/assets/images/cultural/srigandhakaval/Deepothsavam/img2.jpg";
import SDeepavali5 from "@/assets/images/cultural/srigandhakaval/Deepothsavam/img3.jpg";
import SDeepavali7 from "@/assets/images/cultural/srigandhakaval/Deepothsavam/img4.jpg";

// Kannada Rajyothsava
import SKannadaRajyothsava1 from "@/assets/images/gallery/srigandhakaval/KannadaRajyotsava/img1.png";
import SKannadaRajyothsava3 from "@/assets/images/gallery/srigandhakaval/KannadaRajyotsava/img3.png";
import SKannadaRajyothsava5 from "@/assets/images/gallery/srigandhakaval/KannadaRajyotsava/img5.png";
import SKannadaRajyothsava7 from "@/assets/images/gallery/srigandhakaval/KannadaRajyotsava/img7.png";

// Annual Day
import SAnnualDay1 from "@/assets/images/gallery/srigandhakaval/AnnualDay/img1.JPG";
import SAnnualDay3 from "@/assets/images/gallery/srigandhakaval/AnnualDay/img3.JPG";
import SAnnualDay5 from "@/assets/images/gallery/srigandhakaval/AnnualDay/img11.JPG";
import SAnnualDay7 from "@/assets/images/gallery/srigandhakaval/AnnualDay/img7.JPG";

// Gita Jayanti
import SGitajayanti1 from "@/assets/images/cultural/srigandhakaval/GitaJayanti/img1.jpg";
import SGitajayanti3 from "@/assets/images/cultural/srigandhakaval/GitaJayanti/img2.jpg";
import SGitajayanti5 from "@/assets/images/cultural/srigandhakaval/GitaJayanti/img3.jpg";
import SGitajayanti7 from "@/assets/images/cultural/srigandhakaval/GitaJayanti/img4.jpg";

// Observation Classes
import SObservationClasses1 from "@/assets/images/gallery/srigandhakaval/MontessoriObservation/img1.jpg";
import SObservationClasses3 from "@/assets/images/gallery/srigandhakaval/MontessoriObservation/img3.jpg";
import SObservationClasses5 from "@/assets/images/gallery/srigandhakaval/MontessoriObservation/img5.jpg";
import SObservationClasses7 from "@/assets/images/gallery/srigandhakaval/MontessoriObservation/img7.jpg";

// Art and Craft Mela
import SArtAndCraftMela1 from "@/assets/images/gallery/srigandhakaval/ArtandCraftMela/img1.png";
import SArtAndCraftMela2 from "@/assets/images/gallery/srigandhakaval/ArtandCraftMela/img2.png";
import SArtAndCraftMela3 from "@/assets/images/gallery/srigandhakaval/ArtandCraftMela/img3.png";
import SArtAndCraftMela4 from "@/assets/images/gallery/srigandhakaval/ArtandCraftMela/img4.png";

// Ramayana theme
import SRamayanaTheme1 from "@/assets/images/gallery/srigandhakaval/Ramayanotsavam/img1.jpg";
import SRamayanaTheme3 from "@/assets/images/gallery/srigandhakaval/Ramayanotsavam/img3.jpg";
import SRamayanaTheme5 from "@/assets/images/gallery/srigandhakaval/Ramayanotsavam/img5.jpg";
import SRamayanaTheme7 from "@/assets/images/gallery/srigandhakaval/Ramayanotsavam/img7.jpg";

// Ullal Branch Image Imports
// Investiture Ceremony
import UInvestitureCeremony1 from "@/assets/images/cultural/ullal/InvestitureCeremony/img1.jpg";
import UInvestitureCeremony3 from "@/assets/images/cultural/ullal/InvestitureCeremony/img2.jpg";
import UInvestitureCeremony5 from "@/assets/images/cultural/ullal/InvestitureCeremony/img3.jpg";
import UInvestitureCeremony7 from "@/assets/images/cultural/ullal/InvestitureCeremony/img4.jpg";

// Guru Poornima
import UGuruPoornima1 from "@/assets/images/cultural/ullal/GuruPoornima/img1.jpg";
import UGuruPoornima3 from "@/assets/images/cultural/ullal/GuruPoornima/img2.jpg";
import UGuruPoornima5 from "@/assets/images/cultural/ullal/GuruPoornima/img3.jpg";
import UGuruPoornima7 from "@/assets/images/cultural/ullal/GuruPoornima/img4.jpg";

// Krishna Janmastami
import UKrishnaJanmastami1 from "@/assets/images/gallery/ullal/KrishnaJanmastami/img1.png";
import UKrishnaJanmastami3 from "@/assets/images/gallery/ullal/KrishnaJanmastami/img3.png";
import UKrishnaJanmastami5 from "@/assets/images/gallery/ullal/KrishnaJanmastami/img5.png";
import UKrishnaJanmastami7 from "@/assets/images/gallery/ullal/KrishnaJanmastami/img7.png";

// Sports
import USportsDay1 from "@/assets/images/gallery/ullal/Sports/img1.png";
import USportsDay3 from "@/assets/images/gallery/ullal/Sports/img3.png";
import USportsDay5 from "@//assets/images/gallery/ullal/Sports/img5.png";
import USportsDay7 from "@/assets/images/gallery/ullal/Sports/img7.png";

// Gita Jayanti
import UGitajayanti1 from "@/assets/images/gallery/ullal/GitaJayanti/img1.jpg";
import UGitajayanti3 from "@/assets/images/gallery/ullal/GitaJayanti/img3.jpg";
import UGitajayanti5 from "@/assets/images/gallery/ullal/GitaJayanti/img5.jpg";
import UGitajayanti7 from "@/assets/images/gallery/ullal/GitaJayanti/img7.jpg";

// Annual Day
import UAnnualDay1 from "@/assets/images/gallery/srigandhakaval/AnnualDay/img1.JPG";
import UAnnualDay3 from "@/assets/images/gallery/srigandhakaval/AnnualDay/img3.JPG";
import UAnnualDay5 from "@/assets/images/gallery/srigandhakaval/AnnualDay/img11.JPG";
import UAnnualDay7 from "@/assets/images/gallery/srigandhakaval/AnnualDay/img7.JPG";

// Data for Srigandhkaval Branch
const srigandhkavalTimelineData = [
  {
    title: "World Environment Day",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={0}
        activities={[
          { id: 1, image: SEnvironmentDay1 },
          { id: 2, image: SEnvironmentDay3 },
          { id: 3, image: SEnvironmentDay5 },
          { id: 4, image: SEnvironmentDay7 },
        ]}
      />
    ),
  },
  {
    title: "Investiture Ceremony",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={1}
        activities={[
          { id: 1, image: SInvestitureCeremony1 },
          { id: 2, image: SInvestitureCeremony3 },
          { id: 3, image: SInvestitureCeremony5 },
          { id: 4, image: SInvestitureCeremony7 },
        ]}
      />
    ),
  },
  {
    title: "International Yoga Day",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={2}
        activities={[
          { id: 1, image: SInternationalYogaDay1 },
          { id: 2, image: SInternationalYogaDay3 },
          { id: 3, image: SInternationalYogaDay5 },
          { id: 4, image: SInternationalYogaDay7 },
        ]}
      />
    ),
  },
  {
    title: "Market Day",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={3}
        activities={[
          { id: 1, image: SMarketDay1 },
          { id: 2, image: SMarketDay3 },
          { id: 3, image: SMarketDay5 },
          { id: 4, image: SMarketDay7 },
        ]}
      />
    ),
  },
  {
    title: "Guru Purnima",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={4}
        activities={[
          { id: 1, image: SGuruPoornima1 },
          { id: 2, image: SGuruPoornima3 },
          { id: 3, image: SGuruPoornima5 },
          { id: 4, image: SGuruPoornima7 },
        ]}
      />
    ),
  },
  {
    title: "Jungle Day",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={5}
        activities={[
          { id: 1, image: SJungleDay1 },
          { id: 2, image: SJungleDay3 },
          { id: 3, image: SJungleDay5 },
          { id: 4, image: SJungleDay7 },
        ]}
      />
    ),
  },
  {
    title: "Independence Day",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={6}
        activities={[
          { id: 1, image: SIndependenceDay1 },
          { id: 2, image: SIndependenceDay3 },
          { id: 3, image: SIndependenceDay5 },
          { id: 4, image: SIndependenceDay7 },
        ]}
      />
    ),
  },
  {
    title: "Krishna Janmastami",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={7}
        activities={[
          { id: 1, image: SKrishnaJanmastami1 },
          { id: 2, image: SKrishnaJanmastami3 },
          { id: 3, image: SKrishnaJanmastami5 },
          { id: 4, image: SKrishnaJanmastami7 },
        ]}
      />
    ),
  },
  {
    title: "Jnana Tarang",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={8}
        activities={[
          { id: 1, image: SJnanaTarang1 },
          { id: 2, image: SJnanaTarang3 },
          { id: 3, image: SJnanaTarang5 },
          { id: 4, image: SJnanaTarang7 },
        ]}
      />
    ),
  },
  {
    title: "Ganesha Chaturti",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={9}
        activities={[
          { id: 1, image: SGaneshaChaturti1 },
          { id: 2, image: SGaneshaChaturti3 },
          { id: 3, image: SGaneshaChaturti5 },
          { id: 4, image: SGaneshaChaturti7 },
        ]}
      />
    ),
  },
  {
    title: "Hindi Diwas",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={10}
        activities={[
          { id: 1, image: SHindiDiwas1 },
          { id: 2, image: SHindiDiwas2 },
          { id: 3, image: SHindiDiwas3 },
          { id: 4, image: SHindiDiwas4 },
        ]}
      />
    ),
  },
  {
    title: "Dusshera Celebration",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={11}
        activities={[
          { id: 1, image: SDussehraCelebration1 },
          { id: 2, image: SDussehraCelebration3 },
          { id: 3, image: SDussehraCelebration5 },
          { id: 4, image: SDussehraCelebration7 },
        ]}
      />
    ),
  },
  {
    title: "Sports Day",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={12}
        activities={[
          { id: 1, image: SSportsDay1 },
          { id: 2, image: SSportsDay3 },
          { id: 3, image: SSportsDay5 },
          { id: 4, image: SSportsDay7 },
        ]}
      />
    ),
  },
  {
    title: "Deepavali",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={13}
        activities={[
          { id: 1, image: SDeepavali1 },
          { id: 2, image: SDeepavali3 },
          { id: 3, image: SDeepavali5 },
          { id: 4, image: SDeepavali7 },
        ]}
      />
    ),
  },
  {
    title: "Kannada Rajyothsava",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={14}
        activities={[
          { id: 1, image: SKannadaRajyothsava1 },
          { id: 2, image: SKannadaRajyothsava3 },
          { id: 3, image: SKannadaRajyothsava5 },
          { id: 4, image: SKannadaRajyothsava7 },
        ]}
      />
    ),
  },
  {
    title: "Annual Day",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={15}
        activities={[
          { id: 1, image: SAnnualDay1 },
          { id: 2, image: SAnnualDay3 },
          { id: 3, image: SAnnualDay5 },
          { id: 4, image: SAnnualDay7 },
        ]}
      />
    ),
  },
  {
    title: "Gita Jayanti",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={16}
        activities={[
          { id: 1, image: SGitajayanti1 },
          { id: 2, image: SGitajayanti3 },
          { id: 3, image: SGitajayanti5 },
          { id: 4, image: SGitajayanti7 },
        ]}
      />
    ),
  },
  {
    title: "Observation Classes",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={17}
        activities={[
          { id: 1, image: SObservationClasses1 },
          { id: 2, image: SObservationClasses3 },
          { id: 3, image: SObservationClasses5 },
          { id: 4, image: SObservationClasses7 },
        ]}
      />
    ),
  },
  {
    title: "Art and Craft Mela",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={18}
        activities={[
          { id: 1, image: SArtAndCraftMela1 },
          { id: 2, image: SArtAndCraftMela2 },
          { id: 3, image: SArtAndCraftMela3 },
          { id: 4, image: SArtAndCraftMela4 },
        ]}
      />
    ),
  },
  {
    title: "Ramayana theme",
    content: (
      <CulturalActivitySection
        activeTab="srigandhkaval"
        sectionIndex={19}
        activities={[
          { id: 1, image: SRamayanaTheme1 },
          { id: 2, image: SRamayanaTheme3 },
          { id: 3, image: SRamayanaTheme5 },
          { id: 4, image: SRamayanaTheme7 },
        ]}
      />
    ),
  },
];

// Data for Ullal Branch
const ullalTimelineData = [
  {
    title: "Investiture Ceremony",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={0}
        activities={[
          { id: 1, image: UInvestitureCeremony1 },
          { id: 2, image: UInvestitureCeremony3 },
          { id: 3, image: UInvestitureCeremony5 },
          { id: 4, image: UInvestitureCeremony7 },
        ]}
      />
    ),
  },
  {
    title: "Guru Poornima",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={1}
        activities={[
          { id: 1, image: UGuruPoornima1 },
          { id: 2, image: UGuruPoornima3 },
          { id: 3, image: UGuruPoornima5 },
          { id: 4, image: UGuruPoornima7 },
        ]}
      />
    ),
  },
  {
    title: "Krishna Janmastami",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={2}
        activities={[
          { id: 1, image: UKrishnaJanmastami1 },
          { id: 2, image: UKrishnaJanmastami3 },
          { id: 3, image: UKrishnaJanmastami5 },
          { id: 4, image: UKrishnaJanmastami7 },
        ]}
      />
    ),
  },
  {
    title: "Sports",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={3}
        activities={[
          { id: 1, image: USportsDay1 },
          { id: 2, image: USportsDay3 },
          { id: 3, image: USportsDay5 },
          { id: 4, image: USportsDay7 },
        ]}
      />
    ),
  },
  {
    title: "Gita Jayanti",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={4}
        activities={[
          { id: 1, image: UGitajayanti1 },
          { id: 2, image: UGitajayanti3 },
          { id: 3, image: UGitajayanti5 },
          { id: 4, image: UGitajayanti7 },
        ]}
      />
    ),
  },
  {
    title: "Annual Day",
    content: (
      <CulturalActivitySection
        activeTab="ullal"
        sectionIndex={5}
        activities={[
          { id: 1, image: UAnnualDay1 },
          { id: 2, image: UAnnualDay3 },
          { id: 3, image: UAnnualDay5 },
          { id: 4, image: UAnnualDay7 },
        ]}
      />
    ),
  },
];

const CulturalActivitiesMainSrigandhakaval = () => {
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

export default CulturalActivitiesMainSrigandhakaval;