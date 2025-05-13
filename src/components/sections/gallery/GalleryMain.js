"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryCard from "@/components/ui/GalleryCard";

// Import images
// Gallery images for Ullal Branch

// Baala Kautukam
import UBaalaKautukam1 from "@/assets/images/gallery/ullal/BaalaKauthukam/img1.jpg";
import UBaalaKautukam2 from "@/assets/images/gallery/ullal/BaalaKauthukam/img2.jpg";
import UBaalaKautukam3 from "@/assets/images/gallery/ullal/BaalaKauthukam/img3.jpg";
import UBaalaKautukam4 from "@/assets/images/gallery/ullal/BaalaKauthukam/img4.jpg";
import UBaalaKautukam5 from "@/assets/images/gallery/ullal/BaalaKauthukam/img5.jpg";
import UBaalaKautukam6 from "@/assets/images/gallery/ullal/BaalaKauthukam/img6.jpg";
import UBaalaKautukam7 from "@/assets/images/gallery/ullal/BaalaKauthukam/img7.jpg";
import UBaalaKautukam8 from "@/assets/images/gallery/ullal/BaalaKauthukam/img8.jpg";
import UBaalaKautukam9 from "@/assets/images/gallery/ullal/BaalaKauthukam/img9.jpg";
import UBaalaKautukam10 from "@/assets/images/gallery/ullal/BaalaKauthukam/img10.jpg";

// Bhashaavali
import UBhashaavali1 from "@/assets/images/gallery/ullal/Bhashaavali/img1.jpg";
import UBhashaavali2 from "@/assets/images/gallery/ullal/Bhashaavali/img2.jpg";
import UBhashaavali3 from "@/assets/images/gallery/ullal/Bhashaavali/img3.jpg";
import UBhashaavali4 from "@/assets/images/gallery/ullal/Bhashaavali/img4.jpg";
import UBhashaavali5 from "@/assets/images/gallery/ullal/Bhashaavali/img5.jpg";
import UBhashaavali6 from "@/assets/images/gallery/ullal/Bhashaavali/img6.jpg";
import UBhashaavali7 from "@/assets/images/gallery/ullal/Bhashaavali/img7.jpg";
import UBhashaavali8 from "@/assets/images/gallery/ullal/Bhashaavali/img8.jpg";
import UBhashaavali9 from "@/assets/images/gallery/ullal/Bhashaavali/img9.jpg";
import UBhashaavali10 from "@/assets/images/gallery/ullal/Bhashaavali/img10.jpg";

// Gita Jayanti
import UGitaJayanti1 from "@/assets/images/gallery/ullal/GitaJayanti/img1.jpg";
import UGitaJayanti2 from "@/assets/images/gallery/ullal/GitaJayanti/img2.jpg";
import UGitaJayanti3 from "@/assets/images/gallery/ullal/GitaJayanti/img3.jpg";
import UGitaJayanti4 from "@/assets/images/gallery/ullal/GitaJayanti/img4.jpg";
import UGitaJayanti5 from "@/assets/images/gallery/ullal/GitaJayanti/img5.jpg";
import UGitaJayanti6 from "@/assets/images/gallery/ullal/GitaJayanti/img6.jpg";
import UGitaJayanti7 from "@/assets/images/gallery/ullal/GitaJayanti/img7.jpg";
import UGitaJayanti8 from "@/assets/images/gallery/ullal/GitaJayanti/img8.jpg";
import UGitaJayanti9 from "@/assets/images/gallery/ullal/GitaJayanti/img9.jpg";
import UGitaJayanti10 from "@/assets/images/gallery/ullal/GitaJayanti/img10.jpg";

