"use client";
import MobileMenuContainer from "@/components/shared/containers/MobileMenuContainer";
import MobileMenuItem from "./MobileMenuItem";

const MobileItems3 = () => {
  const items = [
    { id: 1, name: "Home", path: "/", accordion: false, dropdown: null },
    { id: 2, name: "AV-ATOMS", path: "/atoms-e-learning-portal", accordion: false, dropdown: null },
    { id: 2.5, name: "What's New", path: "/whats-new", accordion: false, dropdown: null },
    
    {
      id: 3,
      name: "About Us",
      path: null,
      accordion: true,
      dropdown: [
        { name: "Vision & Mission", path: "/about-us/vision-mission" },
        {
          name: "Our Leaders",
          path: null,
          dropdown: [
            { name: "Founder - President", path: "/about-us/our-Leaders/founder" },
            { name: "Vice President", path: "/about-us/our-Leaders/vice-president" },
            { name: "Secretary", path: "/about-us/our-Leaders/secretary" },
            { name: "Treasurer", path: "/about-us/our-Leaders/treasurer" },
          ],
        },
        // { name: "Why AV", path: "/whyav" },
      ],
    },
    {
      id: 4,
      name: "Life@AV",
      path: null,
      accordion: true,
      dropdown: [
        { name: "Dinacharya", path: "/student-life/dinacharya" },
        { name: "Mandatory Life Skills", path: "/student-life/life-skills" },
        {
          name: "Cultural Activities",
          path: null,
          dropdown: [
            { name: "Srigandhakaval", path: "/student-life/cultural-activities/srigandhakaval" },
            { name: "Ullal", path: "/student-life/cultural-activities/ullal" },
          ],
        },
        
        // { name: "Campus Activity", path: "/NEP/campus-Activity" },
      ],
    },
  { id: 5.5, name: "Gallery", path: "/about-us/gallery", accordion: false, dropdown: null },
  { id: 5.7, name: "Careers", path: "/careers", accordion: false, dropdown: null },
    // {
    //   id: 5,
    //   name: "Why AV?",
    //   path: null,
    //   accordion: true,
    //   dropdown: [
    //     { name: "NEP", path: "/NEP" }
    //   ],
    // },
    { id: 6, name: "Contact Us", path: "/contact-us", accordion: false, dropdown: null },
  ];

  return (
    <div className="pt-8 pb-6">
      <MobileMenuContainer>
        {items.map((item, idx) => (
          <MobileMenuItem key={idx} item={item} />
        ))}
      </MobileMenuContainer>
    </div>
  );
};

export default MobileItems3;