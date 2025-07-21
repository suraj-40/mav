"use client";
import { usePathname } from "next/navigation";
import NavItems from "./NavItems";
import NavbarLogo from "./NavbarLogo";
import NavbarRight from "./NavbarRight";
import NavItems2 from "./NavItems2";
import useIsTrue from "@/hooks/useIsTrue";
import NavbarTop from "./NavbarTop";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const pathname = usePathname();
  const isHome1 = useIsTrue("/");
  const isHome1Dark = useIsTrue("/home-1-dark");
  const isHome2 = useIsTrue("/home-2");
  const isHome2Dark = useIsTrue("/home-2-dark");
  const isHome4 = useIsTrue("/home-4");
  const isHome4Dark = useIsTrue("/home-4-dark");
  const isHome5 = useIsTrue("/home-5");
  const isHome5Dark = useIsTrue("/home-5-dark");
 

  const showTopNav = isHome4 || isHome4Dark || isHome5 || isHome5Dark;
  const isContainerLarge =
    isHome1 || isHome1Dark || isHome4 || isHome4Dark || isHome5 || isHome5Dark;
  const isContainerSecondary = isHome2 || isHome2Dark;

  return (
    <div
    className={`transition-all  duration-500 sticky-header z-50 dark:bg-whiteColor-dark ${
        isHome2 || isHome2Dark
          ? "lg:border-b border-borderColor dark:border-borderColor-dark"
          : ""
      }`}
    >
      <nav>
        <div
          className={`px-4 py-4 lg:py-0 lg:px-0 ${
            isContainerLarge
              ? " 3xl:max-w-7xl"
              : isContainerSecondary
              ? "container sm:container-fluid  3xl:max-w-8xl"
              : "3xl:max-w-8xl"
          } 4xl:max-w-[1920px] mx-auto relative`}
        >
          {/* Main Navbar */}
          <div className="grid grid-cols-3 lg:grid-cols-12 items-center gap-4 lg:gap-6 md:bg-lightorange md:shadow-2xl">
            {/* Navbar Left - Logo */}
            <div className="col-span-1 lg:col-span-2 md:ml-30">
              <NavbarLogo className="transform hover:scale-105 transition-transform duration-300" />
            </div>
            
         
            <div className="flex justify-end font-bold md:hidden">
              {/* <UserDropdown /> */}
            </div> 
      

            {/* Main Menu - Center */}
            <div className="hidden lg:col-span-8 lg:flex justify-center">
              {/* Your NavItems components go here */}
            </div>

            {/* Navbar Right */}
            <div className="col-span-1 lg:col-span-2 flex justify-end md:mr-30">
              <NavbarRight
                isHome2Dark={isHome2Dark}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;