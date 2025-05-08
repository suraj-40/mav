import Image from "next/image";

import aboutImage8 from "@/assets/images/about/about_8.png";
import founder from "@/assets/images/about/founder.png";
import aboutImage15 from "@/assets/images/about/about_15.png";
import SectionName from "@/components/shared/section-names/SectionName";

import HeadingSecondary from "@/components/shared/headings/HeadingSecondary";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
const AboutFounder = () => {
  return (
    <section>
      <div
        className="m-3 p-3 md:mx-20 md:my-10 md:p-10 text-justify rounded-3xl shadow-lg bg-white"
        data-aos="fade-up"
      >
        <HeadingSecondary>
          <span className="text-av relative">
            Founder and{" "}
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-av"></span>
          </span>
          <span className="text-avorange relative ">
            President&apos;s Profile
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-av via-avorange  to-avorange"></span>
          </span>
        </HeadingSecondary>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* about left */}
          <div data-aos="fade-up">
            <TiltWrapper>
              <div className="relative overflow-hidden z-0 flex flex-col ">
                <Image className=" w-full" src={founder} alt="" />

                <div className="bg-gray-50 rounded-lg mt-5 p-6 shadow-inner border border-gray-200">
                  <h3 className="text-sm md:text-base text-justify text-avorange font-semibold  mb-2">
                    &quot;Education is not just about academic intelligence, we
                    shape individuals with confidence and resilience.&quot;
                  </h3>
                  <p className="text-contentColor text-sm md:text-base leading-relaxed">
                    Our education is not just about marks or medals — it&apos;s
                    about building character, confidence, and resilience. We
                    believe that every child carries within them great
                    potential, and our role is to nurture it with care and
                    wisdom. Here, knowledge empowers, values strengthen, and
                    traditions guide the way forward. Our classrooms spark
                    curiosity, our activities build discipline, and our
                    environment helps every child grow into someone ready to
                    face life&apos;s challenges with courage and grace. This is
                    where bright minds and strong hearts are shaped.
                  </p>
                  <div className="flex justify-end">
                  <div className=" ml-auto text-sm md:text-base text-av font-semibold">
                    - Mr. Manjunath Aradhya
                  </div>
                  </div>
                </div>
              </div>
              
            </TiltWrapper>
          </div>
          {/* about right */}
          <div data-aos="fade-up" className="2xl:ml-65px">
            {/* <SectionName>About Us</SectionName> */}
            <div className="text-center text-2xl md:text-3xl md:mt-12 leading-7 text-avorange dark:text-blackColor-dark">
              Mr. Manjunath Aradhya
            </div>
            <div className="text-center font-bold">
              <div className=" bg-av  px-5 py-3 m-2 rounded-full space-y-1 inline-block">
                <div className="text-sm md:text-md leading-none md:leading-none text-white dark:text-contentColor-dark text-center">
                  Founder Trustee & President
                </div>
              </div>
            </div>

            <div className="md:mt-10">
              <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                The vision of our founder president, Mr. Manjunath Aradhya, a
                Computer Science Engineer & a Technocrat by profession as well
                as a Teacher by passion has played a major role in steering the
                institution to be aligned with the future needs of the 21st
                century. Formerly a business associate at a top MNC, he has been
                relentlessly focusing on making quality education affordable &
                accessible to a larger student community over the past 25+
                years.
              </p>
              <br />
              <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                From having to start teaching at the age of 17 to afford his
                engineering educational expenses to establishing Shree Aradhya
                Educational and Charitable Trust, which currently is fulfilling
                the educational needs of 1000+ students, is an inspiring journey
                for the entire team. His firm belief that quality education
                should always be available to knowledge seekers with the utmost
                ease, has been at the core of the vision and mission of the
                trust.
              </p>

              <br />
              <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                Having personally guided, trained, and mentored 60,000+ fresh
                engineering graduates and transformed them into successful IT
                professionals, he has also authored several popular Computer
                Science textbooks published by London based Pearson Education &
                Cengage Learning, headquartered in Boston, USA. His technology
                background has immensely helped the trust in actively exploring
                blended-mode, Edutainment-based skilling to enhance experiential
                learning with a hands-on approach to prepare Agasth&apos;ians as
                the leaders of the future knowledge economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
