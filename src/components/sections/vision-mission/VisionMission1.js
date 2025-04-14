import React from 'react';

const nepData = {
  school: "Agasthya Vidyaniketan",
  nep_alignment: [
    {
      title: "A Holistic Approach to Education",
      description:
        "At Agasthya Vidyaniketan, we have embraced the holistic approach outlined in NEP. We understand that education is not just about academic achievement but also about the overall development of your child. Our curriculum places equal emphasis on academic excellence, sports, arts, and extracurricular activities to ensure a well-rounded education."
    },
    {
      title: "Emphasis on Critical Thinking and Creativity",
      description:
        "NEP emphasizes critical thinking and problem-solving skills. Our teaching methodology is designed to encourage students to think critically, analyze information, and develop creative solutions to real-world challenges. We nurture their ability to question, reason, and innovate."
    },
    {
      title: "Quality Learning with Experienced Educators",
      description:
        "Our team of educators is well-qualified and experienced, aligning with NEP's focus on the importance of a quality teaching workforce. They are committed to providing students with the highest standards of education and fostering a love for learning."
    },
    {
      title: "Modern Facilities and Technology Integration",
      description:
        "Our school's infrastructure is equipped with modern facilities that support technology-enhanced learning, in line with NEP's emphasis on digital and online education. We provide an environment where students can access the latest technology resources to enhance their learning experience."
    },
    {
      title: "Multidisciplinary Learning",
      description:
        "NEP promotes multidisciplinary learning to encourage students to explore a variety of subjects and develop a broader understanding of the world. Our curriculum aligns with this approach, enabling students to choose subjects that cater to their interests and career aspirations."
    },
    {
      title: "Focus on Values and Ethical Education",
      description:
        "The policy places a strong emphasis on instilling values and ethics in students. At Agasthya Vidyaniketan, we share this commitment and ensure that values such as integrity, empathy, and responsibility are an integral part of the educational experience."
    },
    {
      title: "Active Parent-Teacher Partnership",
      description:
        "NEP recognizes the importance of parent-teacher collaboration. We actively involve parents in their child's educational journey, ensuring that the partnership is an essential part of the learning process. We value your insights and contributions to your child's development."
    },
    {
      title: "Inclusivity and Community Building",
      description:
        "We create a close-knit community within our school, celebrating diversity and fostering inclusivity, in line with NEP's values. We aim to create an environment where every student feels valued, safe, and respected."
    },
    {
      title: "Research-Oriented Learning",
      description:
        "NEP encourages research and innovation. Our school is committed to nurturing research-oriented learning, providing opportunities for students to engage in research projects and develop their analytical and investigative skills."
    },
    {
      title: "Career and Vocational Readiness",
      description:
        "The policy underscores the importance of preparing students for careers and vocational skills. Our curriculum offers a range of courses and activities that help students explore their interests and develop practical skills, aligning with NEP's vision of preparing students for life and work."
    }
  ],
  commitment_statement:
    "Agasthya Vidyaniketan is fully committed to implementing the features and principles outlined in NEP. We are dedicated to providing your child with a well-rounded education that prepares them for the demands of the 21st century, nurtures their creativity and critical thinking, and fosters their holistic development. Our alignment with NEP ensures that your child receives an education that is not just of the highest quality but also future-ready and in sync with the changing educational landscape."
};

const VisionMission1 = () => {
  return (
    <div className="px-4 py-2 max-w-4xl mx-auto">
      {nepData.nep_alignment.map((item, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-av mb-2">{item.title}</h2>
          <p className="text-base md:text-lg text-gray-700">{item.description}</p>
        </div>
      ))}

      <div className="mt-10">
        <p className="text-base md:text-lg text-gray-800 font-medium">
          {nepData.commitment_statement}
        </p>
      </div>
      <div className="w-200 h-2 bg-orange md:mt-12 mx-auto hidden md:block"></div>
    </div>
  );
};

export default VisionMission1;
