import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../assets/Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseTitle } from "../../utils/UseTitle";
import {
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const MyToys = () => {
  UseTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortValue, setSortValue] = useState("asc");

  const handleSort = (value) => {
    setSortValue(value);
  };

  const handleDeleteToy = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(
          `https://aff-server-ai-abir96.vercel.app/delete/action-figure/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((result) => {
            console.log(result);

            fetchMyToys();
          });
        Swal.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      }
    });
  };

  useEffect(() => {
    fetchMyToys();
  }, [sortValue]);

  const fetchMyToys = () => {
    fetch(
      `https://aff-server-ai-abir96.vercel.app/action-figure/${user.email}?sort=${sortValue}`
    )
      .then((res) => res.json())
      .then((result) => {
        setMyToys(result.usersActionFigures);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mb-32 border-2 mt-20 rounded border-[#0588FD]">
      <div className=" text-4xl text-white font-bold text-center mt-20 mb-10">
        My Toys
      </div>
      <div>
        <div className=" font-bold text-2xl text-white lg:ml-16 ml-2">
          Sort By Price
        </div>
        <button
          onClick={() => handleSort("asc")}
          className="btn lg:ml-16 ml-2 mb-5"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <button onClick={() => handleSort("dsc")} className="btn">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
      {myToys.length === 0 ? (
        <div>No Toys Found</div>
      ) : (
        <div className="overflow-x-auto lg:mx-16 mx-2 mb-20">
          <table className="table w-full text-center text-white rounded">
            <thead>
              <tr className="bg-gray-500">
                <th className="hidden"></th>
                <th className="text-2xl font-bold">Picture</th>
                <th className="text-2xl font-bold">Toy Name</th>
                <th className="text-2xl font-bold">Seller Name</th>
                <th className="text-2xl font-bold">Email</th>
                <th className="text-2xl font-bold">Sub Category</th>
                <th className="text-2xl font-bold">Price</th>
                <th className="text-2xl font-bold">Quantity</th>
                <th className="text-2xl font-bold">Rating</th>
                <th className="text-2xl font-bold">Description</th>
                <th className="text-2xl font-bold"></th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy) => (
                <tr key={toy._id} className="bg-[#0588FD]">
                  <td className="hidden"></td>
                  <td>
                    <img
                      src={toy.toyUrl}
                      alt=""
                      className=" h-16 w-16"
                    />
                  </td>
                  <td>{toy.toyName}</td>
                  <td>{toy.seller_name}</td>
                  <td>{toy.seller_email}</td>
                  <td>{toy.sub_category}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>{toy.rating}</td>
                  <td>{toy.description}</td>
                  <td>
                    <Link
                      to={`/toys/my-toys/update/${toy._id}`}
                      className="btn btn-yellow mr-10"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDeleteToy(toy._id)}
                      className="btn btn-red"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyToys;
