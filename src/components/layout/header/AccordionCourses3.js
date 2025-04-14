import React from "react";
import MobileAccordion from "./MobileAccordion";

const AccordionCourses3 = () => {
  const items = [
    {
      name: "About NEP",
      path: "/NEP/about",
    },
    {
      name: "Dinacharya",
      path: "/NEP/dinacharya",
    },
    {
      name: "Electives",
      path: "/NEP/electives",
    },
    {
      name: "Life Skills",
      path: "/NEP/life-Skills",
    },
    {
      name: "Campus Activity",
      path: "/NEP/campus-Activity",
    },
  
  ];
  return <MobileAccordion items={items} />;
};

export default AccordionCourses3;