// Guru Charana Pooja
import UGuruCharanaPooja1 from "@/assets/images/gallery/ullal/GuruCharanaPooja/img1.jpg";
import UGuruCharanaPooja2 from "@/assets/images/gallery/ullal/GuruCharanaPooja/img2.jpg";
import UGuruCharanaPooja3 from "@/assets/images/gallery/ullal/GuruCharanaPooja/img3.jpg";
import UGuruCharanaPooja4 from "@/assets/images/gallery/ullal/GuruCharanaPooja/img4.jpg";
import UGuruCharanaPooja5 from "@/assets/images/gallery/ullal/GuruCharanaPooja/img5.jpg";
import UGuruCharanaPooja6 from "@/assets/images/gallery/ullal/GuruCharanaPooja/img6.jpg";
import UGuruCharanaPooja7 from "@/assets/images/gallery/ullal/GuruCharanaPooja/img7.jpg";
import UGuruCharanaPooja8 from "@/assets/images/gallery/ullal/GuruCharanaPooja/img8.jpg";
import UGuruCharanaPooja9 from "@/assets/images/gallery/ullal/GuruCharanaPooja/img9.jpg";
import UGuruCharanaPooja10 from "@/assets/images/gallery/ullal/GuruCharanaPooja/img10.jpg";

// Jnanatarang
import UJnanatarang1 from "@/assets/images/gallery/ullal/Jnanatarang/img1.jpg";
import UJnanatarang2 from "@/assets/images/gallery/ullal/Jnanatarang/img2.jpg";
import UJnanatarang3 from "@/assets/images/gallery/ullal/Jnanatarang/img3.jpg";
import UJnanatarang4 from "@/assets/images/gallery/ullal/Jnanatarang/img4.jpg";
import UJnanatarang5 from "@/assets/images/gallery/ullal/Jnanatarang/img5.jpg";
import UJnanatarang6 from "@/assets/images/gallery/ullal/Jnanatarang/img6.jpg";
import UJnanatarang7 from "@/assets/images/gallery/ullal/Jnanatarang/img7.jpg";
import UJnanatarang8 from "@/assets/images/gallery/ullal/Jnanatarang/img8.jpg";
import UJnanatarang9 from "@/assets/images/gallery/ullal/Jnanatarang/img9.jpg";
import UJnanatarang10 from "@/assets/images/gallery/ullal/Jnanatarang/img10.jpg";

// Market Day
import UMarketDay1 from "@/assets/images/gallery/ullal/MarketDay/img1.jpg";
import UMarketDay2 from "@/assets/images/gallery/ullal/MarketDay/img2.jpg";
import UMarketDay3 from "@/assets/images/gallery/ullal/MarketDay/img3.jpg";
import UMarketDay4 from "@/assets/images/gallery/ullal/MarketDay/img4.jpg";
import UMarketDay5 from "@/assets/images/gallery/ullal/MarketDay/img5.jpg";
import UMarketDay6 from "@/assets/images/gallery/ullal/MarketDay/img6.jpg";
import UMarketDay7 from "@/assets/images/gallery/ullal/MarketDay/img7.jpg";
import UMarketDay8 from "@/assets/images/gallery/ullal/MarketDay/img8.jpg";
import UMarketDay9 from "@/assets/images/gallery/ullal/MarketDay/img9.jpg";
import UMarketDay10 from "@/assets/images/gallery/ullal/MarketDay/img10.jpg";

// Montessori Observation
import UMontessoriObservation1 from "@/assets/images/gallery/ullal/MontessoriObservation/img1.jpg"; 
import UMontessoriObservation2 from "@/assets/images/gallery/ullal/MontessoriObservation/img2.jpg";
import UMontessoriObservation3 from "@/assets/images/gallery/ullal/MontessoriObservation/img3.jpg";
import UMontessoriObservation4 from "@/assets/images/gallery/ullal/MontessoriObservation/img4.jpg";
import UMontessoriObservation5 from "@/assets/images/gallery/ullal/MontessoriObservation/img5.jpg";
import UMontessoriObservation6 from "@/assets/images/gallery/ullal/MontessoriObservation/img6.jpg";
import UMontessoriObservation7 from "@/assets/images/gallery/ullal/MontessoriObservation/img7.jpg";
import UMontessoriObservation8 from "@/assets/images/gallery/ullal/MontessoriObservation/img8.jpg";
import UMontessoriObservation9 from "@/assets/images/gallery/ullal/MontessoriObservation/img9.jpg";
import UMontessoriObservation10 from "@/assets/images/gallery/ullal/MontessoriObservation/img10.jpg";

