import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Iprop {
  images: string[];
}
const ImageSlider: React.FC<Iprop> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <Image src={image} alt="" height={1000} width={1000} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;
