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
      name: "Electives",
      status: null,
      path: "/NEP/electives",
      type: "secondary",
    },
    {
      name: "Life Skills",
      status: null,
      path: "/NEP/life-Skills",
      type: "secondary",
    },
    {
      name: "Campus Activity",
      status: null,
      path: "/NEP/campus-Activity",
      type: "secondary",
    },
  ];
  return <DropdownPrimary items={items} />;
};

export default DropdownDashboard;
