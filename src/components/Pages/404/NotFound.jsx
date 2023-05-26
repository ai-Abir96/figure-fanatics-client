import React from "react";
import { Link } from "react-router-dom";
import { UseTitle } from "../../utils/UseTitle";

const NotFound = () => {
  UseTitle("Not Found");
  return (
    <div>
      <div className="flex flex-col justify-center mt-48 items-center  text-red-800 font-extrabold">
        <img
          src="/images/404.png"
          alt=""
          className="w-full lg:w-[50%]"
        />
        <div className="text-7xl mt-5">404 - NotFound</div>
        <div></div>
        <div>
          <Link to="/">
            <button className="btn mt-24 text-2xl">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
