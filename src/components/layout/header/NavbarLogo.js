import Image from "next/image";
import React from "react";
import logo1 from "@/assets/images/logo/logo_1.png";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <div className="lg:col-start-1 lg:col-span-2 flex items-center">
      <Link
        href="/"
        className="w-logo-sm lg:w-logo-lg transition-all duration-300 hover:opacity-90"
      >
        <Image
          priority={true}
          src={logo1}
          alt="AV Vidyanikethan Logo"
          className="h-[42px] w-auto max-h-[50px] md:max-h-[60px] lg:max-h-[70px] object-contain"
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
