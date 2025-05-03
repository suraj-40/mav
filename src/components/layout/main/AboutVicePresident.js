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
      <div className="m-3 p-3 md:mx-20 md:my-10 md:p-10 text-justify rounded-3xl shadow-lg bg-white" data-aos="fade-up">
      <HeadingSecondary>
            <span className="text-av relative ">
            Vice Pre
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-av"></span>
            </span>
            <span className="text-avorange relative ">
              sident&apos;s Profile
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-av via-avorange  to-avorange"></span>
            </span>
      </HeadingSecondary>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* about left */}
          <div data-aos="fade-up">
            <TiltWrapper>
              <div className="relative overflow-hidden z-0 flex flex-col items-center justify-center text-center">
                
                <Image className="w-full md:mt-10" src={VicePresident} alt="" />

                <p className="text-justify text-sm md:text-base text-avorange dark:text-secondaryColor-dark mt-10">
                  &quot;Every child&apos;s future is the heart of our mission at Agasthya Vidyanikethan.&quot;
                </p>
                <div className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark text-justify my-3" >
                A great school doesn&apos;t just teach — it inspires, encourages, and builds a path for lifelong growth. At Agasthya Vidyanikethan, we have created an environment where learning deepens each day, supported by thoughtful planning and the right resources. Our vision is simple yet powerful: every child deserves an education that prepares them not only for exams but for life. Here, we place every student&apos;s future at the center of our efforts, ensuring they leave our care not just smarter, but stronger, more capable, and ready for tomorrow.
              </div>
                <div className=" ml-auto text-sm md:text-base text-av font-semibold">
                  - Mr. Thejaswi Aradhya J K
                </div>
              </div>
            </TiltWrapper>
          </div>
          {/* about right */}
          <div data-aos="fade-up" className="2xl:ml-65px">
            {/* <SectionName>About Us</SectionName> */}
            <div className="text-center text-2xl md:text-3xl md:mt-5 leading-7 text-avorange dark:text-blackColor-dark"> 
                Mr. Thejaswi Aradhya J K
            </div>
            <div className="text-center font-bold">
            <div className=" bg-av  px-5 py-3 m-2 rounded-full space-y-1 inline-block">
            <div className="text-sm md:text-md leading-none md:leading-none text-white dark:text-contentColor-dark text-center">
                Vice President
            </div>
            </div>
            </div>
            {/* <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              As Vice President of the trust, Mr. Thejaswi Aradhya has been
              instrumental in strategic planning, policy development, and
              resource management, significantly enhancing the trust’s
              educational programs and expanding its outreach. His expertise in
              budget management and financial planning has strengthened the
              trust’s sustainability, ensuring the effective allocation of
              resources to maximize impact. His leadership in developing new
              revenue streams has further accelerated the trust’s goals,
              fostering continuous growth and improvement.
            </p> */}
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
            As the Vice President of the trust, Mr. Thejaswi Aradhya&apos;s strategic planning & policy
            development skills have significantly enhanced the trust&apos;s educational offerings &
            expanded its reach. His adept resource management skills align with the trust&apos;s
            objectives to maintain high educational standards & maximize the impact of its
            programs.
            </p>
            <br />
            {/* <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              A visionary social entrepreneur, he is also the Founder-Director
              of an investment and real estate development firm dedicated to
              transforming underutilized areas into valuable, sustainable
              properties. His innovative approach to urban development has
              provided long-term benefits to both families and communities,
              emphasizing sustainability, quality of life, and economic growth.
            </p> */}
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
            Mr. Thejaswi Aradhya also excels in budget management, contributing positively to
            the trust&apos;s financial health & accountability. His leadership in developing new
            revenue streams has accelerated the manifestation of the trust&apos;s goals. This effort of
            his not only supports ongoing trust activities, but also promotes continuous
            improvement & effectiveness, ensuring that the trust remains a dynamic force in
            education and community development.
            </p>
            <br />
            {/* <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              Over three decades of experience, Mr. Thejaswi Aradhya has played
              a vital role in driving expansion, innovation, and profitability
              across various sectors. Dedicated to social causes, he actively
              collaborates with NGOs and humanitarian organizations, working to
              secure long-term educational resources and support for
              underprivileged communities. His unwavering commitment to
              education and community development continues to create lasting,
              positive change.
            </p> */}
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              He is a visionary social entrepreneur, and also serves as the Founder-Director of an
              investment & real estate development firm dedicated to transforming underutilized
              areas into valuable, sustainable properties. His innovative approach towards
              transforming underdeveloped areas into valuable assets has offered long-term
              benefits to both individual families & communities alike. With over three decades of
              experience, Mr. Thejaswi Aradhya has been instrumental in driving expansion,
              innovation, profitability, & community development, focusing on sustainability and
              enhancing the quality of life.
            </p>
            <br />
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              Dedicated to serving underprivileged communities,
              Mr. Thejaswi Aradhya is actively involved with various
              NGOs & organizations that serve the needy & uphold
              humanitarian values. His commitment is evident in his
              efforts to secure long-term educational resource &
              support improvements for those in need, thus
              fostering substantial & lasting positive change.
            </p>
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