// Ramayanotsavam
import URamayanotsavam1 from "@/assets/images/gallery/ullal/Ramayanotsavam/img1.jpg";
import URamayanotsavam2 from "@/assets/images/gallery/ullal/Ramayanotsavam/img2.jpg";
import URamayanotsavam3 from "@/assets/images/gallery/ullal/Ramayanotsavam/img3.jpg";
import URamayanotsavam4 from "@/assets/images/gallery/ullal/Ramayanotsavam/img4.jpg";
import URamayanotsavam5 from "@/assets/images/gallery/ullal/Ramayanotsavam/img5.jpg";
import URamayanotsavam6 from "@/assets/images/gallery/ullal/Ramayanotsavam/img6.jpg";
import URamayanotsavam7 from "@/assets/images/gallery/ullal/Ramayanotsavam/img7.jpg";
import URamayanotsavam8 from "@/assets/images/gallery/ullal/Ramayanotsavam/img8.jpg";
import URamayanotsavam9 from "@/assets/images/gallery/ullal/Ramayanotsavam/img9.jpg";
import URamayanotsavam10 from "@/assets/images/gallery/ullal/Ramayanotsavam/img10.jpg";



// Gallery images for Srigandhkaval Branch
// Deepothsavam
import SDeepothsavam1 from "@/assets/images/gallery/srigandhakaval/Deepothsavam/img1.jpg";
import SDeepothsavam2 from "@/assets/images/gallery/srigandhakaval/Deepothsavam/img2.jpg";
import SDeepothsavam3 from "@/assets/images/gallery/srigandhakaval/Deepothsavam/img3.jpg";
import SDeepothsavam4 from "@/assets/images/gallery/srigandhakaval/Deepothsavam/img4.jpg";
import SDeepothsavam5 from "@/assets/images/gallery/srigandhakaval/Deepothsavam/img5.jpg";
import SDeepothsavam6 from "@/assets/images/gallery/srigandhakaval/Deepothsavam/img6.jpg";
import SDeepothsavam7 from "@/assets/images/gallery/srigandhakaval/Deepothsavam/img7.jpg";
import SDeepothsavam8 from "@/assets/images/gallery/srigandhakaval/Deepothsavam/img8.jpg";
import SDeepothsavam9 from "@/assets/images/gallery/srigandhakaval/Deepothsavam/img9.jpg";
import SDeepothsavam10 from "@/assets/images/gallery/srigandhakaval/Deepothsavam/img10.jpg";

// Environment Day
import SEnvironmentDay1 from "@/assets/images/gallery/srigandhakaval/EnvironmentDay/img1.jpg";
import SEnvironmentDay2 from "@/assets/images/gallery/srigandhakaval/EnvironmentDay/img2.jpg";
import SEnvironmentDay3 from "@/assets/images/gallery/srigandhakaval/EnvironmentDay/img3.jpg";
import SEnvironmentDay4 from "@/assets/images/gallery/srigandhakaval/EnvironmentDay/img4.jpg";
import SEnvironmentDay5 from "@/assets/images/gallery/srigandhakaval/EnvironmentDay/img5.jpg";
import SEnvironmentDay6 from "@/assets/images/gallery/srigandhakaval/EnvironmentDay/img6.jpg";
import SEnvironmentDay7 from "@/assets/images/gallery/srigandhakaval/EnvironmentDay/img7.jpg";
import SEnvironmentDay8 from "@/assets/images/gallery/srigandhakaval/EnvironmentDay/img8.jpg";
import SEnvironmentDay9 from "@/assets/images/gallery/srigandhakaval/EnvironmentDay/img9.jpg";
// import SEnvironmentDay10 from "@/assets/images/gallery/srigandhakaval/EnvironmentDay/img10.jpg";

