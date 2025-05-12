import Image from "next/image";
import React from "react";
import student from "@/assets/images/counter/student.png";
import teacher from "@/assets/images/counter/teacher.png";
import campus from "@/assets/images/counter/campus.png";
import choice from "@/assets/images/counter/choice.png";

const NewAbout = () => {
  return (
    <>
      <section>
      <div className="" data-aos="fade-up">
          <div className="counter flex flex-wrap p-4 md:py-10 m-3 md:m-10 md:mt-[60px] rounded-xl gap-y-8 bg-[#202745] lg:gap-y-0">
             {/* Two Campuses Section */}
             <div className="basis-full sm:basis-1/2 lg:basis-1/3" data-aos="fade-up">
              <div className="flex gap-4 md:ml-7">
                <div>
                  <Image
                    className="relative w-15 h-15"
                    src={campus}
                    alt="campus image"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <h1 className="text-[34px] leading-[1.1] font-bold text-avorange">
                    <span data-countup-number="2000">2</span>
                  </h1>
                  <p className="uppercase text-white font-bold leading-[18px]">
                    Campuses
                  </p>
                  <p className="text-white font-light leading-[20px] pt-1">
                   Equipped for today&apos;s learners. {/*to excel and thrive. */}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Teachers Section */}
            <div className="basis-full sm:basis-1/2 lg:basis-1/3" data-aos="fade-up">
              <div className="flex gap-4">
                <div>
                  <Image
                    className="relative w-15 h-15"
                    src={teacher}
                    alt="teacher image"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div className="md:mr-7">
                  <h1 className="text-[34px] leading-[1.1] font-bold text-avorange">
                    <span data-countup-number="2000">100</span>+
                  </h1>
                  <p className="uppercase text-white font-bold leading-[18px]">
                    Dedicated Educators
                  </p>
                  <p className="text-white font-light leading-[20px] pt-1">
                    Teaching with care and experience. {/*to excel and thrive. */}
                  </p>
                </div>
              </div>
            </div>

            {/* Students Section */}
            <div className="basis-full sm:basis-1/2 lg:basis-1/3" data-aos="fade-up">
              <div className="flex gap-4 md:ml-7">
              <div>
                  <Image
                    className="relative w-15 h-15"
                    src={student}
                    alt="student image"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div className="md:mr-7">
                  <h1 className="text-[34px] leading-[1.1] font-bold text-avorange">
                    <span data-countup-number="2000">1000</span>+
                  </h1>
                  <p className="uppercase text-white font-bold leading-[18px]">
                    Bright Minds
                  </p>
                  <p className="text-white font-light leading-[20px] pt-1">
                  Learning and growing every day. {/*to excel and thrive. */}
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