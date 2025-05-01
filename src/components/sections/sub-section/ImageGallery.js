"use client";
import avecosystemImage15 from "@/assets/images/avecosystem/avecosystem1.png";
import avecosystemImage16 from "@/assets/images/avecosystem/avecosystem2.png";
import avecosystemImage17 from "@/assets/images/avecosystem/avecosystem3.png";
import avecosystemImage19 from "@/assets/images/avecosystem/avecosystem5.png";
import avecosystemImage20 from "@/assets/images/avecosystem/avecosystem6.png";
import avecosystemImage30 from "@/assets/images/avecosystem/avecosystem8.png";


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
          avecosystemImage19,
          avecosystemImage20,
          avecosystemImage30,
          avecosystemImage16,
        ];
  const images = gallary ? allImages.slice(0, 6) : [...allImages];
  return (
    <div className= "md:my-20">
      <div
        className={`${gallary ? "" : "container-fluid-2"} ${
          isHome10 || isHome10Dark
            ? "md:pt-100px md:pb-30px lg:pb-10px"
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
                : "grid grid-cols-1 md:grid-cols-3 gap-10px  md:p-30px p-5 lg:p-5 2xl:p-30px "
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
