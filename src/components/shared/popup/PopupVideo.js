"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import videoImage from "@/assets/images/icon/video.png";
import videoModal from "@/libs/videoModal"; // Assumes this handles opening the modal

const PopupVideo = ({ videoUrl }) => {
  useEffect(() => {
    videoModal();
  }, []);

  return (
    <div>
      <button
        data-url={videoUrl} // Make sure this is already the embed URL with autoplay
        className="lvideo relative w-7 h-7 bg-avorange rounded-full flex items-center justify-center"
      >
        <span className="animate-buble2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[120px] h-[120px] border-avorange rounded-full"></span>
        <Image src={videoImage} alt="Play" className="w-2" />
      </button>
    </div>
  );
};

export default PopupVideo;




// "use client";
// import Image from "next/image";
// import React, { useEffect } from "react";
// import videoImage from "@/assets/images/icon/video.png";
// import videoModal from "@/libs/videoModal";  // Assuming this handles opening the modal

// const PopupVideo = ({ videoUrl }) => {
//   useEffect(() => {
//     videoModal();
//   }, []);

//   return (
//     <div>
//       <button
//         data-url={videoUrl}
//            className="lvideo relative w-7 h-7  bg-avorange rounded-full flex items-center justify-center"
//            >
//               {/* <span className="animate-buble absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[180px] h-[180px] border-orange rounded-full"></span> */}
//               <span className="animate-buble2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[120px] h-[120px] border-avorange rounded-full"></span>
//               <Image src={videoImage} alt="" className="w-2" />
//       </button>
//     </div>
//   );
// };

// export default PopupVideo;