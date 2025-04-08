import Image from "next/image";

import aboutImage8 from "@/assets/images/about/about_8.png";
import VicePresident from "@/assets/images/about/vicep.png";
import aboutImage15 from "@/assets/images/about/about_15.png";
import SectionName from "@/components/shared/section-names/SectionName";

import HeadingSecondary from "@/components/shared/headings/HeadingSecondary";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
const AboutVicePresident = () => {
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
                <Image className="w-full" src={VicePresident} alt="" />

                <p className="text-sm md:text-base leading-7 text-blackColor dark:text-blackColor-dark">
                  <b>Mr. Thejaswi Aradhya J K</b>
                </p>
                <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                  {/* Founder Trustee & President - Shree Aradhya Educational & Charitable Trust,<br/>     */}
                  Vice President - Shree Aradhya Educational & Charitable Trust.
                </p>
              </div>
            </TiltWrapper>
          </div>
          {/* about right */}
          <div data-aos="fade-up" className="2xl:ml-65px">
            {/* <SectionName>About Us</SectionName> */}
            <HeadingSecondary>Vice President&apos;s Message</HeadingSecondary>
            <p className="text-sm md:text-base leading-7 text-secondaryColor dark:text-secondaryColor-dark mb-25px">
              &quot;Education is the key to unlocking the world, a passport to
              freedom.&quot;
              <br />- Oprah Winfrey
            </p>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              As Vice President of the trust, Mr. Thejaswi Aradhya has been
              instrumental in strategic planning, policy development, and
              resource management, significantly enhancing the trust’s
              educational programs and expanding its outreach. His expertise in
              budget management and financial planning has strengthened the
              trust’s sustainability, ensuring the effective allocation of
              resources to maximize impact. His leadership in developing new
              revenue streams has further accelerated the trust’s goals,
              fostering continuous growth and improvement.
            </p>
            <br />
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              A visionary social entrepreneur, he is also the Founder-Director
              of an investment and real estate development firm dedicated to
              transforming underutilized areas into valuable, sustainable
              properties. His innovative approach to urban development has
              provided long-term benefits to both families and communities,
              emphasizing sustainability, quality of life, and economic growth.
            </p>
            <br />
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              Over three decades of experience, Mr. Thejaswi Aradhya has played
              a vital role in driving expansion, innovation, and profitability
              across various sectors. Dedicated to social causes, he actively
              collaborates with NGOs and humanitarian organizations, working to
              secure long-term educational resources and support for
              underprivileged communities. His unwavering commitment to
              education and community development continues to create lasting,
              positive change.
            </p>
            <br />
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

export default AboutVicePresident;
