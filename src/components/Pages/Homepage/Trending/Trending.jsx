import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Trending = () => {
  return (
    <div className=" border-8">
      <div className="text-center mt-10 text-white text-6xl font-extrabold mb-20">
        Trending This Month
      </div>
      <Swiper
        spaceBetween={10}
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
        <SwiperSlide>
          <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <figure>
              <img src="/images/trending/batman.png" alt="Shoes" />
            </figure>
            <div className="card-body text-white">
              <p className=" text-center">
                "Embrace the night and protect Gotham City with the
                Dark Knight himself, Batman!
                <br />
                <br />
                Add this Funko Pop to your collection !"
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <figure>
              <img src="/images/trending/spider.png" alt="Shoes" />
            </figure>
            <div className="card-body text-white">
              <p className=" text-center">
                "Swing into action with the friendly neighborhood
                hero, Spider-Man! "
                <br />
                <br />
                Add this Funko Pop to your collection !"
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 mx-auto bg-base-100 shadow-xl">
            <figure>
              <img src="/images/trending/boba-fett.png" alt="Shoes" />
            </figure>
            <div className="card-body text-white">
              <p className=" text-center">
                "Join the ranks of the galaxy's most feared bounty
                hunter, Boba Fett!
                <br />
                <br />
                Add this extraordinary piece to your collection!"
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Trending;
