"use client";
import avecosystemImage15 from "@/assets/images/avecosystem/Asset 1@4x.png";
import avecosystemImage16 from "@/assets/images/avecosystem/Asset 2@4x.png";
import avecosystemImage17 from "@/assets/images/avecosystem/Asset 3@4x.png";
import avecosystemImage18 from "@/assets/images/avecosystem/Asset 4@4x.png";
import avecosystemImage19 from "@/assets/images/avecosystem/Asset 5@4x.png";
import avecosystemImage20 from "@/assets/images/avecosystem/Asset 6@4x.png";
import avecosystemImage29 from "@/assets/images/avecosystem/Asset 7@4x.png";
import avecosystemImage30 from "@/assets/images/avecosystem/Asset 8@4x.png";


import ImageSingle from "@/components/shared/sub-section/ImageSingle";
import useIsTrue from "@/hooks/useIsTrue";
import popup from "@/libs/popup";
import { useEffect } from "react";
const ImageGallery = ({ gallary }) => {
  const isHome10 = useIsTrue("/home-10");
  const isHome10Dark = useIsTrue("/home-10-dark");
  useEffect(() => {
    popup();
  }, []);
  const allImages = [
          avecosystemImage15,
          avecosystemImage17,
          avecosystemImage18,
          avecosystemImage19,
          avecosystemImage20,
          avecosystemImage29,
          avecosystemImage30,
          avecosystemImage16,
        ];
  const images = gallary ? allImages.slice(0, 6) : [...allImages];
  return (
    <div className= "md:my-20">
      <div
        className={`${gallary ? "" : "container-fluid-2"} ${
          isHome10 || isHome10Dark
            ? "pt-100px pb-30px lg:pb-10px"
            : gallary
            ? ""
            : "mb-10"
        }  `}
      >
        <div className="gallary-container">
          <div className="popup">
            <div id="slider-container" className="slider-container">
              <span className="close-btn">&times;</span>
              <div className="slider-container-wrapper"></div>
            </div>
            <div className="slider-navigation">
              <button className="prev-btn"></button>
              <button className="next-btn"></button>
            </div>
          </div>

          <div
            className={
              gallary
                ? "grid grid-cols-3 gap-5px"
                : "grid grid-cols-1 md:grid-cols-4 gap-10px p-5 md:p-30px lg:p-5 2xl:p-30px "
            }
          >
            {images.map((image, idx) => (
              <ImageSingle key={idx} image={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
