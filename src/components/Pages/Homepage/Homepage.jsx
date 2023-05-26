import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Trending from "./Trending/Trending";
import Trivia from "./trivia/Trivia";
import AOS from "aos";
import { UseTitle } from "../../utils/UseTitle";

export const Homepage = () => {
  UseTitle("Home");
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="mt-10">
      <Banner />
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className=" mt-48"
      >
        <Gallery />
      </div>
      <div
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="right-center"
        className=" mt-48"
      >
        <ShopByCategory />
      </div>
      <div
        data-aos="fade-down-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className=" mt-48"
      >
        <Trending />
      </div>
      <div
        data-aos="fade-down-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className=" mt-48"
      >
        <Trivia />
      </div>
    </div>
  );
};
