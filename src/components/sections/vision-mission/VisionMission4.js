import React from 'react';

  const lifelongSuccessData = [
    {
      title: "Lifelong Success",
      description:
        "At Agasthya Vidyaniketan, we understand that a child's journey through education is not just about academics; it's about shaping a well-rounded individual ready to conquer life's challenges. Our commitment to holistic development ensures that your child is prepared for a successful and fulfilling life, both academically and personally."
    },
    {
      title: "Nurturing Academic Excellence",
      description:
        "While academic achievement is essential, we go beyond rote learning. We foster critical thinking and problem-solving skills in our students. We encourage them to ask questions, explore ideas, and approach challenges with creativity and innovation. Our goal is to equip them with the intellectual tools they need to excel in an ever-evolving world."
    },
    {
      title: "Thriving in Sports, Arts, and Extracurricular Activities",
      description:
        "Education extends beyond the classroom. We offer a rich array of sports, arts, and extracurricular activities to help your child discover and develop their passions. Through these pursuits, they learn teamwork, discipline, time management, and the joy of self-expression."
    },
    {
      title: "Values and Leadership",
      description:
        "Our school places a strong emphasis on instilling values in our students. We believe that character is as important as knowledge. Your child will learn the values of integrity, empathy, and responsibility, which will guide them in their personal and professional lives. Moreover, we foster leadership qualities, empowering students to become confident and capable leaders in various aspects of life."
    },
    {
      title: "A Foundation for Lifelong Success",
      description:
        "Our holistic approach prepares your child for lifelong success. They leave Agasthya Vidyaniketan not only with academic excellence but also with the life skills, ethics, and mindset needed to excel in any field they choose. We believe in nurturing individuals who are not just academically competent but also well-rounded and resilient."
    }
  ];
  
  const conclusion =
    "Our goal is to cultivate a love for learning, a spirit of inquiry, and a strong character in your child. We aim to prepare them to face the complexities of the modern world with confidence and the ability to think critically and adapt. This is the essence of our commitment to holistic development.";
  
  const VisionMission4 = () => {
    return (
      <div className="px-4 py-2 max-w-4xl mx-auto">
        {lifelongSuccessData.map((item, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-av mb-2">{item.title}</h2>
            <p className="text-base md:text-lg text-gray-700">{item.description}</p>
          </div>
        ))}
        <div className="mt-10">
          <p className="text-base md:text-lg text-gray-800 font-medium">{conclusion}</p>
        </div>
      </div>
    );
  };
  
  export default VisionMission4;
  