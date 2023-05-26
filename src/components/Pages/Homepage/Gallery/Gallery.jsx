import React from "react";
import Slider from "react-slick";

import Wave from "react-wavify";

const images = [
  "/images/slider/slider1.jpg",
  "/images/slider/slider2.jpg",
  "/images/slider/slider3.jpg",
  "/images/slider/slider4.jpg",
  "/images/slider/slider5.jpg",
  "/images/slider/slider6.webp",
  "/images/slider/slider7.png",
  "/images/slider/slider8.jpg",
  "/images/slider/slider9.jpg",
  "/images/slider/slider10.jpg",
  "/images/slider/slider11.jpg",
  "/images/slider/slider12.jpg",
  "/images/slider/slider13.jpg",
];

const Gallery = () => {
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className=" border-b-2 border-[#004EBB]  rounded">
      <Wave
        fill="#004EBB"
        paused={false}
        options={{
          height: 50,
          amplitude: 20,
          speed: 0.3,
          points: 10,
          bones: 3,
        }}
      />
      <div className="bg-[#004EBB] mt-[-10px]">
        <div className=" text-center pt-5 text-6xl font-extrabold text-white">
          Gallery
        </div>

        <div className="lg:mx-32 mt-10">
          <Slider {...settings}>
            {images.map((img) => (
              <img className="h-[300px]" key={img} src={img} alt="" />
            ))}
          </Slider>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 200 1400 100"
        >
          <path
            fill="#004EBB"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,218.7C672,213,768,203,864,192C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Gallery;
