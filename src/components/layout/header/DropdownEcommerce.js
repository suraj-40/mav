import React from "react";
import DropdownPrimary from "./DropdownPrimary";

const DropdownEcommerce = () => {
  const items = [
    {
      name: "Vision & Mission",
      status: null,
      path: "/about-us/vision-mission",
      type: "secondary",
    },
    {
      name: "Our Leaders",
      status: null,
      path: "",
      type: "secondary",
      dropdown: [
        {
          name: "Founder - President",
          status: null,
          path: "/about-us/our-Leaders/founder",
          type: "secondary",
        },
        {
          name: "Vice President",
          status: null,
          path: "/about-us/our-Leaders/vice-president",
          type: "secondary",
        },
        {
          name: "Secretary",
          status: null,
          path: "/about-us/our-Leaders/secretary",
          type: "secondary",
        },
        {
          name: "Treasurer",
          status: null,
          path: "/about-us/our-Leaders/treasurer",
          type: "secondary",
        },
      ],
    },
    {
      name: "Gallery",
      status: null,
      path: "",  ///gallery
      type: "secondary",
    },
  ];
  return <DropdownPrimary items={items} />;
};

export default DropdownEcommerce;