import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { UseTitle } from "../../utils/UseTitle";

const UpdateToy = () => {
  UseTitle("Update Toy");
  const id = useParams();
  const [selectedToy, setSelectedToy] = useState([]);
  console.log(id);

  useEffect(() => {
    fetch(
      `https://aff-server-ai-abir96.vercel.app/get-single-action-figure/${id.id}`
    )
      .then((res) => res.json())
      .then((result) => {
        setSelectedToy(result.singleActionFigure);
      });
  }, []);

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToyInfo = { price, quantity, description };
    fetch(
      `https://aff-server-ai-abir96.vercel.app/action-figure/${id.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedToyInfo),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(" SuccessFully Updated", {
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
      });
  };

  return (
    <div className="pt-10">
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
      <div className=" flex flex-col items-center justify-center  ">
        <div className="w-full p-6 bg-gray-200 border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-3xl">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Update Toy Information
          </h1>
          <form onSubmit={handleUpdateToy} className="space-y-4">
            <h2 className=" text-center pt-10 text-2xl">
              ------------Toy Information-----------
            </h2>
            <div className=" flex justify-evenly items-center">
              <div>
                <label className="label ">
                  <span className="text-base label-text lg:text-2xl">
                    <span className="text-black font-bold">
                      Toy Name:
                    </span>{" "}
                    {selectedToy.toyName}
                  </span>
                </label>
              </div>
            </div>

            <div className=" lg:flex justify-evenly items-center">
              <div>
                <label className="label">
                  <span className="text-base label-text lg:text-xl">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder={selectedToy.price}
                  className="w-full input input-bordered"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text lg:text-xl">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder={selectedToy.quantity}
                  className="w-full input input-bordered"
                />
              </div>
            </div>

            <div className="lg:mx-20">
              <label className="label">
                <span className="text-base label-text lg:text-xl">
                  Description of the Toy
                </span>
              </label>
              <textarea
                type="text"
                name="description"
                placeholder={selectedToy.description}
                className="w-full input input-bordered h-40"
              />
            </div>

            <div>
              <button type="submit" className="btn btn-block mt-10">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
