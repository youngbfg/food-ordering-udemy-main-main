"use client"
import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";
import ReactPlayer from 'react-player'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appendDots: (dots) => (
      <div>
        <ul className="container mx-auto w-full text-start">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="  -mt-[2000px] ">
      <video autoPlay
    loop
    muted
    className=" z-10  min-w-full  "
  >
    <source
      src="/Adsız tasarım (1).mp4"
      type="video/mp4"

    />
    Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Carousel;
