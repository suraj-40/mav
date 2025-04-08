import Image from "next/image";

import aboutImage8 from "@/assets/images/about/about_8.png";
import Secretary from "@/assets/images/about/secretary.png";
import aboutImage15 from "@/assets/images/about/about_15.png";
import SectionName from "@/components/shared/section-names/SectionName";

import HeadingSecondary from "@/components/shared/headings/HeadingSecondary";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
const AboutSecretary = () => {
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
                <Image className="w-full" src={Secretary} alt="" />

                <p className="text-sm md:text-base leading-7 text-blackColor dark:text-blackColor-dark">
                  <b>Mrs. Nagarathna Aradhya</b>
                </p>
                <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                  {/* Founder Trustee & President - Shree Aradhya Educational & Charitable Trust,<br/>     */}
                  Secretary - Shree Aradhya Educational & Charitable Trust{" "}
                  <br />
                  Director - Agasthya EdTech Pvt. Ltd.
                </p>
              </div>
            </TiltWrapper>
          </div>
          {/* about right */}
          <div data-aos="fade-up" className="2xl:ml-65px">
            {/* <SectionName>About Us</SectionName> */}
            <HeadingSecondary>Secretary&apos;s Message</HeadingSecondary>
            <p className="text-sm md:text-base leading-7 text-secondaryColor dark:text-secondaryColor-dark mb-25px">
              &quot;The essence of education is not just to transfer knowledge
              but to build character.&quot;
              <br />
            </p>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              Mrs. Nagarathna K R, as the secretary of the trust, is the
              primordial energy actively focused on implementing the vision and
              mission of the trust objectives on the ground. She has been
              instrumental in leading a team of 100+ members and guiding them in
              shaping the young minds of Agasthya Vidyanikethan.
            </p>
            <br />
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              She has an excellent academic and professional track record,
              having served in both the corporate and academic worlds. As a
              Computer Science engineer, she has been instrumental in leveraging
              technology for efficient schooling. As the torchbearer, she leads
              her team by example, which is reflected in Agasthya
              Vidyanikethan&apos;s spectacular academic performance over the
              years.
            </p>
            <br />
            {/* <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              Man with a great Mission building the Nation through Students is
              only his Mission who believes Intelligence and Character is the
              goal of true Education.
            </p>
            <br /> */}
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

export default AboutSecretary;
