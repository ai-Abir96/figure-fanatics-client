import React, { useEffect, useState } from "react";
import CategoryToys from "./CategoryToys";
import Wave from "react-wavify";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("marvel");
  const [actionFigureCategory, setActionFigureCategory] = useState(
    []
  );

  useEffect(() => {
    fetch(
      `https://aff-server-ai-abir96.vercel.app/action-figures/${activeTab}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setActionFigureCategory(result.categoryActionFigures);
      })
      .catch((error) => console.log(error));
  }, [activeTab]);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="">
      <Wave
        fill="url(#gradient)"
        paused={false}
        options={{ height: 50, amplitude: 20, speed: 0.2, points: 3 }}
      >
        <defs>
          <linearGradient
            id="gradient"
            gradientTransform="rotate(90)"
          >
            <stop offset="10%" stopColor="#ff137b" />
            <stop offset="90%" stopColor="#ff127d" />
          </linearGradient>
        </defs>
      </Wave>
      <div className="bg-[#ff127d]">
        <div className="text-center mt-[-10px] text-6xl font-extrabold mb-20 text-white">
          Shop By Category
        </div>

        <div className="flex border w-[90%]  lg:w-1/2 mx-auto">
          <div
            className={` flex-1 py-4 text-center cursor-pointer ${
              activeTab === "marvel"
                ? "bg-gradient-to-r from-teal-700 to-teal-300"
                : "bg-gray-300"
            }`}
            onClick={() => handleTabClick("marvel")}
          >
            <p className=" text-black text-xl font-extrabold">
              Marvel
            </p>
          </div>
          <div
            className={`flex-1 py-4 text-center cursor-pointer ${
              activeTab === "dc"
                ? "bg-gradient-to-r from-teal-700 to-teal-300"
                : " bg-gray-300"
            }`}
            onClick={() => handleTabClick("dc")}
          >
            <p className=" text-black text-xl font-bold">DC</p>
          </div>
          <div
            className={`flex-1 py-4 text-center cursor-pointer ${
              activeTab === "starwars"
                ? "bg-gradient-to-r from-teal-700 to-teal-300"
                : "bg-gray-300"
            }`}
            onClick={() => handleTabClick("starwars")}
          >
            <p className=" text-black text-xl font-bold">Star Wars</p>
          </div>
        </div>

        <div className="lg:mx-32 mx-4">
          <div className=" bg-white rounded lg:p-10">
            {actionFigureCategory.length === 0 ? (
              <div className=" text-center text-4xl font-bold pt-10">
                No Action Figures Found in this Category
              </div>
            ) : (
              <CategoryToys toys={actionFigureCategory} />
            )}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 200 1400 100"
        >
          <path
            fill="#ff127d"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,218.7C672,213,768,203,864,192C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ShopByCategory;
