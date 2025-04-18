import Image from "next/image";

import aboutImage8 from "@/assets/images/about/about_8.png";
import Chairman from "@/assets/images/about/Chairman.png";
import aboutImage15 from "@/assets/images/about/about_15.png";
import SectionName from "@/components/shared/section-names/SectionName";

import HeadingSecondary from "@/components/shared/headings/HeadingSecondary";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
const AboutFounder = () => {
  return (
    <section>
      <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px pt-0px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* about left */}
          <div data-aos="fade-up">
            <TiltWrapper>
            <div className="tilt relative overflow-hidden z-0 flex flex-col items-center justify-center text-center">
                <Image
                    className="absolute left-0 top-0 lg:top-4 right-0 mx-auto -z-1"
                    src={aboutImage8}
                    alt=""
                />
                <Image className="w-full" src={Chairman} alt="" />

                <p className="text-sm md:text-base leading-7 text-blackColor dark:text-blackColor-dark"> 
                    <b>Mr. Manjunath Aradhya</b>
                </p>
                <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                    Founder Trustee & President - Shree Aradhya Educational & Charitable Trust,<br/>    
                    Founder Director & CEO - Agasthya EdTech Pvt. Ltd.
                </p>
            </div>

            </TiltWrapper>
          </div>
          {/* about right */}
          <div data-aos="fade-up" className="2xl:ml-65px">
            {/* <SectionName>About Us</SectionName> */}
            <HeadingSecondary>
              Founder and President&apos;s Message
            </HeadingSecondary>
            <p className="text-sm md:text-base leading-7 text-secondaryColor dark:text-secondaryColor-dark mb-25px">
            &quot;The essence of education is not just to transfer knowledge but to build character.&quot;<br/>- Dr. A.P.J. Abdul Kalam
            </p>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
            Agasthya Vidyanikethan&apos;s founder and chairman, Mr. Manjunath Aradhya, is a renowned educationist, a technology enthusiast,
             a technocrat by profession, and a passionate teacher. He was formerly, a Business Associate at Wipro Technologies. 
             Having over twenty-four years of experience in providing high-quality engineering education, he has personally transformed 
             60,000+ freshers to successful IT professionals.
            </p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                He established Aradhya Academy in 2004 and ABC in 2013. In addition, Mr. Manjunath Aradhya is the author of multiple best-selling 
                computer science books, including C Programming and Data Structures (published by CENGAGE Learning) and Aradhya&apos;s
                 OBJECT-ORIENTED PROGRAMMING WITH C++ (published by Pearson). Data security and mining, programming and programming languages, 
                 data structures and compiler design, finite automata and formal languages are among his areas of interest, which are just a few to mention.</p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                Man with a great Mission building the Nation through Students is only his Mission who believes Intelligence and Character is the goal of true Education.
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

export default AboutFounder;
