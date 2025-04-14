import Image from "next/image";
import React from "react";
import certificate2 from "@/assets/images/counter/certificate-2.png";
import scholarshipfacility from "@/assets/images/counter/scholarship-facility.png";
import skilledlecturers from "@/assets/images/counter/skilled-lecturers.png";

const NewAbout = () => {
  return (
    <>
      <section>
      <div className="">
          <div className="counter flex flex-wrap md:p-10  m-20 rounded-xl gap-y-8 bg-[#202745] lg:gap-y-0">
            {/* Students Section */}
            <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
              <div className="flex gap-4">
                <div className="icon">
                  <svg
                    width="38"
                    height="40"
                    viewBox="0 0 45 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5004 20.4568C26.6355 20.4568 29.9876 17.1309 29.9876 13.0282C29.9876 8.92549 26.6355 5.59961 22.5004 5.59961C18.3653 5.59961 15.0132 8.92549 15.0132 13.0282C15.0132 17.1309 18.3653 20.4568 22.5004 20.4568Z"
                      stroke="#f8941f"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M32.7999 39.0468H12.2005C11.6821 39.0468 11.2598 38.6277 11.2598 38.1134V31.6182C11.2598 25.4563 16.2896 20.4658 22.5002 20.4658C28.7107 20.4658 33.7406 25.4563 33.7406 31.6182V38.123C33.7406 38.6277 33.3182 39.0468 32.7999 39.0468Z"
                      stroke="#f8941f"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M25.6772 6.06643C26.6563 3.09501 29.4784 0.952148 32.7997 0.952148C36.9368 0.952148 40.2869 4.27596 40.2869 8.38072C40.2869 12.4855 36.9368 15.8093 32.7997 15.8093C31.6862 15.8093 30.6303 15.5712 29.68 15.1331"
                      stroke="#f8941f"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-[34px] leading-[1.1] text-white font-bold">
                    <span data-countup-number="2000">2000</span>+
                  </h1>
                  <p className="uppercase text-white font-bold leading-[18px]">
                    Students
                  </p>
                  <p className="text-white font-light leading-[15px] pt-1">
                    Empowering a diverse community of students to excel and thrive.
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
                    src={certificate2}
                    alt="Certificate"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <h1 className="text-[34px] leading-[1.1] text-white font-bold">
                    <span data-countup-number="200">200</span>+
                  </h1>
                  <p className="uppercase text-white font-bold leading-[18px]">
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
                  <p className="uppercase text-white font-bold leading-[18px]">
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
                    className="relative"
                    src={skilledlecturers}
                    alt="Skilled Lecturers"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <p className="uppercase text-white font-bold leading-[18px]">
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