import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import home1 from "../../../assets/commonPhoto/home1.jpg";
import home2 from "../../../assets/commonPhoto/home2.jpg";
import home3 from "../../../assets/commonPhoto/home3.jpg";
import home4 from "../../../assets/commonPhoto/home4.jpg";
import home5 from "../../../assets/commonPhoto/home5.jpg";

const photos = [home1, home2, home3, home4, home5];

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="max-w-7xl md:mx-auto mx-2 h-[180px] md:h-[280px] mt-16 md:mt-24">
      <Slider {...settings} className="w-full h-full overflow-hidden">
        {photos.map((photoSrc, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={photoSrc}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

