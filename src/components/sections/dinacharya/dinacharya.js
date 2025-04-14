import React from "react";
import Image from "next/image";
import dinacharyaimg1 from "@/assets/images/dinacharya/Asset 10.png";
import dinacharyaimg2 from "@/assets/images/dinacharya/Asset 11.png";
import dinacharyaimg3 from "@/assets/images/dinacharya/Asset 12.png";
import dinacharyaimg4 from "@/assets/images/dinacharya/Asset 13.png";

const Dinacharya = ({ image, alt, timelineData, imagePosition = "left" }) => {
  return (
    <div data-aos="fade-up" className="bg-gray-200 rounded-lg p-6 mb-6 relative rounded-xl shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {imagePosition === "left" && (
          <div className="md:col-span-1  relative group rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image src={image} alt={alt} className="rounded-xl w-[350px] h-[180px] object-cover mx-auto   transform group-hover:scale-105 transition-transform duration-300" />
          </div>
        )}

        <div className="md:col-span-2 text-center font-bold">
          <div className="timeline-container flex flex-col justify-center items-around">
            {timelineData.map((item, index) => (
              <div key={index} className="flex items-center justify-around mb-8">
                {item.map((block, i) => (
                  <div key={i}>
                    <div className="text-sm text-avorange font-bold">{block.time}</div>
                    <div className={`md:w-[200px] w-[150px] p-2 text-white rounded-xl ${block.bgClass}`}>{block.label}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {imagePosition === "right" && (
          <div className="md:col-span-1 relative group rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image src={image} alt={alt} className="rounded-xl w-[350px] h-[180px] object-cover mx-auto transform group-hover:scale-105 transition-transform duration-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export const SectionData = [
  {
    image: dinacharyaimg1,
    alt: "Students in assembly",
    imagePosition: "left",
    timelineData: [
      [
        { time: "8:45 AM to 9:00 AM", label: "GURU VANDANA", bgClass: "bg-avorange" },
        { time: "9:00 AM to 9:40 AM", label: "PERIOD 1", bgClass: "bg-av" },
      ],
      [
        { time: "9:40 AM to 10:20 AM", label: "PERIOD 2", bgClass: "bg-av" },
        { time: "10:20 AM to 10:40 AM", label: "BREAKFAST", bgClass: "bg-avorange" },
      ]
    ]
  },
  {
    image: dinacharyaimg2,
    alt: "Students during lunch",
    imagePosition: "right",
    timelineData: [
      [
        { time: "10:40 AM to 11:20 AM", label: "PERIOD 3", bgClass: "bg-av" },
        { time: "11:20 AM to 12:00 PM", label: "PERIOD 4", bgClass: "bg-av" },
      ],
      [
        { time: "12:00 PM to 12:40 PM", label: "PERIOD 5", bgClass: "bg-av" },
        { time: "12:40 to 1:05 PM", label: "LUNCH BREAK", bgClass: "bg-avorange" },
      ]
    ]
  },
  {
    image: dinacharyaimg3,
    alt: "Students in classroom",
    imagePosition: "left",
    timelineData: [
      [
        { time: "1:05 PM to 1:45 PM", label: "PERIOD 6", bgClass: "bg-av" },
        { time: "1:45 PM to 2:25 PM", label: "PERIOD 7", bgClass: "bg-av" },
      ],
      [
        { time: "2:25 PM to 3:05 PM", label: "PERIOD 8", bgClass: "bg-av" },
        { time: "3:05 PM to 3:15 PM", label: "DIARY TIME", bgClass: "bg-av" },
      ]      
    ]
  },
  {
    image: dinacharyaimg4,
    alt: "Students in classroom",
    imagePosition: "right",
    timelineData: [
      [
          { time: "3:15 PM", label: "EXIT TIME", bgClass: "bg-avorange" }
      ]
    ]
  }
];

export default Dinacharya;



// import React from "react";
// import Image from "next/image";
// import dinacharyaimg1 from "@/assets/images/dinacharya/Asset 10.png";
// import dinacharyaimg2 from "@/assets/images/dinacharya/Asset 11.png";
// import dinacharyaimg3 from "@/assets/images/dinacharya/Asset 12.png";
// import dinacharyaimg4 from "@/assets/images/dinacharya/Asset 13.png";

// export default function Dinacharya() {
//   return (
//     <div className="relative bg-gray-50 min-h-screen w-full overflow-hidden">
//       {/* Background Decorative */}
//       <div className="absolute top-0 right-0 w-16 h-16 bg-avavorange z-0"></div>
//       <div className="absolute top-0 right-16 w-16 h-16 bg-av z-0"></div>
//       <div className="absolute bottom-0 left-0 w-16 h-16 bg-av z-0"></div>
//       <div className="absolute bottom-0 left-16 w-16 h-16 bg-avavorange z-0"></div>
//       <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-gray-200 -z-10"></div>

//       <div className="container mx-auto px-4 py-8 relative z-10">
//         {/* Header */}
//         <header className="mb-8">
//           <h1 className="text-avavorange font-bold text-3xl text-center">Agasthya Vidyanikethan</h1>
//           <h2 className="text-av text-5xl font-bold text-center">Dinacharya</h2>
//           <div className="w-200 h-2 bg-avavorange mt-2 mx-auto"></div>
//         </header>

//         {/* First Section */}
//         <div className="bg-gray-200 rounded-xl p-6 mb-6 shadow-xl">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="md:col-span-1">
//               <Image src={dinacharyaimg1} alt="Students in assembly" className="rounded-lg w-[320px] h-[180px] object-cover" />
//             </div>
//             <div className="md:col-span-2 text-center font-bold">
//               <div className="flex flex-col justify-center items-around">
//                 <div className="flex items-center justify-around mb-8">
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">8:45 AM to 9:00 AM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-avavorange text-white rounded-xl">GURU VANDANA</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">9:00 AM to 9:40 AM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-av text-white rounded-xl">PERIOD 1</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-around mb-8">
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">9:40 AM to 10:20 AM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-av text-white rounded-xl">PERIOD 2</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">10:20 AM to 10:40 AM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-avavorange text-white rounded-xl">BREAKFAST</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Second Section */}
//         <div className="bg-gray-200 rounded-xl p-6 mb-6 shadow-xl">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="md:col-span-1">
//               <Image src={dinacharyaimg2} alt="Students during lunch" className="rounded-lg w-[320px] h-[180px] object-cover" />
//             </div>
//             <div className="md:col-span-2 text-center font-bold">
//               <div className="flex flex-col justify-center items-around">
//                 <div className="flex items-center justify-around mb-8">
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">10:40 AM to 11:20 AM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-av text-white rounded-xl">PERIOD 3</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">11:20 AM to 12:00 PM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-av text-white rounded-xl">PERIOD 4</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-around mb-8">
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">12:00 PM to 12:40 PM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-av text-white rounded-xl">PERIOD 5</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">12:40 PM to 1:05 PM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-avavorange text-white rounded-xl">LUNCH BREAK</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Third Section */}
//         <div className="bg-gray-200 rounded-xl p-6 mb-6 shadow-xl">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="md:col-span-1">
//               <Image src={dinacharyaimg3} alt="Students in classroom" className="rounded-lg w-[320px] h-[180px] object-cover" />
//             </div>
//             <div className="md:col-span-2 text-center font-bold">
//               <div className="flex flex-col justify-center items-around">
//                 <div className="flex items-center justify-around mb-8">
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">1:05 PM to 1:45 PM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-av text-white rounded-xl">PERIOD 6</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">1:45 PM to 2:25 PM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-av text-white rounded-xl">PERIOD 7</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-around mb-8">
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">2:25 PM to 3:05 PM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-av text-white rounded-xl">PERIOD 8</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">3:05 PM to 3:15 PM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-av text-white rounded-xl">DIARY TIME</div>
//                   </div>
//                 </div>
//                 <div className="flex justify-center items-center">
//                   <div>
//                     <div className="text-sm text-avavorange font-bold">3:15 PM</div>
//                     <div className="md:w-[200px] w-[150px] p-2 bg-avavorange text-white rounded-xl">SCHOOL EXIT TIME</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="absolute bottom-4 right-4">
//             <Image src={dinacharyaimg4} alt="Students exiting school" width={150} height={150} className="rounded-lg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import React from "react";
// import Image from "next/image"
// import Link from "next/link"
// import dinacharyaimg1 from "@/assets/images/dinacharya/Asset 10.png"
// import dinacharyaimg2 from "@/assets/images/dinacharya/Asset 11.png"
// import dinacharyaimg3 from "@/assets/images/dinacharya/Asset 12.png"
// import dinacharyaimg4 from "@/assets/images/dinacharya/Asset 13.png"


// export default function Dinacharya() {
//   return (
//     <div className="relative bg-gray-50 min-h-screen w-full overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 right-0 w-16 h-16 bg-avavorange z-0"></div>
//       <div className="absolute top-0 right-16 w-16 h-16 bg-av z-0"></div>
//       <div className="absolute bottom-0 left-0 w-16 h-16 bg-av z-0"></div>
//       <div className="absolute bottom-0 left-16 w-16 h-16 bg-avavorange z-0"></div>

//       {/* Diagonal background shape */}
//       <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-gray-200 -z-10"></div>

//       <div className="container mx-auto px-4 py-8 relative z-10">
//         {/* Header */}
//         <header className="mb-8">
//           <h1 className="text-avavorange font-bold text-3xl font-bold text-center">Agasthya Vidyanikethan</h1>
//           <h2 className="text-av text-5xl font-bold text-center">Dinacharya</h2>
//           <div className="w-200 h-2 bg-avavorange mt-2 mx-auto"></div>
//         </header>

//         {/* First section */}
//         <div className="bg-gray-200 rounded-lg p-6 mb-6 relative rounded-xl shadow-xl">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* <div className="flex flex-row justify-between items-center"> */}
//           <div className="md:col-span-1">
//           <Image
//               src={dinacharyaimg1}
//               alt="Students in assembly"
//               className="rounded-lg w-[320px] h-[180px] object-cover"
//             />
//           </div>
//             <div className="md:col-span-2 text-center font-bold">
//               <div className="timeline-container flex flex-col justify-center items-around ">
//                 {/* Timeline item 1 */}
//                 <div className="flex items-center justify-around  mb-8">
//                   <div>
//                   <div className="text-sm text-avavorange font-bold">8:45 AM to 9:00 AM</div>
//                   <div className="md:w-[200px] w-[150px] p-2 bg-avavorange text-white rounded-xl">GURU VANDANA</div>
//                   </div>
//                   <div>
//                   <div className="text-sm text-avavorange font-bold">9:00 AM to 9:40 AM</div>
//                   <div className="md:w-[200px] w-[150px] p-2 bg-av text-white rounded-xl">PERIOD 1</div>
//                   </div>
//                 </div>

//                 {/* Timeline item 2 */}
//                 <div className="flex items-center justify-around mb-8">
//                   <div>
//                   <div className="text-sm text-avavorange font-bold">9:40 AM to 10:20 AM</div>
//                   <div className="md:w-[200px] w-[150px] p-2 bg-av text-white rounded-xl">PERIOD 2</div>
//                   </div>
//                   <div>
//                   <div className="text-sm text-avavorange font-bold">10:20 AM to 10:40 AM</div>
//                   <div className="md:w-[200px] w-[150px] p-2 bg-avavorange text-white rounded-xl">BREAKFAST</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Second section */}
//         <div className="bg-gray-200 rounded-lg p-6 mb-6 relative">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="md:col-span-2">
//               <div className="timeline-container">
//                 {/* Timeline item 3 */}
//                 <div className="flex items-center mb-8">
//                   <div className="text-sm text-avavorange font-bold">10:40 AM to 11:20 AM</div>
//                   <div className="mx-2 px-4 py-2 bg-av text-white rounded-md">PERIOD 3</div>
//                   <div className="timeline-dot"></div>
//                   <div className="timeline-line"></div>
//                   <div className="timeline-dot"></div>
//                   <div className="mx-2 px-4 py-2 bg-av text-white rounded-md">PERIOD 4</div>
//                   <div className="text-sm text-avavorange font-bold">11:20 AM to 12:00 PM</div>
//                 </div>

//                 {/* Timeline connector */}
//                 <div className="timeline-connector ml-64 h-12"></div>
//                 <div className="timeline-dot ml-64"></div>

//                 {/* Timeline item 4 */}
//                 <div className="flex items-center mb-8">
//                   <div className="text-sm text-avavorange font-bold">12:00 PM to 12:40 PM</div>
//                   <div className="mx-2 px-4 py-2 bg-av text-white rounded-md">PERIOD 5</div>
//                   <div className="timeline-dot"></div>
//                   <div className="timeline-line"></div>
//                   <div className="timeline-dot"></div>
//                   <div className="mx-2 px-4 py-2 bg-avavorange text-white rounded-md">LUNCH BREAK</div>
//                   <div className="text-sm text-avavorange font-bold">12:40 to 1:05 PM</div>
//                 </div>
//               </div>
//             </div>
//             <div className="md:col-span-1">
//               <Image
//                 src={dinacharyaimg2}
//                 alt="Students during lunch"
//                 width={300}
//                 height={300}
//                 className="rounded-lg"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Third section */}
//         <div className="bg-gray-200 rounded-lg p-6 mb-6 relative">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="md:col-span-1">
//               <Image
//                 src={dinacharyaimg3}
//                 alt="Students in classroom"
//                 width={300}
//                 height={300}
//                 className="rounded-lg"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <div className="timeline-container">
//                 {/* Timeline item 5 */}
//                 <div className="flex items-center mb-8">
//                   <div className="text-sm text-avavorange font-bold">1:05 PM to 1:45 PM</div>
//                   <div className="mx-2 px-4 py-2 bg-av text-white rounded-md">PERIOD 6</div>
//                   <div className="timeline-dot"></div>
//                   <div className="timeline-line"></div>
//                   <div className="timeline-dot"></div>
//                   <div className="mx-2 px-4 py-2 bg-av text-white rounded-md">PERIOD 7</div>
//                   <div className="text-sm text-avavorange font-bold">1:45 PM to 2:25 PM</div>
//                 </div>

//                 {/* Timeline connector */}
//                 <div className="timeline-connector ml-64 h-12"></div>
//                 <div className="timeline-dot ml-64"></div>

//                 {/* Timeline item 6 */}
//                 <div className="flex items-center mb-8">
//                   <div className="text-sm text-avavorange font-bold">2:25 PM to 3:05 PM</div>
//                   <div className="mx-2 px-4 py-2 bg-av text-white rounded-md">PERIOD 8</div>
//                   <div className="timeline-dot"></div>
//                   <div className="timeline-line"></div>
//                   <div className="timeline-dot"></div>
//                   <div className="mx-2 px-4 py-2 bg-av text-white rounded-md">DIARY TIME</div>
//                   <div className="text-sm text-avavorange font-bold">3:05 PM to 3:15 PM</div>
//                 </div>

//                 {/* Final exit time */}
//                 <div className="flex flex-col items-center ml-64">
//                   <div className="timeline-connector h-8"></div>
//                   <div className="text-sm text-avavorange font-bold">3:15 PM</div>
//                   <div className="px-4 py-2 bg-avavorange text-white rounded-md">SCHOOL EXIT TIME</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="absolute bottom-4 right-4">
//             <Image
//               src={dinacharyaimg4}
//               alt="Students exiting school"
//               width={150}
//               height={150}
//               className="rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }






// const Dinacharya = () => {
//   // Placeholder data for blog posts
//   const blogPosts = [
//     {
//       src: blogimg,
//       alt: "Blog post image 1",
//       title: "Empowering Minds, Transforming Futures",
//       desc: "We believe in nurturing the potential within each student, fostering their growth, and preparing them for a future full of endless possibilities. Our dedicated educators and innovative programs inspire students to excel academically, socially, and personally, ensuring they graduate as confident, empowered individuals ready to shape their own bright futures.",
//     },
//     {
//       src: blogimg2,
//       alt: "Blog post image 2",
//       title: "Empower Your Potential at Agasthya Vidyanikethan",
//       desc: "We at Agasthya Vidyanikethan are your gateway to an infinitely exciting universe. We are your partners in achievement and personal development—we are more than just a school. Whether you are a future leader, scientist, artist, or athlete, our committed teachers and cutting-edge tools are here to enhance your abilities.",
//     },
//     {
//       src: blogimg3,
//       alt: "Blog post image 3",
//       title: "Third Blog Post Title",
//       desc: "Short description of the third blog post goes here.",
//     },
//   ]

//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4 py-16">
//         <div className="mb-10 text-center" data-aos="fade-up">
//           <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
//             News & Blogs
//           </p>
//           <h2 className="mt-2 text-3xl font-bold tracking-tight text-avavorange font-bold-900 dark:text-white sm:text-4xl">
//             Our Latest{" "}
//             <span className="relative after:w-full after:h-[7px] z-0 after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:z-[-1]">
//               Research
//             </span>
//           </h2>
//         </div>

//         <div className="space-y-12" data-aos="fade-up">
//           {blogPosts.map((post, index) => (
//             <div
//               key={index}
//               className={`flex flex-col lg:flex-row gap-8 items-center ${
//                 index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
//               }`}
//             >
//               {/* Image Section */}
//               <div className="w-full lg:w-1/2">
//                 <div className="overflow-hidden rounded-lg shadow-lg">
//                   <Image
//                     src={post.src || "/placeholder.svg"}
//                     alt={post.alt}
//                     width={600}
//                     height={400}
//                     className="w-full h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="w-full lg:w-1/2">
//                 <div className="p-6">
//                   <h3 className="mb-4 text-2xl font-bold text-avavorange font-bold-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
//                     <Link href="#">{post.title}</Link>
//                   </h3>
//                   <p className="text-avavorange font-bold-700 dark:text-avavorange font-bold-300">{post.desc}</p>
//                   <div className="mt-6">
//                     <Link
//                       href="#"
//                       className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
//                     >
//                       Read More
//                       <svg
//                         className="ml-2 w-4 h-4"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         ></path>
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Dinacharya;