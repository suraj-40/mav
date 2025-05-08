import Image from "next/image";

import aboutImage8 from "@/assets/images/about/about_8.png";
import Treasurer from "@/assets/images/about/treasurer.png";
import aboutImage15 from "@/assets/images/about/about_15.png";
import SectionName from "@/components/shared/section-names/SectionName";

import HeadingSecondary from "@/components/shared/headings/HeadingSecondary";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
const AboutTreasurer = () => {
  return (
    <section>
      <div
        className="m-3 p-3 md:mx-20 md:my-10 md:p-10 text-justify rounded-3xl shadow-lg bg-white"
        data-aos="fade-up"
      >
        <HeadingSecondary>
          <span className="text-av relative ">
            Treasurer&apos;s{" "}
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-av"></span>
          </span>
          <span className="text-avorange relative ">
            Profile
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-av via-avorange  to-avorange"></span>
          </span>
        </HeadingSecondary>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* about left */}
          <div data-aos="fade-up">
            <TiltWrapper>
              <div className="relative overflow-hidden z-0 flex flex-col ">
                <Image className=" w-full md:mt-5" src={Treasurer} alt="" />

                <div className="bg-gray-50 rounded-lg mt-5 p-6 shadow-inner border border-gray-200">
                  <h3 className="text-sm md:text-base text-justify text-avorange font-semibold  mb-2">
                  &quot;Investing in every child&apos;s growth is at the core of
                  what we do at Agasthya Vidyanikethan.&quot;
                  </h3>
                  <p className="text-contentColor text-sm md:text-base leading-relaxed">
                  Great learning begins with the right surroundings, and
                  building an effective environment is as important as teaching
                  the right lessons. Every corner of our school is thoughtfully
                  designed, from sunlit classrooms to modern labs and open
                  grounds—everything is created with purpose. These spaces
                  enhance focus, stimulate imagination, and foster
                  self-assurance as students develop their unique abilities. By
                  investing in meaningful learning environments today, we help
                  young minds develop capabilities they&apos;ll carry into
                  tomorrow&apos;s achievements. Our commitment is to create not
                  just facilities, but foundations for lasting student success.
                  </p>
                  <div className="flex justify-end">
                    <div className=" ml-auto text-sm md:text-base text-av font-semibold">
                    - Mrs. Vinutha Thejaswi Aradhya
                    </div>
                  </div>
                </div>
              </div>
            </TiltWrapper>
          </div>
          {/* about right */}
          <div data-aos="fade-up" className="2xl:ml-65px">
            {/* <SectionName>About Us</SectionName> */}
            <div className="text-center text-2xl md:text-3xl md:mt-5 leading-7 text-avorange dark:text-blackColor-dark">
              Mrs. Vinutha Thejaswi Aradhya
            </div>
            <div className="text-center font-bold">
              <div className=" bg-av  px-5 py-3 m-2 rounded-full space-y-1 inline-block">
                <div className="text-sm md:text-md leading-none md:leading-none text-white dark:text-contentColor-dark text-center">
                  Treasurer
                </div>
              </div>
            </div>
            <div className="md:mt-3">
              <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                Mrs. Vinutha Thejaswi Aradhya embodies the spirit of
                transformative leadership as the Treasurer of the trust. An
                investor, influencer, and devoted social activist, she has been
                instrumental in uplifting communities by emphasizing education
                and empowerment. Her advocacy for financial independence among
                women stands as a cornerstone of her initiatives, offering
                crucial education and skills to thrive in today&apos;s
                competitive world.
              </p>
              <br />
              {/* <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
            Beyond finance, she has transformed small businesses through digital strategies, fostering sustainable growth and community development. Her dedication to uplifting children and women has earned her widespread recognition.</p> */}
              <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                Her journey extends beyond financial acumen. She has
                significantly influenced the realm of digital arena, where she
                has transformed small and often overlooked businesses into
                flourishing enterprises. Her efforts in coaching and strategic
                advisement have paved the way for sustainable growth and
                community development. Her work has garnered extensive
                accolades, underscoring her commitment to uplifting children and
                women, a passion that aligns with her lifelong dream of
                educational reform.
              </p>
              <br />
              {/* <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
            Since 2012, she has actively educated orphans and supported 100+ underprivileged children annually. During the global health crisis, she led efforts to provide educational resources to 5,000+ girls, reinforcing the importance of female education. A firm believer in the power of knowledge, she advocates for innovation-driven learning, ensuring Agasthya Vidyanikethan nurtures future-ready, responsible citizens.
            </p> */}
              <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                Her role as a social activist involves profound and wide-ranging
                initiatives. Since 2012, Mrs. Vinutha Aradhya has been actively
                involved in educating orphans and supporting over 100
                underprivileged children annually. During the recent global
                health crisis, she led efforts to distribute educational
                resources to over 5,000 girls, reinforcing the importance of
                female education amid unprecedented challenges.
              </p>
              <br />
              <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                Her strategic influence is rooted in the belief that education
                transforms lives, advocating for a solution-driven approach that
                values innovation and inclusivity. Her leadership ensures that
                Agasthya Vidyanikethan not only educates but also prepares
                successful future citizens equipped to contribute positively to
                society.
              </p>
            </div>
            {/* <p className="flex items-center gap-x-4 text-lg text-blackColor dark:text-blackColor-dark mb-25px">
              <Image loading="lazy" src={aboutImage15} alt="about" />
                <b>10+ Years ExperienceIn</b>
            </p> */}
            {/* <p className="text-sm md:text-base leading-7 text-blackColor dark:text-blackColor-dark"> 
                <b>Mr. Manjunath Aradhya</b></p>
                <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                Founder Trustee & President - Shree Aradhya Educational & Charitable Trust,<br/>    
                Founder Director & CEO - Agasthya EdTech Pvt. Ltd.
                </p> */}
            {/* <div className="mt-30px">
              <ButtonPrimary path="/about" arrow={true}>
                About More
              </ButtonPrimary>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTreasurer;
