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
      <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px pt-0px text-justify">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* about left */}
          <div data-aos="fade-up">
            <TiltWrapper>
            <div className="tilt relative overflow-hidden z-0 flex flex-col items-center justify-center text-center">
              
                <Image className="bg-av w-full" src={Treasurer} alt="" />

                <p className="text-sm md:text-base leading-7 text-blackColor dark:text-blackColor-dark"> 
                    <b>Mrs. Vinutha Thejaswi Aradhya</b>
                </p>
                <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                    {/* Founder Trustee & President - Shree Aradhya Educational & Charitable Trust,<br/>     */}
                    Treasurer <br/> Shree Aradhya Educational & Charitable Trust
                </p>
            </div>

            </TiltWrapper>
          </div>
          {/* about right */}
          <div data-aos="fade-up" className="2xl:ml-65px">
            {/* <SectionName>About Us</SectionName> */}
            <HeadingSecondary>
            Treasurer&apos;s Message
            </HeadingSecondary>
            <p className="text-sm md:text-base leading-7 text-secondaryColor dark:text-secondaryColor-dark mb-25px">
            &quot;Educate a woman, and you educate a generation.&quot;<br/>- Brigham Young
            </p>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
            Mrs. Vinutha Thejaswi Aradhya, Treasurer of the trust, is a visionary leader, investor, influencer, and social activist dedicated to education and empowerment. She champions financial independence for women, equipping them with crucial skills to thrive in today’s world.
            </p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
            Beyond finance, she has transformed small businesses through digital strategies, fostering sustainable growth and community development. Her dedication to uplifting children and women has earned her widespread recognition.</p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
            Since 2012, she has actively educated orphans and supported 100+ underprivileged children annually. During the global health crisis, she led efforts to provide educational resources to 5,000+ girls, reinforcing the importance of female education. A firm believer in the power of knowledge, she advocates for innovation-driven learning, ensuring Agasthya Vidyanikethan nurtures future-ready, responsible citizens.
            </p>
            <br/>
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
