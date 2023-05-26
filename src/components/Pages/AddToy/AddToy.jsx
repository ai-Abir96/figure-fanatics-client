import React, { useContext, useState } from "react";
import { AuthContext } from "../../../assets/Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { UseTitle } from "../../utils/UseTitle";
const AddToy = () => {
  UseTitle("Add Toy");
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const toyUrl = form.toyUrl.value;
    const toyName = form.toyName.value;
    const sub_category = form.sub_category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const toyInfo = {
      seller_name,
      seller_email,
      toyUrl,
      toyName,
      sub_category,
      price,
      quantity,
      rating,
      description,
    };

    fetch(
      `https://aff-server-ai-abir96.vercel.app/add-action-figure`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toyInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(" SuccessFully Added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pt-10 my-20">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex flex-col items-center justify-center  ">
        <div className="w-full p-6 text-black bg-gray-200 border-t-4 border-gray-600 rounded-md shadow-md border-top lg:w-8/12">
          <h1 className="text-5xl font-semibold text-center text-gray-700">
            Add a Toy
          </h1>
          <form onSubmit={handleAddToy} className="space-y-4">
            <h2 className=" text-center mt-10  text-2xl">
              ------------Seller Information-----------
            </h2>
            <div className=" lg:flex  items-center justify-between">
              <div className="lg:w-1/2 lg:pr-10">
                <label className="label ">
                  <span className=" text-base label-text lg:text-xl">
                    Seller Name
                  </span>
                </label>
                <input
                  type="text"
                  name="seller_name"
                  placeholder="Seller Name"
                  className="w-full input input-bordered"
                  value={
                    user.displayName ? user.displayName : "anonymous"
                  }
                />
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <label className="label">
                  <span className="text-base label-text lg:text-xl">
                    Seller Email
                  </span>
                </label>
                <input
                  type="text"
                  name="seller_email"
                  placeholder="Seller Email"
                  className="w-full input input-bordered"
                  value={user.email}
                />
              </div>
            </div>
            <h2 className=" text-center pt-10 text-2xl">
              ------------Toy Information-----------
            </h2>
            <div className="lg:flex justify-evenly items-center">
              <div className="lg:w-1/2 lg:pr-10">
                <label className="label">
                  <span className="text-base label-text lg:text-xl">
                    Toy Picture
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the url"
                  name="toyUrl"
                  className="w-full input input-bordered"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <label className="label">
                  <span className="text-base label-text lg:text-xl">
                    Toy Name
                  </span>
                </label>
                <input
                  type="text"
                  name="toyName"
                  placeholder="Toy Name"
                  className="w-full input input-bordered"
                />
              </div>
            </div>

            <div className=" lg:flex justify-evenly items-center">
              <div className="lg:w-1/2 lg:pr-10">
                <label className="label">
                  <span className="text-base label-text lg:text-xl">
                    Sub Category
                  </span>
                </label>
                <input
                  type="text"
                  name="sub_category"
                  placeholder="Sub Category"
                  className="w-full input input-bordered"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <label className="label">
                  <span className="text-base label-text lg:text-xl">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="w-full input input-bordered"
                />
              </div>
            </div>
            <div className=" lg:flex  justify-evenly items-center">
              <div className="lg:w-1/2 lg:pr-10">
                <label className="label">
                  <span className="text-base label-text lg:text-xl">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className="w-full input input-bordered"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <label className="label">
                  <span className="ext-base label-text lg:text-xl">
                    Rating
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="w-full input input-bordered"
                />
              </div>
            </div>
            <div className="">
              <label className="label">
                <span className="ext-base label-text lg:text-xl">
                  Description of the Toy
                </span>
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                className="w-full input input-bordered h-40"
              />
            </div>

            <div>
              <button type="submit" className="btn btn-block mt-10">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
