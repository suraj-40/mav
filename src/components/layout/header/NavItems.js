import React from "react";
import Navitem from "./Navitem";
import DropdownDemoes from "./DropdownDemoes";
import DropdownPages from "./DropdownPages";
import DropdownCourses from "./DropdownCourses";
import DropdownWrapper from "@/components/shared/wrappers/DropdownWrapper";
import DropdownDashboard from "./DropdownDashboard";
import DropdownEcommerce from "./DropdownEcommerce";

const NavItems = ({ isMobile = false, isMediumScreen = false }) => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
      // dropdown: <DropdownDemoes />,
      isRelative: false,
    },
    // {
    //   id: 2,
    //   name: "Schedule",
    //   path: "/schedule",
    //   isRelative: false,
    // },
    {
      id: 2,
      name: "AV-ATOMS",
      path: "/atoms-e-learning-portal",
      // dropdown: <DropdownCourses />,
      isRelative: false,
    },
    {
      id: 3,
      name: "About Us",
      path: "",
      dropdown: <DropdownEcommerce />,
      isRelative: true,
    },
    {
      id: 4,
      name: "Life@AV",
      path: "",
      dropdown: <DropdownDashboard />,
      isRelative: true,
    },  
    {
      id: 5,
      name: "Why AV?",
      path: "/whyav",
      // dropdown: <DropdownDemoes />,
      isRelative: true,
    },
    {
      id: 6,
      name: "Contact Us",
      path: "/contact-us",
      // dropdown: <DropdownDemoes />,
      isRelative: true,
    },
  ];

  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col space-y-4"
          : isMediumScreen
          ? "flex flex-wrap items-center space-x-7 w-full"
          : "hidden lg:flex justify-between items-center space-x-7"
      }`}
    >
      {navItems.map((navItem, idx) => (
        <Navitem
          key={idx}
          idx={idx}
          navItem={{ ...navItem, idx }}
          isMobile={isMobile}
          isMediumScreen={isMediumScreen}
        >
          <DropdownWrapper>{navItem.dropdown}</DropdownWrapper>
        </Navitem>
      ))}
    </ul>
  );
};

export default NavItems;