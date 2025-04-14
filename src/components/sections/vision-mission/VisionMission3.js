import React from 'react';

  const qualityData = [
    {
      title: "Quality Learning",
      description:
        "At Agasthya Vidyaniketan, we take immense pride in our exceptional team of educators who serve as the bedrock of your child's educational journey. We believe that quality learning begins with quality educators, and that's precisely what you'll find within our distinguished faculty."
    },
    {
      title: "Dedicated Expertise",
      description:
        "Our educators are seasoned professionals, possessing a wealth of experience in their respective fields. They are not just teachers; they are mentors, dedicated to nurturing young minds and facilitating intellectual growth. Their commitment to excellence sets the stage for a dynamic learning environment."
    },
    {
      title: "Academic Excellence",
      description:
        "With a deep-rooted passion for imparting knowledge, our educators ensure that the highest standards of academic excellence are met. They guide your child in their educational pursuits, promoting critical thinking, problem-solving, and a love for learning."
    },
    {
      title: "Innovative Pedagogy",
      description:
        "In an ever-evolving educational landscape, our educators remain at the forefront of innovative pedagogical practices. They adapt to modern teaching methods, harnessing technology and creative approaches to make learning engaging, relevant, and inspiring."
    },
    {
      title: "Personalized Support",
      description:
        "Each child is unique, and our educators understand this implicitly. They provide personalized support and guidance, recognizing and nurturing the individual strengths and needs of every student. Your child will receive the attention and encouragement required to reach their full potential."
    },
    {
      title: "A Lifelong Impact",
      description:
        "The lessons taught by our experienced educators extend far beyond the classroom. They instill values, ignite curiosity, and nurture a lifelong passion for knowledge. Your child will not only be academically enriched but also empowered with skills and virtues that will serve them throughout life."
    }
  ];
  
  const conclusion =
    "Our team of seasoned educators embodies the spirit of commitment, excellence, and a dedication to the craft of education. With them, you can be assured that your child's learning journey will be guided by knowledge, experience, and a profound desire for quality education.";
  
  const VisionMission3 = () => {
    return (
      <div className="px-4 py-2 max-w-4xl mx-auto">
        {qualityData.map((item, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-av mb-2">{item.title}</h2>
            <p className="text-base md:text-lg text-gray-700">{item.description}</p>
          </div>
        ))}
        <div className="mt-10">
          <p className="text-base md:text-lg text-gray-800 font-medium">{conclusion}</p>
        </div>
        <div className="w-200 h-2 bg-orange md:mt-12 mx-auto hidden md:block"></div>
      </div>
    );
  };
  
  export default VisionMission3;
  