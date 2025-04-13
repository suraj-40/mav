"use client";

import { GraduationCap, Lightbulb, Globe, Target } from "lucide-react";
import { useState } from "react";

const TabButtonSecondary = ({
  name,
  idx,
  currentIdx,
  handleTabClick,
  button = "text", // Default to "text" mode, can be "icon"
  className,
}) => {
  const getIcon = () => {
    switch (name) {
      case "Quality of Education":
        return GraduationCap;
      case "Futuristic Approach":
        return Lightbulb;
      case "Ecosystem":
        return Globe;
      case "Our Mission":
        return Target;
      default:
        return null;
    }
  };

  const Icon = getIcon();

  // Construct button classes using template literals
  const buttonClasses = [
    className || "",
    "flex items-center justify-center px-4 py-3 md:px-6 md:py-4 text-size-13 md:text-size-15 font-medium whitespace-nowrap transition-colors focus:outline-none",
    button === "icon"
      ? `${idx === currentIdx ? "text-secondaryColor" : "text-gray-500"} hover:text-secondaryColor`
      : `w-full ${idx === currentIdx ? "text-secondaryColor font-semibold" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`,
    "group-hover:text-secondaryColor",
  ]
    .filter(Boolean)
    .join(" ");

  // Construct line classes using template literals
  const lineClasses = [
    "absolute bottom-0 left-0 h-[2px] md:h-[3px] bg-secondaryColor transition-all duration-500 ease-in-out",
    idx === currentIdx ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
    "group-hover:opacity-100 group-hover:scale-x-100",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="container relative group flex-1 text-center">
      <button onClick={() => handleTabClick(idx)} className={buttonClasses}>
        {Icon && button === "icon" && <Icon className="w-4 h-4 mr-2 md:w-5 md:h-5" />}
        {name}
      </button>
      {/* Bottom Line Animation */}
      <div className={lineClasses} style={{ transformOrigin: "left" }} />
    </div>
  );
};

export default TabButtonSecondary;