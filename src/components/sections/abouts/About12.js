import Image from "next/image";


import HeadingSecondary from "@/components/shared/headings/HeadingSecondary";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
const About12 = () => {
  return (
    <section>
      <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px">
        <div className="gap-30px">
          {/* about left */}
          {/* <div data-aos="fade-up">
            <TiltWrapper>
              <div className="tilt relative overflow-hidden z-0">
                <Image
                  className="absolute left-0 top-0 lg:top-4 right-0 mx-auto -z-1"
                  src={aboutImage8}
                  alt=""
                />
                <Image className="w-full" src={aboutImage14} alt="" />
              </div>
            </TiltWrapper>
          </div> */}
          {/* about right */}
          <div data-aos="fade-up" className="2xl:ml-65px">
            {/* <SectionName>About Us</SectionName> */}
            <HeadingSecondary>
                About{" "}
                <span className="relative after:w-full after:h-[6px] after:bg-secondaryColor z-0 after:absolute after:left-0 after:bottom-3 md:after:bottom-5 md:after:-z-1">
                    NEP
                </span>{" "}
              </HeadingSecondary>
                        <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-25px">
            In many ways NEP system is revolutionary difference from Colonial Macaulay education system.
            </p>
            {/* <p className="flex items-center gap-x-4 text-lg text-blackColor dark:text-blackColor-dark mb-25px">
              <Image loading="lazy" src={aboutImage15} alt="about" />
              <span>
                <b>10+ Years ExperienceIn</b> this game, Means Product Designing
              </span>
            </p> */}
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
            We all have got Independence in 1947 undoubtedly but much of our education still has the remnants of the colonial’s past. 
            No doubt many changes have happened in Education and India as a Country has transformed with the same kind of education system. 
            We plan to be the third largest economy by 2025, it could not have happened, so definitely we have made those changes but 
            new National Education Policy which has been in work since long time & definitely having made public after a public 
            consultation in 2020 and hence its called the NEP 2020. It is a wonderful draft which lays out what really Educational 
            institute all across the Country should be doing to ensure that our Education system comes out of the colonial past 
            and atleast the next generation of students get to know what really India is or Bharat is all about.
            </p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                Agasthya Vidyanikethan has emerged as one of the Best school in Bangalore, Nagarbhavi region. 
                Started in the year 2012, it is one of the top school in the vicinity since it is one of the very few schools 
                which is headed and micro-managed by a profound scholar. Mr. Manjunath Aradhya has been in the field of higher education 
                and particularly engineering education for the past 17 years
            </p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
            The New National Education Policy, which was released in 2019, is an excellent policy. 
            The ecosystem that we have all grown up in or had access to differs from the Digital India of the twenty-first century - 
            an AI-enabled environment that will undoubtedly be revolutionary in comparison to what we have experienced.
            </p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                NEP focuses on ensuring universal access to Education at all levels with learning system of Holistic, Integrated, Enjoyable, and Engaging.
            </p>
            <br/>
            <HeadingPrimary>Other Key Areas of Focus</HeadingPrimary> 
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                1. Professional Education
            </p>   
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                2. Adult Education & Life long learning
            </p>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                3. Promotion of Indian languages, Arts and Culture
            </p>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                4. Technology Use and Integration
            </p>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                5. Online and Digital Education
            </p>   
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">Education Policy lays particular emphasis on the development of the creative potential of each individual. 
                It is based on the principle that education must develop not only cognitive capacities - both the ‘foundational capacities ’of literacy and numeracy and ‘higher-order’ cognitive capacities, 
                such as critical thinking and problem solving – but also social, ethical, and emotional capacities and dispositions.
            </p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                The rich heritage of ancient and eternal Indian knowledge and thought has been a guiding light for this Policy.
            </p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                The pursuit of knowledge (Jnan), wisdom (Pragyaa), and truth (Satya) was always considered in Indian thought and philosophy as the highest human goal.
            </p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                The aim of education in ancient India was not just the acquisition of knowledge as preparation for life in this world, or life beyond schooling, but for the complete realization and liberation of the self.
            </p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">World-class institutions of ancient India such as Takshashila, Nalanda,Vikramshila, Vallabhi, 
                set the highest standards of multidisciplinary teaching and research and hosted scholars and students from across backgrounds and countries.
            </p>
                <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">The Indian education system produced great scholars such as Charaka, Susruta, Aryabhata, Varahamihira, Bhaskaracharya, Brahmagupta, Chanakya, Chakrapani Datta, Madhava, Panini, Patanjali, Nagarjuna, Gautama, 
                Pingala, Sankardev, Maitreyi, Gargi and Thiruvalluvar, among numerous others, who made seminal contributions to world knowledge in diverse fields such as mathematics, astronomy, metallurgy, medical science and surgery, civil engineering, architecture, shipbuilding and navigation, yoga, fine arts, chess, and more.
            </p>
                <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">The Indian education system produced great scholars such as Charaka, Susruta, Aryabhata, Varahamihira, Bhaskaracharya, Brahmagupta, Chanakya, Chakrapani Datta, Madhava, Panini, Patanjali, Nagarjuna, Gautama, 
                Pingala, Sankardev, Maitreyi, Gargi and Thiruvalluvar, among numerous others, who made seminal contributions to world knowledge in diverse fields such as mathematics, astronomy, metallurgy, medical science and surgery, civil engineering, architecture, shipbuilding and navigation, yoga, fine arts, chess, and more.
            </p>
            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">These rich legacies to world heritage must not only be nurtured and preserved for posterity but also researched, enhanced, and put to new uses through our education system.</p>
            <br/>
            <h2 className="text-2xl font-bold">Below are a few of the NEP-listed activities. For our students to be future-ready while still adhering to our culture, we have created Dinacharya.
            </h2>
            <br/>
            <HeadingSecondary className="!text-center">NEP in Agasthya Vidyanikethan</HeadingSecondary>
<h2 className="text-center text-size-20 md:text-[32px] lg:text-lg 2xl:text-[32px] leading-6 md:leading-9 lg:leading-8 2xl:leading-9 font-semibold text-black">
    Developing Students' Capabilities,{" "}
    <span className="text-secondaryColor">To create Solutions for Tomorrow's Challenges</span>
</h2>

            <br/>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">These rich legacies to world heritage must not only be nurtured and preserved for posterity but also researched, enhanced, and put to new uses through our education system.</p>
            <br/>
            {/* <p className="text-size-20 md:text-[32px] lg:text-lg 2xl:text-[32px] leading-6 md:leading-9 lg:leading-8 2xl:leading-9 font-semibold text-black">
            Developing Students' Capabilities,{" "}
                      <span className="text-secondaryColor">To create Solutions for Tomorrow's Challenges</span></p>
             */}
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

export default About12;