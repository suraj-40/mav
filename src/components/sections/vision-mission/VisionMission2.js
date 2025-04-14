import React from 'react';

  const technologyData = [
    {
      title: "Technology-Enhanced Learning",
      description:
        "At Agasthya Vidyaniketan, we are resolute in our commitment to providing your child with an unparalleled educational experience, deeply rooted in modernity and technology. Our state-of-the-art facilities and technology-enhanced learning environments are meticulously designed to foster excellence and innovation."
    },
    {
      title: "Cutting-Edge Infrastructure",
      description:
        "Our school boasts world-class infrastructure, equipped with the latest amenities to support your child's academic and extracurricular pursuits. From spacious, well-equipped classrooms to advanced laboratories, our facilities are a testament to our dedication to providing the very best for your child's educational journey."
    },
    {
      title: "Technology at the Forefront",
      description:
        "We believe that embracing technology is key to empowering your child with the skills and knowledge needed for the 21st century. Our school is at the forefront of integrating technology into education, creating an environment where your child learns to navigate the digital landscape with confidence."
    },
    {
      title: "Interactive Learning",
      description:
        "Our classrooms are dynamic spaces where technology merges seamlessly with traditional teaching. Interactive whiteboards, multimedia resources, and online platforms enrich the learning experience, making it engaging, interactive, and highly effective."
    },
    {
      title: "Digital Resources",
      description:
        "Your child will have access to an extensive digital library and resources, ensuring that they have information at their fingertips to support their research and academic growth. These digital resources empower them to become independent and resourceful learners."
    },
    {
      title: "Prepared for the Future",
      description:
        "We recognize that the world is rapidly evolving, and we are committed to preparing your child for an ever-changing landscape. Our technology-enhanced learning approach equips them with the skills to adapt, innovate, and excel in an increasingly digital world."
    },
    {
      title: "Secure and Connected",
      description:
        "The safety and security of our students are paramount. Our technology infrastructure is not only robust but also meticulously secured, providing a safe and conducive environment for learning."
    }
  ];
  
  const conclusion =
    "Your child's educational journey at Agasthya Vidyaniketan is characterized by a modern and technology-driven approach that ensures they are well-prepared for the future. We believe that providing access to modern facilities and technology-enhanced learning is an investment in your child's success and a testament to our commitment to their growth and development.";
  
  const VisionMission2 = () => {
    return (
      <div data-aos="fade-up" className="px-4 py-2 max-w-4xl mx-auto">
        {technologyData.map((item, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-av mb-2">{item.title}</h2>
            <p className="text-base md:text-lg text-gray-700">{item.description}</p>
          </div>
        ))}
        <div className="mt-10">
          <p className="text-base md:text-lg text-gray-800 font-medium">{conclusion}</p>
        </div>
        <div className="w-200 h-2 bg-avorange md:mt-12 mx-auto hidden md:block"></div>
      </div>
    );
  };
  
  export default VisionMission2;
  