import Image from "next/image";
import React from "react";
import certificate2 from "@/assets/images/counter/certificate-2.png";
import scholarshipfacility from "@/assets/images/counter/counter__4.png";
import skilledlecturers from "@/assets/images/counter/counter__1.png";
import preferredchoice from "@/assets/images/counter/counter__3.png";
import student from "@/assets/images/counter/counter__2.png";

const NewAbout = () => {
  return (
    <>
      <section>
      <div className="" data-aos="fade-up">
          <div className="counter flex flex-wrap p-4 md:p-10 m-3 md:m-10 md:mt-[60px] rounded-xl gap-y-8 bg-[#202745] lg:gap-y-0">
            {/* Students Section */}
            <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
              <div className="flex gap-4">
              <div>
                  <Image
                    className="relative md:w-20"
                    src={student}
                    alt="student"
                    loading="lazy"
                    placeholder="blur"
                  />
              </div>
                <div>
                  <h1 className="text-[34px] leading-[1.1] font-bold text-avorange">
                    <span data-countup-number="2000">1000</span>+
                  </h1>
                  <p className="uppercase text-white font-bold leading-[18px]">
                    Students
                  </p>
                  <p className="text-white font-light leading-[15px] pt-1">
                     Empowering a diverse community of students. {/*to excel and thrive. */}
                  </p>
                </div>
              </div>
            </div>

            {/* Teachers Section */}
            <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
              <div className="flex gap-4">
                <div>
                  <Image
                    className="relative"
                    src={skilledlecturers}
                    alt="skilledlecturers"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <h1 className="text-[34px] leading-[1.1]  text-avorange font-bold">
                    <span data-countup-number="200">100</span>+
                  </h1>
                  <p className="uppercase  text-white font-bold leading-[18px]">
                    Teachers
                  </p>
                  <p className="text-white font-light leading-[15px] pt-1">
                    Guiding and inspiring.
                  </p>
                </div>
              </div>
            </div>

            {/* Two Campuses Section */}
            <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
              <div className="flex gap-4">
                <div>
                  <Image
                    className="relative"
                    src={scholarshipfacility}
                    alt="Scholarship Facility"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <p className="text-[20px] uppercase md:my-3 text-avorange font-bold leading-[18px] ">
                    Two Campuses
                  </p>
                  <p className="text-white font-light leading-[15px] pt-1">
                    Nurturing excellence across.
                  </p>
                </div>
              </div>
            </div>

            {/* Preferred Choice Section */}
            <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
              <div className="flex gap-4">
                <div>
                  <Image
                    className="relative md:w-20"
                    src={preferredchoice}
                    alt="Skilled Lecturers"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <p className="uppercase text-[20px] md:my-3 text-avorange font-bold leading-[18px]">
                    Preferred Choice
                  </p>
                  <p className="text-white font-light leading-[15px] pt-1">
                    Consistently ranked as a top institution.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
    </>
  );
};

export default NewAbout;