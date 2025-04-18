"use client";
import MobileMenuContainer from "@/components/shared/containers/MobileMenuContainer";
import MobileMenuItem from "./MobileMenuItem";

const MobileItems3 = () => {
  const items = [
    { id: 1, name: "Home", path: "/", accordion: false, dropdown: null },
    { id: 2, name: "Schedule", path: "/schedule", accordion: false, dropdown: null },
    { id: 3, name: "Atoms", path: "/atoms", accordion: false, dropdown: null },
    {
      id: 4,
      name: "NEP",
      path: null,
      accordion: true,
      dropdown: [
        { name: "About NEP", path: "/NEP/about" },
        { name: "Dinacharya", path: "/NEP/dinacharya" },
        { name: "Cultural Activities", path: "/NEP/cultural-activities" },
        { name: "Life Skills", path: "/NEP/life-skills" },
        // { name: "Campus Activity", path: "/NEP/campus-Activity" },
      ],
    },
    {
      id: 5,
      name: "About Us",
      path: null,
      accordion: true,
      dropdown: [
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
        { name: "Vision & Mission", path: "/about-us/vision-mission" },
        { name: "Contact Us", path: "/about-us/contact-Us" },
      ],
    },
    { id: 6, name: "Why AV?", path: "/whyav", accordion: false, dropdown: null },
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