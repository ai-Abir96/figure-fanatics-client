import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UseTitle } from "../../utils/UseTitle";

const ToyDetails = () => {
  UseTitle("Toy Details");
  const id = useParams();

  const [selectedToy, setSelectedToy] = useState([]);
  console.log(selectedToy);

  useEffect(() => {
    fetch(
      `https://aff-server-ai-abir96.vercel.app/get-single-action-figure/${id.id}`
    )
      .then((res) => res.json())
      .then((result) => {
        setSelectedToy(result.singleActionFigure);
      });
  }, []);

  return (
    <div>
      <div className=" text-center text-5xl font-bold text-white mt-20">
        Toy Details
      </div>
      <div className="bg-[#0588FD] rounded my-20 lg:mx-16 mx-4 lg:px-10">
        <div className="flex items-center justify-center shadow-xxl lg:flex-row flex-col">
          <figure className="lg:w-1/2 mx-auto mt-5 lg:mt-0">
            <img
              src={selectedToy.toyUrl}
              className="h-[550px] w-[550px]"
              alt=""
            />
          </figure>
          <div className="lg:w-1/2 ">
            <div className="text-white text-2xl py-10 flex flex-col">
              <div className=" font-extrabold text-center pb-5">
                ------------Toy Information------------
              </div>
              <table className="table-normal border-2 pt-2 text-center rounded">
                <tbody>
                  <tr className="border-2">
                    <td className=" text-2xl border-2">Name:</td>
                    <td className=" text-2xl">
                      {selectedToy.toyName}
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className=" text-2xl border-2">
                      Sub Category:
                    </td>
                    <td className=" text-2xl">
                      {selectedToy.sub_category}
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className=" text-2xl border-2">Price:</td>
                    <td className=" text-2xl">{selectedToy.price}</td>
                  </tr>
                  <tr className="border-2">
                    <td className=" text-2xl border-2">Rating:</td>
                    <td className=" text-2xl">
                      {selectedToy.rating}
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className=" text-2xl border-2">
                      Description:
                    </td>
                    <td className=" text-2xl">
                      {selectedToy.description}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-white text-2xl pb-10 flex flex-col">
              <div className=" font-extrabold text-center pb-5">
                ------------Seller Information------------
              </div>
              <table className="table-normal border-2 pt-2 text-center rounded">
                <tbody>
                  <tr className="border-2">
                    <td className=" text-2xl border-2">Name:</td>
                    <td className=" text-2xl">
                      {selectedToy.seller_name}
                    </td>
                  </tr>
                  <tr className="border-2">
                    <td className=" text-2xl border-2">Email:</td>
                    <td className=" text-2xl">
                      {selectedToy.seller_email}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
