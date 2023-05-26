import React from "react";
import Slider from "react-slick";

import "./banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="w-full">
          <div className="flex h-[600px]  lg:flex-row flex-col-reverse items-center justify-center bg-[#0588FD]">
            <div className="flex  h-full lg:flex-row lg:w-1/2 items-center justify-center ">
              <div className="w-full lg:pl-20 text-center  lg:text-left">
                <p className="font-extrabold lg:text-8xl text-3xl pb-8 text-white  ">
                  Unleash Your Inner Hero!
                </p>
                <p className=" lg:text-2xl text-xl pb-2 text-white">
                  Explore Action Figure Fanatics,
                </p>
                <p className="text-white">
                  the Ultimate Haven for Collectors and Enthusiasts!
                </p>
              </div>
            </div>
            <div className="flex h-full items-center justify-center lg:w-1/2">
              <img
                src="/images/anime.png"
                alt=""
                className="h-full w-full rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex h-[600px]  lg:flex-row flex-col-reverse items-center justify-center bg-[#0588FD]">
            <div className="flex  h-full lg:flex-row lg:w-1/2 items-center justify-center ">
              <div className="w-full lg:pl-20 text-center  lg:text-left">
                <p className="font-extrabold lg:text-8xl text-3xl pb-8 text-white  ">
                  Calling all DC Super Fans
                </p>
                <p className=" lg:text-2xl pb-2 text-white">
                  Action Figure Fanatics Welcomes You to
                </p>
                <p className="text-white">
                  a Universe of Action-Packed DC Unverse !
                </p>
              </div>
            </div>
            <div className="flex h-full items-center justify-center lg:w-1/2">
              <img
                src="/images/dc-multiverse.jpg"
                alt=""
                className="h-full w-full rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex h-[600px]  lg:flex-row flex-col-reverse items-center justify-center bg-[#0588FD]">
            <div className="flex  h-full lg:flex-row lg:w-1/2 items-center justify-center ">
              <div className="w-full lg:pl-20 text-center  lg:text-left">
                <p className="font-extrabold lg:text-8xl text-3xl pb-8 text-white  ">
                  Unlock the Power of Play!
                </p>
                <p className=" lg:text-2xl pb-2 text-white">
                  Dive into Action Figure Fanatics
                </p>
                <p className="text-white">
                  Vast Collection of Heroes and Villains form Marvel
                  Universe.
                </p>
              </div>
            </div>
            <div className="flex h-full items-center justify-center lg:w-1/2">
              <img
                src="/images/marvel-legends.jpg"
                alt=""
                className="h-full w-full rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex h-[600px]  lg:flex-row flex-col-reverse items-center justify-center bg-[#0588FD]">
            <div className="flex  h-full lg:flex-row lg:w-1/2 items-center justify-center ">
              <div className="w-full lg:pl-20 text-center  lg:text-left">
                <p className="font-extrabold lg:text-8xl text-3xl pb-8 text-white  ">
                  Step into a Realm of Epic Battles
                </p>
                <p className=" lg:text-2xl pb-2 text-white">
                  Action Figure Fanatics: Your Gateway to Adventure
                </p>
                <p className="text-white">
                  the Ultimate Vintage Star War Collections !
                </p>
              </div>
            </div>
            <div className="flex h-full items-center justify-center lg:w-1/2">
              <img
                src="/images/star-war-vin.jpg"
                alt=""
                className="h-full w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