// Ganeshostova
import SGaneshostova1 from "@/assets/images/gallery/srigandhakaval/Ganeshostova/img1.jpg";
import SGaneshostova2 from "@/assets/images/gallery/srigandhakaval/Ganeshostova/img2.jpg";
import SGaneshostova3 from "@/assets/images/gallery/srigandhakaval/Ganeshostova/img3.jpg";
import SGaneshostova4 from "@/assets/images/gallery/srigandhakaval/Ganeshostova/img4.jpg";
import SGaneshostova5 from "@/assets/images/gallery/srigandhakaval/Ganeshostova/img5.jpg";
import SGaneshostova6 from "@/assets/images/gallery/srigandhakaval/Ganeshostova/img6.jpg";
import SGaneshostova7 from "@/assets/images/gallery/srigandhakaval/Ganeshostova/img7.jpg";
import SGaneshostova8 from "@/assets/images/gallery/srigandhakaval/Ganeshostova/img8.jpg";
import SGaneshostova9 from "@/assets/images/gallery/srigandhakaval/Ganeshostova/img9.jpg";
import SGaneshostova10 from "@/assets/images/gallery/srigandhakaval/Ganeshostova/img10.jpg";

// Guru Poornima
import SGuruPoornima1 from "@/assets/images/gallery/srigandhakaval/GuruPoornima/img1.jpg";
import SGuruPoornima2 from "@/assets/images/gallery/srigandhakaval/GuruPoornima/img2.jpg";
import SGuruPoornima3 from "@/assets/images/gallery/srigandhakaval/GuruPoornima/img3.jpg";
import SGuruPoornima4 from "@/assets/images/gallery/srigandhakaval/GuruPoornima/img4.jpg";
import SGuruPoornima5 from "@/assets/images/gallery/srigandhakaval/GuruPoornima/img5.jpg";
import SGuruPoornima6 from "@/assets/images/gallery/srigandhakaval/GuruPoornima/img6.jpg";
import SGuruPoornima7 from "@/assets/images/gallery/srigandhakaval/GuruPoornima/img7.jpg";
import SGuruPoornima8 from "@/assets/images/gallery/srigandhakaval/GuruPoornima/img8.jpg";  
import SGuruPoornima9 from "@/assets/images/gallery/srigandhakaval/GuruPoornima/img9.jpg";
import SGuruPoornima10 from "@/assets/images/gallery/srigandhakaval/GuruPoornima/img10.jpg";


// Independence Day
import SIndependenceDay1 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img1.jpg";
import SIndependenceDay2 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img2.jpg";
import SIndependenceDay3 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img3.jpg";
import SIndependenceDay4 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img4.jpg";
import SIndependenceDay5 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img5.jpg";
import SIndependenceDay6 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img6.jpg";
import SIndependenceDay7 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img7.jpg";
import SIndependenceDay8 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img8.jpg";
import SIndependenceDay9 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img9.jpg";
import SIndependenceDay10 from "@/assets/images/gallery/srigandhakaval/IndependenceDay/img10.jpg";

// Investiture Ceremony
import SInvestitureCeremony1 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img1.jpg";
import SInvestitureCeremony2 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img2.jpg";
import SInvestitureCeremony3 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img3.jpg";
import SInvestitureCeremony4 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img4.jpg";
import SInvestitureCeremony5 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img5.jpg";
import SInvestitureCeremony6 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img6.jpg";
import SInvestitureCeremony7 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img7.jpg";
import SInvestitureCeremony8 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img8.jpg";
import SInvestitureCeremony9 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img9.jpg";
import SInvestitureCeremony10 from "@/assets/images/gallery/srigandhakaval/InvestitureCeremony/img10.jpg";

