import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UseTitle } from "../../utils/UseTitle";

const AllToys = () => {
  UseTitle("All Toy");
  const [allToys, setAllToys] = useState([]);
  const [searchByName, setSearchByName] = useState("");

  useEffect(() => {
    fetch(
      `https://aff-server-ai-abir96.vercel.app/get-all-action-figure?search=${searchByName}`
    )
      .then((res) => res.json())
      .then((result) => {
        setAllToys(result.allActionFigures);
      });
  }, [searchByName]);

  return (
    <div className="mb-32 border-2 mt-20 rounded border-[#0588FD]">
      <div className=" text-6xl font-bold text-center mt-10 mb-10 text-white">
        All Toys
      </div>
      <div className="lg:w-1/3 w-2/3 lg:pl-16 pl-5">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            value={searchByName}
            placeholder="Search something.."
            onChange={(event) => setSearchByName(event.target.value)}
          />
        </div>
      </div>
      <div className=" relative overflow-x-auto lg:mx-16 mb-20 mx-5">
        {allToys.length === 0 ? (
          <div className=" text-center text-3xl mt-10 text-white ">
            No Data Found
          </div>
        ) : (
          <table className="table  w-full text-white text-center rounded ">
            {/* head */}
            <thead>
              <tr className=" bg-gray-500">
                <th className="hidden"></th>
                <th className="text-2xl font-bold">Seller Name</th>
                <th className="text-2xl font-bold">Toy Name</th>
                <th className="text-2xl font-bold">Sub Category</th>
                <th className="text-2xl font-bold">Price</th>
                <th className="text-2xl font-bold">Quantity</th>
                <th className="text-2xl font-bold"></th>
              </tr>
            </thead>
            <tbody>
              {allToys.map((toy) => (
                <tr key={toy._id} className="bg-[#0588FD]">
                  <td className="hidden"></td>
                  <td>{toy.seller_name}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.sub_category}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>
                    <Link to={`/toy/${toy._id}`} className="btn-pink">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllToys;
