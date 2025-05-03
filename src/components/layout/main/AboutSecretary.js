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
      <div className="m-3 p-3 md:mx-20 md:my-10 md:p-10 text-justify rounded-3xl shadow-lg bg-white" data-aos="fade-up">
      <HeadingSecondary>
            <span className="text-av relative ">
            Secretary&apos;s {" "}
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
              <div className="relative overflow-hidden z-0 flex flex-col items-center justify-center text-center">
              
                <Image className=" w-full md:mt-10" src={Secretary} alt="" />

                <p className="text-justify text-sm md:text-base text-avorange dark:text-secondaryColor-dark mt-10">
                &quot;At Agasthya Vidyanikethan, we prepare children not just for exams, but for life itself.&quot;
              </p>
              <div className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark text-justify my-3" >
              We believe learning should be clear, real, and lifelong. It&apos;s not just about scoring well in exams, but about building the ability to think independently, ask the right questions, and approach challenges with confidence. We encourage each child to explore through active learning while developing their self-confidence. Our education prepares students for life&apos;s challenges by providing them with essential knowledge, practical skills, and a clear sense of personal identity.
              </div>
              <div className=" ml-auto text-sm md:text-base text-av font-semibold">
              - Mrs. Nagarathna Aradhya
              </div>
              </div>
            </TiltWrapper>
          </div>
          {/* about right */}
          <div data-aos="fade-up" className="2xl:ml-65px">
            {/* <SectionName>About Us</SectionName> */}
            <div className="text-center text-2xl md:text-3xl md:mt-5 leading-7 text-avorange dark:text-blackColor-dark"> 
                  Mrs. Nagarathna Aradhya
            </div>
            <div className="text-center font-bold">
            <div className=" bg-av  px-5 py-3 m-2 rounded-full space-y-1 inline-block">
            <div className="text-sm md:text-md leading-none md:leading-none text-white dark:text-contentColor-dark text-center">
                  Secretary 
            </div>
            </div>
            </div>
            {/* <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              Mrs. Nagarathna K R, as the secretary of the trust, is the
              primordial energy actively focused on implementing the vision and
              mission of the trust objectives on the ground. She has been
              instrumental in leading a team of 100+ members and guiding them in
              shaping the young minds of Agasthya Vidyanikethan.
            </p> */}
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              Mrs. Nagarathna Aradhya as the secretary of the trust, is the primordial energy actively
              focused on implementing on the ground, the vision and mission of the trust to achieve
              its stated objectives. She has been instrumental in leading a team of 125+ members
              and guiding them in shaping the young minds of Agasthya Vidyanikethan.
            </p>
            <br />
            {/* <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              She has an excellent academic and professional track record,
              having served in both the corporate and academic worlds. As a
              Computer Science engineer, she has been instrumental in leveraging
              technology for efficient schooling. As the torchbearer, she leads
              her team by example, which is reflected in Agasthya
              Vidyanikethan&apos;s spectacular academic performance over the
              years.
            </p> */}
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              She has an amazing academic and professional track record, having served in both the
              corporate and academic worlds. As a Computer Science engineer herself, she has
              been instrumental in leveraging technology for an efficient schooling experience. As
              the torchbearer, she leads her team by example, which is reflected in the spectacular
              academic performance of Agasthya Vidyanikethan over the years.
            </p>
            <br />
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              As the secretary of the trust over the years, she has been instrumental in providing
              crucial administrative support, organizing meetings, preparing agendas, and ensuring
              all necessary documentation of the trust activities are in order. Beyond academics, she
              has been extremely effective in maintaining the minutes of meetings, financial records,
              legal documents, and other important correspondence. She has provided her valuable
              support to the chairperson of the trust, enabling and ensuring that their leadership has
              propelled Agasthya Vidyanikethan as the most sought-after educational institution in
              the vicinity.
            </p>
            <br />
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
              Under her able leadership, our children have been able to not only excel academically
              but also have won various awards, titles, and rewards in &apos;Prathibha Karanji&apos;, &apos;SOF
              Olympiad&apos;, and many other district, state, and national level competitions. She has also
              been awarded the &apos;SHIKSHA RATNA Award&apos; in the year 2022 for her excellent leadership
              qualities.
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
