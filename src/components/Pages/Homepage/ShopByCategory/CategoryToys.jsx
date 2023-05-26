import {
  faBangladeshiTakaSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

const CategoryToys = ({ toys }) => {
  const categoryToys = toys;
  console.log(categoryToys.length);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {categoryToys.map((ct) => (
          <div className="w-[350px] h-[500px]">
            <SwiperSlide>
              <div className="bg-[#0588FD] rounded  p-5">
                <div className="flex flex-col  ">
                  <figure className="self-center">
                    <img
                      src={ct.toyUrl}
                      className="h-[300px] w-[300px]"
                      alt=""
                    />
                  </figure>
                  <div className=" pt-4 px-10 ">
                    <div className="text-white pb-6">
                      <div className="text-3xl  font-extrabold">
                        {ct.toyName}
                      </div>
                      <div className="pb-2 pt-2 text-xl">
                        {ct.price}{" "}
                        <FontAwesomeIcon
                          icon={faBangladeshiTakaSign}
                        />
                      </div>
                      <div>
                        <span> </span>
                        <FontAwesomeIcon icon={faStar} /> {ct.rating}
                      </div>
                    </div>
                  </div>
                  <Link to={`/toy/${ct._id}`}>
                    <button className="w-full btn-pink">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryToys;
