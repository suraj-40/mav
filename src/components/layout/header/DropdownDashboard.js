import React from "react";
import DropdownPrimary from "./DropdownPrimary";

const DropdownDashboard = () => {
  const items = [
   
    {
      name: "Dinacharya",
      status: null,
      path: "/student-life/dinacharya",
      type: "secondary",
    },
    {
      name: "Mandatory Life Skills",
      status: null,
      path: "/student-life/life-skills",
      type: "secondary",
    },
    {
      name: "Cultural Activities",
      status: null,
      path: "/student-life/cultural-activities",
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
