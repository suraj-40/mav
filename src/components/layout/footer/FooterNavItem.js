import Link from "next/link";
import React from "react";

const FooterNavItem = ({ name, path }) => {
  return (
    <li>
      <Link
        href={path}
        className="text-black relative hover:text-[#FF5B00] after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-[#FF5B00] hover:after:w-full after:bottom-0 after:left-0"
      >
        {name}
      </Link>
    </li>
  );
};

export default FooterNavItem;
