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
    <div className="h-full w-full -mt-[200px]">
      <video autoPlay
    loop
    muted
    className=" z-10 w-auto min-w-full min-h-full max-w-80"
  >
    <source
      src="/Adsız tasarım.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Carousel;
