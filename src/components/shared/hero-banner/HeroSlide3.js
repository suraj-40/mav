import React from "react";
import ButtonPrimary2 from "../buttons/ButtonPrimary2";
import HeroName from "../section-names/HeroName";
import useIsTrue from "@/hooks/useIsTrue";
import ErrorBoundary from "@/components/ErrorBoundary";

const HeroSlide3 = ({ slide, idx }) => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const { tag, title, image, subtitle } = slide;

  return (
    <ErrorBoundary componentName={`HeroSlide3-${idx}`}>
      <div className="w-full h-[500px] md:h-[550px] relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image.src})` }}>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/0 z-0"></div>

  {/* Your content here */}
  <div className="relative z-10 container 2xl:container-secondary-md h-full flex items-center">
    <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-30px w-full">
      {/* Left content */}
      <div data-aos="fade-up" className="md:col-span-12 lg:col-span-7">
        <div>
          <HeroName>{tag}</HeroName>
          <h1 className="text-size-35 md:text-size-65 lg:text-5xl 2xl:text-size-65 font-bold text-white mb-15px">
            {title}
          </h1>
          <p className="text-size-15 md:text-lg text-white font-medium">
            {subtitle}
          </p>
          <div className="mt-30px space-x-30px">
            <ButtonPrimary2 path="/schedule">Admissions</ButtonPrimary2>
          </div>
        </div>
      </div>     
    </div>
  </div>
</div>

    </ErrorBoundary>
  );
};

export default HeroSlide3;




// import React from "react";
// import ButtonPrimary from "../buttons/ButtonPrimary";
// import HeroName from "../section-names/HeroName";
// import PopupVideo from "../popup/PopupVideo";
// import useIsTrue from "@/hooks/useIsTrue";
// import ErrorBoundary from "@/components/ErrorBoundary";

// const HeroSlide3 = ({ slide, idx }) => {
//   const isHome9 = useIsTrue("/home-9");
//   const isHome9Dark = useIsTrue("/home-9-dark");
//   const { tag, title, image, subtitle } = slide;

//   return (
//     <ErrorBoundary componentName={`HeroSlide3-${idx}`}>
//       <div className="container 2xl:container-secondary-md relative overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-30px">
//           {/* banner Left */}
//           <div
//             data-aos="fade-up"
//             className="md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-7"
//           >
//             <div>
//               <HeroName>{tag}</HeroName>
//               <h1 className="text-size-35 md:text-size-65 lg:text-5xl 2xl:text-size-65 leading-42px md:leading-18 lg:leading-15 2xl:leading-18 text-blackColor dark:text-blackColor-dark md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
//                 {title}
//               </h1>
//               <p className="text-size-15 md:text-lg text-blackColor dark:text-blackColor-dark font-medium">
//                 {subtitle}
//               </p>
//               <div className="mt-30px space-x-30px">
//                 <ButtonPrimary path="/application">Admissions</ButtonPrimary>
//               </div>
//             </div>
//           </div>

//           {/* banner Right as background image */}
//           <div
//             data-aos="fade-up"
//             className="md:col-start-1 md:col-span-8 lg:col-start-8 lg:col-span-5"
//           >
//             <div
//               className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
//               style={{ backgroundImage: `url(${image.src})` }}
//             >
//               {(isHome9 || isHome9Dark) && idx === 0 && (
//                 <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
//                   <PopupVideo />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </ErrorBoundary>
//   );
// };

// export default HeroSlide3;




// import Image from "next/image";
// import React from "react";
// import ButtonPrimary from "../buttons/ButtonPrimary";
// import HeroName from "../section-names/HeroName"; // Corrected import
// import PopupVideo from "../popup/PopupVideo";
// import useIsTrue from "@/hooks/useIsTrue";
// import ErrorBoundary from "@/components/ErrorBoundary";

// const HeroSlide3 = ({ slide, idx }) => {
//   const isHome9 = useIsTrue("/home-9");
//   const isHome9Dark = useIsTrue("/home-9-dark"); // Add this line
//   const { tag, title, image, subtitle } = slide;

//   return (
//     <ErrorBoundary componentName={`HeroSlide3-${idx}`}>
//       <div className="container 2xl:container-secondary-md relative overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-30px">
//           {/* banner Left */}
//           <div
//             data-aos="fade-up"
//             className="md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-7"
//           >
//             <div>
//               <HeroName>{tag}</HeroName>
//               <h1 className="text-size-35 md:text-size-65 lg:text-5xl 2xl:text-size-65 leading-42px md:leading-18 lg:leading-15 2xl:leading-18 text-blackColor dark:text-blackColor-dark md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
//                 {title}
//               </h1>
//               <p className="text-size-15 md:text-lg text-blackColor dark:text-blackColor-dark font-medium">
//                 {subtitle}
//               </p>
//               <div className="mt-30px space-x-30px">
//                 <ButtonPrimary path="/application">Admissions</ButtonPrimary>
//               </div>
//             </div>
//           </div>
//           {/* banner right */}
//           <div
//             data-aos="fade-up"
//             className="md:col-start-1 md:col-span-8 lg:col-start-8 lg:col-span-5"
//           >
//             <div className="relative w-full h-[400px]">
//               <Image
//                 className="w-full h-full object-cover"
//                 src={image}
//                 alt={tag || "Hero Slide"}
//                 fill
//                 placeholder="blur"
//               />
//               {(isHome9 || isHome9Dark) && idx === 0 && (
//                 <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
//                   <PopupVideo />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </ErrorBoundary>
//   );
// };

// export default HeroSlide3;