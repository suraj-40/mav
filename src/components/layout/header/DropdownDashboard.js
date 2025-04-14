import React from "react";
import DropdownPrimary from "./DropdownPrimary";

const DropdownDashboard = () => {
  const items = [
    {
      name: "About NEP",
      status: null,
      path: "/NEP/about",
      type: "secondary",      
    },
    {
      name: "Dinacharya",
      status: null,
      path: "/NEP/dinacharya",
      type: "secondary",
    },
    {
      name: "Cultural Activities",
      status: null,
      path: "/NEP/cultural-activities",
      type: "secondary",
    },
    {
      name: "Life Skills",
      status: null,
      path: "/NEP/life-skills",
      type: "secondary",
    },
    // {
    //   name: "Campus Activity",
    //   status: null,
    //   path: "/NEP/campus-activity",
    //   type: "secondary",
    // },
  ];
  return <DropdownPrimary items={items} />;
};

export default DropdownDashboard;