// Karnataka Rajyothsava
import SKarnatakaRajyothsava1 from "@/assets/images/gallery/srigandhakaval/KarnatakaRajyothsava/img1.jpg";
import SKarnatakaRajyothsava2 from "@/assets/images/gallery/srigandhakaval/KarnatakaRajyothsava/img2.jpg";
import SKarnatakaRajyothsava3 from "@/assets/images/gallery/srigandhakaval/KarnatakaRajyothsava/img3.jpg";
import SKarnatakaRajyothsava4 from "@/assets/images/gallery/srigandhakaval/KarnatakaRajyothsava/img4.jpg";
import SKarnatakaRajyothsava5 from "@/assets/images/gallery/srigandhakaval/KarnatakaRajyothsava/img5.jpg";
import SKarnatakaRajyothsava6 from "@/assets/images/gallery/srigandhakaval/KarnatakaRajyothsava/img6.jpg";
import SKarnatakaRajyothsava7 from "@/assets/images/gallery/srigandhakaval/KarnatakaRajyothsava/img7.jpg";
import SKarnatakaRajyothsava8 from "@/assets/images/gallery/srigandhakaval/KarnatakaRajyothsava/img8.jpg";
import SKarnatakaRajyothsava9 from "@/assets/images/gallery/srigandhakaval/KarnatakaRajyothsava/img9.jpg";
import SKarnatakaRajyothsava10 from "@/assets/images/gallery/srigandhakaval/KarnatakaRajyothsava/img10.jpg";

// Yoga Day
import SYogaDay1 from "@/assets/images/gallery/srigandhakaval/YogaDay/img1.jpg";
import SYogaDay2 from "@/assets/images/gallery/srigandhakaval/YogaDay/img2.jpg";
import SYogaDay3 from "@/assets/images/gallery/srigandhakaval/YogaDay/img3.jpg";
import SYogaDay4 from "@/assets/images/gallery/srigandhakaval/YogaDay/img4.jpg";
import SYogaDay5 from "@/assets/images/gallery/srigandhakaval/YogaDay/img5.jpg";  
import SYogaDay6 from "@/assets/images/gallery/srigandhakaval/YogaDay/img6.jpg";
import SYogaDay7 from "@/assets/images/gallery/srigandhakaval/YogaDay/img7.jpg";
import SYogaDay8 from "@/assets/images/gallery/srigandhakaval/YogaDay/img8.jpg";
import SYogaDay9 from "@/assets/images/gallery/srigandhakaval/YogaDay/img9.jpg";
import SYogaDay10 from "@/assets/images/gallery/srigandhakaval/YogaDay/img10.jpg";















import img1 from "@/assets/images/cultural/01. Ramayanotsavam.jpg";
import img2 from "@/assets/images/cultural/02. Gita Jayanti.jpg";
import img3 from "@/assets/images/cultural/03. Guru Charana Pooja.jpg";
import img4 from "@/assets/images/cultural/04. Baala-kauthukam.jpg";
import img5 from "@/assets/images/cultural/05. Jnanatarang.jpg";
import img6 from "@/assets/images/cultural/06. Market Day.jpg";
import img7 from "@/assets/images/cultural/07. Bhashaavali.jpg";
import img8 from "@/assets/images/cultural/8. Montessori Observation.jpg";
import img9 from "@/assets/images/cultural/09. Guru Poornima.jpg";
import img10 from "@/assets/images/cultural/10. Ganeshostova.jpg";
import img11 from "@/assets/images/cultural/11. Yoga Day.jpg";
import img12 from "@/assets/images/cultural/12. Independence Day.jpg";
import img13 from "@/assets/images/cultural/13. Karnataka Rajyothsava.jpg";
import img14 from "@/assets/images/cultural/14. Investiture Ceremony.jpg";
import img15 from "@/assets/images/cultural/15. Deepothsavam.jpg";
import img16 from "@/assets/images/cultural/16. Environment Day.jpg";

