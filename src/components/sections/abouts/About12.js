import React from 'react';
import HeadingSecondary from "@/components/shared/headings/HeadingSecondary";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";

const focusAreas = [
  { title: "Professional Education", icon: "🎓" },
  { title: "Adult Education & Lifelong Learning", icon: "📚" },
  { title: "Promotion of Indian languages, Arts, and Culture", icon: "🎨" },
  { title: "Technology Use and Integration", icon: "💻" },
  { title: "Online and Digital Education", icon: "🌐" },
];

const About12 = () => {
  return (
    <main className="w-full flex flex-col items-center bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#FF5722]/90 to-orange-400/80 py-12 md:py-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">National Education Policy (NEP) 2020</h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-medium">
          Transforming education for a brighter, holistic, and future-ready India
        </p>
      </section>

      {/* Main Content */}
      <section className="flex flex-col gap-12 w-full max-w-5xl px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div data-aos="fade-up" className="2xl:ml-16">
          <HeadingSecondary>
            About <span className="after:w-full after:h-1.5 after:bg-secondaryColor z-0 after:absolute after:left-0 after:bottom-1 md:after:bottom-2 md:after:-z-1">NEP</span>
          </HeadingSecondary>

          {/* Introduction to NEP */}
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-6">
            In many ways, the NEP system is a revolutionary difference from the Colonial Macaulay education system.
          </p>
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-6">
            We all have got Independence in 1947 undoubtedly, but much of our education still has the remnants of the colonial past. No doubt many changes have happened in Education, and India as a Country has transformed with the same kind of education system. We plan to be the third largest economy by 2025, it could not have happened, so definitely we have made those changes but the new National Education Policy, which has been in work since long time & definitely having made public after a public consultation in 2020 and hence its called the NEP 2020. It is a wonderful draft which lays out what really Educational institutes all across the Country should be doing to ensure that our Education system comes out of the colonial past and at least the next generation of students get to know what really India is or Bharat is all about.
          </p>

          {/* About Agasthya Vidyanikethan */}
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-6">
            Agasthya Vidyanikethan has emerged as one of the best schools in Bangalore, Nagarbhavi region. Started in 2012, it is one of the top schools in the vicinity, headed and micro-managed by a profound scholar, Mr. Manjunath Aradhya, who has been in the field of higher education for over 17 years.
          </p>

          {/* NEP Overview */}
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-4">
            The New National Education Policy, released in 2019, is an excellent policy tailored for the Digital India of the 21st century.
          </p>
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-8">
            NEP focuses on ensuring universal access to education at all levels with a holistic, integrated, enjoyable, and engaging learning system.
          </p>

          {/* Key Focus Areas as Cards */}
          <HeadingPrimary>Other Key Areas of Focus</HeadingPrimary>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {focusAreas.map((area, idx) => (
              <div key={idx} className="flex flex-col items-center bg-whitegrey1 dark:bg-gray-800 rounded-xl shadow-md p-6 text-center border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:shadow-lg">
                <span className="text-3xl mb-2">{area.icon}</span>
                <span className="font-semibold text-contentColor dark:text-contentColor-dark text-base md:text-lg">{area.title}</span>
              </div>
            ))}
          </div>

          {/* Educational Philosophy */}
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-6">
            The Education Policy emphasizes the creative potential of each individual, balancing cognitive capacities, critical thinking, and problem-solving with social, ethical, and emotional growth.
          </p>
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-6">
            The rich heritage of ancient and eternal Indian knowledge and thought has been a guiding light for this policy.
          </p>
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-6">
            The pursuit of knowledge (Jnan), wisdom (Pragyaa), and truth (Satya) was always considered in Indian thought and philosophy as the highest human goal.
          </p>
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-6">
            The aim of education in ancient India was not just the acquisition of knowledge as preparation for life in this world, or life beyond schooling, but for the complete realization and liberation of the self.
          </p>

          {/* Legacy of Indian Education */}
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-6">
            Ancient institutions like Takshashila, Nalanda, and Vikramshila set the highest standards of multidisciplinary teaching, attracting scholars worldwide.
          </p>
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-8">
            India has produced great scholars such as Charaka, Aryabhata, Patanjali, and many others, making seminal contributions across fields like mathematics, astronomy, metallurgy, and medicine.
          </p>

          {/* Preservation of Heritage */}
          <p className="text-base md:text-lg leading-7 md:leading-8 text-contentColor dark:text-contentColor-dark mb-8">
            These rich legacies must be nurtured, preserved, and integrated into modern education, ensuring their relevance and application in the future.
          </p>

          {/* NEP at Agasthya Vidyanikethan */}
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-black dark:text-white">
            NEP Activities at Agasthya Vidyanikethan
          </h2>
          <p className="text-center text-sm md:text-2xl text-black dark:text-white leading-snug mb-8">
            Developing Students Capabilities,{' '}
            <span className="text-secondaryColor">
              To Create Solutions for Tomorrow&apos;s Challenges
            </span>
          </p>

          {/* Highlighted CTA/Quote */}
          <div className="bg-avorange/10 border-l-4 border-avorange rounded-xl p-6 text-lg md:text-xl font-semibold text-avorange shadow-sm text-center max-w-2xl mx-auto">
            &quot;Empowering every learner to thrive in a changing world through NEP 2020.&quot;
          </div>
        </div>
      </section>
    </main>
  );
};

export default About12;
