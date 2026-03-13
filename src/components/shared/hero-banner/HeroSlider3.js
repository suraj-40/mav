"use client";
import herobannerImage5 from "@/assets/images/herobanner/01.jpg";
import HeroSlide3 from "./HeroSlide3";

const HeroSlider3 = () => {
  const slide = {
    title: (
      <>
        Excellence in <span className="text-secondaryColor">Education</span>
      </>
    ),
    image: herobannerImage5,
    tag: "MAHARSHI AGASTHYA VIDYANIKETHAN",
    subtitle:
      "Your journey begins here, Join us today and embark on an educational adventure.",
  };

  return <HeroSlide3 idx={0} slide={slide} />;
};

export default HeroSlider3;




// "use client";
// import herobannerImage from "@/assets/images/herobanner/herobanner__slider.png";
// import herobannerImage2 from "@/assets/images/herobanner/herobanner__slider__2.png";
// import herobannerImage3 from "@/assets/images/herobanner/herobanner__slider__3.png";
// import herobannerImage5 from "@/assets/images/herobanner/herobanner__slider__5.png";
// import herobannerImage6 from "@/assets/images/herobanner/herobanner__slider__6.png";
// import herobannerImage7 from "@/assets/images/herobanner/herobanner__slider__7.png";
// import HomeTumbail from "@/assets/images/herobanner/kids_2.png"
// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import HeroSlide3 from "./HeroSlide3";
// import useIsTrue from "@/hooks/useIsTrue";

// const HeroSlider3 = () => {
//   const isHome9 = useIsTrue("/home-9");
//   const isHome9Dark = useIsTrue("/home-9-dark");
//   const slides = [
//     {
//       title:
//         isHome9 || isHome9Dark ? (
//           <>
//             Registrations {" "}
//             <span className="text-secondaryColor">open</span>
//           </>
//         ) : (
//           <>
//             Registrations <span className="text-secondaryColor">open</span>
//           </>
//         ),
//       image: isHome9 || isHome9Dark ? HomeTumbail : herobannerImage,
//       tag: "MAHARSHI AGASTHYA VIDYANIKETHAN",
//       subtitle:"Your journey begins here join us today and embark on an educational adventure ",
//     },
//     {
//       title:
//         isHome9 || isHome9Dark ? (
//           <>
//             Excellence in <span className="text-secondaryColor">Education</span>
//           </>
//         ) : (
//           <>
//              Excellence in  <span className="text-secondaryColor">Education</span>
//           </>
//         ),
//       image: isHome9 || isHome9Dark ? herobannerImage5 : herobannerImage2,
//       tag: "MAHARSHI AGASTHYA VIDYANIKETHAN",
//       subtitle:"Your journey begins here, Join us today and embark on an educational adventure.",
//     },
//     {
//       title:
//         isHome9 || isHome9Dark ? (
//           <>
//             {" "}
//             Best in Class <span className="text-secondaryColor">Education</span>
//           </>
//         ) : (
//           <>
//             Best in Class <span className="text-secondaryColor">Education</span>
//           </>
//         ),
//       image: isHome9 || isHome9Dark ? herobannerImage7 : herobannerImage3,
//       tag: "MAHARSHI AGASTHYA VIDYANIKETHAN",
//       subtitle:"Where every student's journey to excellence begins, shaping future leaders and change-makers.",
//     },
//   ];
//   return (
//     <Swiper
//       navigation={true}
//       pagination={{
//         clickable: true,
//       }}
//       grabCursor={true}
//       modules={[Navigation, Pagination]}
//       className={`ecommerce-slider ${
//         isHome9 || isHome9Dark ? "kindergarden" : ""
//       } py-50px md:py-100px lg:pt-100px lg:pb-150px 2xl:pt-70px 2xl:pb-30 4xl:pt-155px 4xl:pb-250px overflow-hidden`}
//     >
//       {slides.map((slide, idx) => (
//         <SwiperSlide className="px-15px" key={idx}>
//           <HeroSlide3 idx={idx} slide={slide} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default HeroSlider3;