const ullalActivities = [
  {
    id: 1,
    title: "Ramayanotsavam",
    image: img1,
    images: [URamayanotsavam1, URamayanotsavam2, URamayanotsavam3, URamayanotsavam4, URamayanotsavam5, URamayanotsavam6, URamayanotsavam7, URamayanotsavam8, URamayanotsavam9, URamayanotsavam10], // Replace with actual event images
    description:
      "A celebration of the epic Ramayana through cultural performances and storytelling.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Gita Jayanti",
    image: img2,
    images: [UGitaJayanti1, UGitaJayanti2, UGitaJayanti3, UGitaJayanti4, UGitaJayanti5, UGitaJayanti6, UGitaJayanti7, UGitaJayanti8, UGitaJayanti9, UGitaJayanti10],
    description:
      "Commemorating the sacred Bhagavad Gita through recitations and spiritual discussions.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Guru Charana Pooja",
    image: img3,
    images: [UGuruCharanaPooja1, UGuruCharanaPooja2, UGuruCharanaPooja3, UGuruCharanaPooja4, UGuruCharanaPooja5, UGuruCharanaPooja6, UGuruCharanaPooja7, UGuruCharanaPooja8, UGuruCharanaPooja9, UGuruCharanaPooja10],
    description:
      "A traditional ceremony honoring teachers and their invaluable guidance.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Baala kauthukam",
    image: img4,
    images: [UBaalaKautukam1, UBaalaKautukam2, UBaalaKautukam3, UBaalaKautukam4, UBaalaKautukam5, UBaalaKautukam6, UBaalaKautukam7, UBaalaKautukam8, UBaalaKautukam9, UBaalaKautukam10],
    description:
      "A joyful children's festival celebrating creativity and talent.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Jnanatarang",
    image: img5,
    images: [UJnanatarang1, UJnanatarang2, UJnanatarang3, UJnanatarang4, UJnanatarang5, UJnanatarang6, UJnanatarang7, UJnanatarang8, UJnanatarang9, UJnanatarang10],
    description:
      "An intellectual event promoting knowledge sharing and academic excellence.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Market Day",
    image: img6,
    images: [UMarketDay1, UMarketDay2, UMarketDay3, UMarketDay4, UMarketDay5, UMarketDay6, UMarketDay7, UMarketDay8, UMarketDay9, UMarketDay10],
    description:
      "Students learn entrepreneurship through organizing and participating in a market.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 7,
    title: "Bhashaavali",
    image: img7,
    images: [UBhashaavali1, UBhashaavali2, UBhashaavali3, UBhashaavali4, UBhashaavali5, UBhashaavali6, UBhashaavali7, UBhashaavali8, UBhashaavali9, UBhashaavali10],
    description:
      "A celebration of languages promoting multilingual skills and cultural diversity.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 8,
    title: "Montessori Observation",
    image: img8,
    images: [UMontessoriObservation1, UMontessoriObservation2, UMontessoriObservation3, UMontessoriObservation4, UMontessoriObservation5, UMontessoriObservation6, UMontessoriObservation7, UMontessoriObservation8, UMontessoriObservation9, UMontessoriObservation10],
    description:
      "Showcasing the Montessori methodology in practice for parents and educators.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const srigandhkavalActivities = [
  {
    id: 1,
    title: "Guru Poornima",
    image: img9,
    images: [SGuruPoornima1, SGuruPoornima2, SGuruPoornima3, SGuruPoornima4, SGuruPoornima5, SGuruPoornima6, SGuruPoornima7, SGuruPoornima8, SGuruPoornima9, SGuruPoornima10],
    description:
      "A sacred day dedicated to honoring teachers and spiritual guides.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Ganeshostova",
    image: img10,
    images: [SGaneshostova1, SGaneshostova2, SGaneshostova3, SGaneshostova4, SGaneshostova5, SGaneshostova6, SGaneshostova7, SGaneshostova8, SGaneshostova9, SGaneshostova10],
    description:
      "Celebrating Lord Ganesha through prayers, music, and cultural programs.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Yoga Day",
    image: img11,
    images: [SYogaDay1, SYogaDay2, SYogaDay3, SYogaDay4, SYogaDay5, SYogaDay6, SYogaDay7, SYogaDay8, SYogaDay9, SYogaDay10],
    description:
      "Promoting holistic wellness through yoga practices and mindfulness.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Independence Day",
    image: img12,
    images: [SIndependenceDay1, SIndependenceDay2, SIndependenceDay3, SIndependenceDay4, SIndependenceDay5, SIndependenceDay6, SIndependenceDay7, SIndependenceDay8, SIndependenceDay9, SIndependenceDay10],
    description:
      "Patriotic celebrations commemorating India's independence and heritage.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Karnataka Rajyothsava",
    image: img13,
    images: [SKarnatakaRajyothsava1, SKarnatakaRajyothsava2, SKarnatakaRajyothsava3, SKarnatakaRajyothsava4, SKarnatakaRajyothsava5, SKarnatakaRajyothsava6, SKarnatakaRajyothsava7, SKarnatakaRajyothsava8, SKarnatakaRajyothsava9, SKarnatakaRajyothsava10],
    description: "Honoring the rich culture and formation of Karnataka state.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Investiture Ceremony",
    image: img14,
    images: [SInvestitureCeremony1, SInvestitureCeremony2, SInvestitureCeremony3, SInvestitureCeremony4, SInvestitureCeremony5, SInvestitureCeremony6, SInvestitureCeremony7, SInvestitureCeremony8, SInvestitureCeremony9, SInvestitureCeremony10],
    description: "Formal installation of student leaders and representatives.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 7,
    title: "Deepothsavam",
    image: img15,
    images: [SDeepothsavam1, SDeepothsavam2, SDeepothsavam3, SDeepothsavam4, SDeepothsavam5, SDeepothsavam6, SDeepothsavam7, SDeepothsavam8, SDeepothsavam9, SDeepothsavam10],
    description:
      "Festival of lights celebrating the triumph of good over evil.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 8,
    title: "Environment Day",
    image: img16,
    images: [SEnvironmentDay1, SEnvironmentDay2, SEnvironmentDay3, SEnvironmentDay4, SEnvironmentDay5, SEnvironmentDay6, SEnvironmentDay7, SEnvironmentDay8, SEnvironmentDay9],
    description: "Promoting environmental awareness and sustainable practices.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const videoActivities = [
  ...ullalActivities.map((activity) => ({ ...activity, branch: "ullal" })),
  ...srigandhkavalActivities.map((activity) => ({
    ...activity,
    branch: "srigandhkaval"
  }))
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const tabVariants = {
  active: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  inactive: {
    scale: 1,
    transition: { duration: 0.3 }
  },
  tapped: {
    scale: 1.08,
    backgroundColor: "rgba(255, 87, 34, 0.1)",
    transition: { duration: 0.2 }
  }
};

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const GalleryMain = () => {
  const [mainTab, setMainTab] = useState("videos");
  const [activeBranchTab, setActiveBranchTab] = useState("srigandhkaval");
  const [isLoaded, setIsLoaded] = useState(false);
  const [tappedTab, setTappedTab] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Reset expanded card and branch tab when switching main tabs
  useEffect(() => {
    setExpandedCardId(null);
    if (mainTab === "photos") {
      setActiveBranchTab("srigandhkaval");
    }
  }, [mainTab]);

  // Reset expanded card when switching branch tabs
  useEffect(() => {
    setExpandedCardId(null);
  }, [activeBranchTab]);

  const handleTabTap = (tab) => {
    setTappedTab(tab);
    setTimeout(() => setTappedTab(null), 300);
  };

  const toggleCardExpand = (cardId) => {
    if (expandedCardId === cardId) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(cardId);
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeVariants}
        className="mb-8 sm:mb-12 lg:mb-16 text-center relative"
      >
        <motion.h1
          className="text-3xl md:text-7xl font-bold tracking-tight"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <span className="bg-gradient-to-r from-[#FF5722] to-orange-900 bg-clip-text text-transparent">
            Gallery
          </span>
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mt-3 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover our vibrant events, achievements, and celebrations.
        </motion.p>
        <motion.div
          className="flex justify-center mt-4 sm:mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg width={180} height={30} viewBox="0 0 180 30">
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
                <stop offset="100%" stopColor="#FF5722" stopOpacity="0.3" />
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

      {/* Main Tabs (Videos/Photos) */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="inline-flex bg-white rounded-full shadow-lg p-1.5 sm:p-2">
          <motion.button
            variants={tabVariants}
            animate={
              mainTab === "videos"
                ? "active"
                : tappedTab === "videos"
                ? "tapped"
                : "inactive"
            }
            onClick={() => {
              setMainTab("videos");
              handleTabTap("videos");
            }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
              mainTab === "videos"
                ? "bg-avorange text-white"
                : "bg-transparent text-av hover:bg-gray-100"
            }`}
          >
            Videos
          </motion.button>
          <motion.button
            variants={tabVariants}
            animate={
              mainTab === "photos"
                ? "active"
                : tappedTab === "photos"
                ? "tapped"
                : "inactive"
            }
            onClick={() => {
              setMainTab("photos");
              handleTabTap("photos");
            }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 ${
              mainTab === "photos"
                ? "bg-avorange text-white"
                : "bg-transparent text-av hover:bg-gray-100"
            }`}
          >
            Photos
          </motion.button>
        </div>
      </div>

      {/* Branch Tabs (Only for Photos) */}
      <AnimatePresence>
        {mainTab === "photos" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex bg-white/90 rounded-full shadow-md p-1.5">
              <motion.button
                variants={tabVariants}
                animate={
                  activeBranchTab === "srigandhkaval" ? "active" : "inactive"
                }
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveBranchTab("srigandhkaval")}
                className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-200 ${
                  activeBranchTab === "srigandhkaval"
                    ? "bg-avorange text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Srigandhkaval Branch
              </motion.button>
              <motion.button
                variants={tabVariants}
                animate={activeBranchTab === "ullal" ? "active" : "inactive"}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveBranchTab("ullal")}
                className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-200 ${
                  activeBranchTab === "ullal"
                    ? "bg-avorange text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Ullal Branch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${mainTab}-${activeBranchTab}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mainTab === "photos"
              ? (activeBranchTab === "ullal"
                  ? ullalActivities
                  : srigandhkavalActivities
                ).map((activity) => (
                  <GalleryCard
                    key={activity.id}
                    {...activity}
                    activityId={`${activeBranchTab}-${activity.id}`}
                    isExpanded={
                      expandedCardId === `${activeBranchTab}-${activity.id}`
                    }
                    toggleExpand={toggleCardExpand}
                    showVideo={false}
                    videoDisabled={true}
                  />
                ))
              : videoActivities.map((activity) => (
                  <GalleryCard
                    key={`${activity.branch}-${activity.id}`}
                    {...activity}
                    activityId={`${activity.branch}-${activity.id}`}
                    isExpanded={
                      expandedCardId === `${activity.branch}-${activity.id}`
                    }
                    toggleExpand={toggleCardExpand}
                    showVideo={true}
                    videoDisabled={true}
                  />
                ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-32 h-32 bg-avorange opacity-5 blur-xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-av opacity-5 blur-xl -z-10"></div>
    </section>
  );
};

export default GalleryMain;