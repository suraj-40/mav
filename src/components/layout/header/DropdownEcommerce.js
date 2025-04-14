import React from "react";
import DropdownPrimary from "./DropdownPrimary";

const DropdownEcommerce = () => {
  const items = [
    {
      name: "Our Leaders",
      status: null,
      path: "/about-us/our-Leaders",
      type: "secondary",
      dropdown: [
        {
          name: "Founder",
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
      name: "Vision & Mission",
      status: null,
<<<<<<< Updated upstream
      path: "/about-us/vision&Mission",
=======
      path: "/about-us/vision-mission",
>>>>>>> Stashed changes
      type: "secondary",
    },
    {
      name: "Contact Us",
      status: null,
      path: "/about-us/contact-Us",
      type: "secondary",
    },
  ];
  return <DropdownPrimary items={items} />;
};

export default DropdownEcommerce;