import Image from "next/image";
import React from "react";
import logoImage from "@/assets/images/logo/logo_2.png";
import Link from "next/link";

const FooterTopLeft = () => {
  return (
    <div data-aos="fade-up" className="text-center lg:text-left">
      <div className="flex flex-col items-center lg:items-start gap-6">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image src={logoImage} alt="Agasthya Vidyanikethan" placeholder="blur" className="w-40 lg:w-48" />
        </Link>
        <h6 className="text-xl lg:text-2xl font-semibold text-white tracking-wide">
          Discover Your Limitless Potential at <span className="text-[#fdbb2d]">Agasthya Vidyanikethan</span>.
        </h6>
      </div>
    </div>
  );
};

export default FooterTopLeft;