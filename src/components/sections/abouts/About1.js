"use client";
import SectionName from "@/components/shared/section-names/SectionName";
import Image from "next/image";
import React from "react";
import Counter from "../sub-section/Counter";
import about2 from "@/assets/images/about/about_2.png";
import about3 from "@/assets/images/about/about_3.png";
import about4 from "@/assets/images/about/about_4.png";
import about11 from "@/assets/images/about/about_11.png";
import about19 from "@/assets/images/about/about_19.png";
import counter1 from "@/assets/images/counter/counter__1.png";
import counter2 from "@/assets/images/counter/counter__2.png";
import counter3 from "@/assets/images/counter/counter__3.png";
import counter4 from "@/assets/images/counter/counter__4.png";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import useIsTrue from "@/hooks/useIsTrue";
import herobannerImage2 from "@/assets/images/herobanner/herobanner__2.png";
import Link from "next/link";

const About1 = (
  { children, image, hideCounter }) => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const counterItems = [
    {
      name: "Total Acheivment",
      image: counter1,
      data: 27,
      symbol: "+",
    },
    {
      name: "TOTAL STUDENTS",
      image: counter2,
      data: 145,
      symbol: "+",
    },
    {
      name: "TOTAL INSTRUCTOR",
      image: counter3,
      data: 10,
      symbol: "k",
    },
    {
      name: "OVER THE WORLD",
      image: counter4,
      data: 214,
      symbol: "+",
    },
  ];

   return (
    <section>
      <div className={`container ${hideCounter ? "pt-70px pb-100px" : ""}`}>
        {/* about section   */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-x-30px  ">
          {/* about left  */}
          <div
            className="relative z-0 mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 overflow-visible"
            data-aos="fade-up"
          >
            <div className="container flex text-justify-centre width-100%">
            <div className="px-10px py-3 md:py-25px border-l-4 border-primaryColor shadow-experience static bottom-50px left-10px bg-white dark:bg-whiteColor-dark  w-[400px]">
                <div className="counter flex items-center">
                  <p className="text-[40px] text-primaryColor font-bold uppercase pr-10px leading-1">
                    <span data-countup-number="2000">2000</span>+
                  </p>
                  <p className="text-blackColor dark:text-blackColor-dark font-bold leading26px">
                   Students: Empowering a diverse community of students to excel and thrive.
                  </p>
                </div>
              </div>
              <div className="px-10px py-3 md:py-25px border-l-4 border-primaryColor shadow-experience static bottom-50px left-10px bg-white dark:bg-whiteColor-dark w-[400px]">
                <div className="counter flex items-center">
                  <p className="text-[40px] text-primaryColor font-bold uppercase pr-10px leading-1">
                    <span data-countup-number="200">200</span>+
                  </p>
                  <p className="text-blackColor dark:text-blackColor-dark font-bold leading-26px">
                  Teachers
                  Guiding and inspiring.
                  </p>
                </div>
              </div>
              <div className="px-10px py-3 md:py-25px border-l-4 border-primaryColor shadow-experience static bottom-50px left-10px bg-white dark:bg-whiteColor-dark w-[400px]">
                <div className="counter flex items-center">
                  <p className="text-[40px] text-primaryColor font-bold uppercase pr-10px leading-1">
                    <span data-countup-number="200">200</span>+
                  </p>
                  <p className="text-blackColor dark:text-blackColor-dark font-bold leading-26px">
                  Teachers
                  Guiding and inspiring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about counter  */}
        {isHome9 || isHome9Dark || hideCounter || (
          <Counter items={counterItems} />
        )}
        <div className="mt-6">
          <Link href="/about-us/gallery" className="text-primaryColor underline hover:text-secondaryColor transition">
            Learn more about our campus in Nagarbhavi, Bangalore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About1;
