import React from "react";
import Wave from "react-wavify";
import Swal from "sweetalert2";

const Trivia = () => {
  const handleSubmit = (value) => {
    if (value === 3) {
      Swal.fire({
        icon: "success",
        title: "Congratulations !",
        text: "You got it Right!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are Wrong!",
      });
    }
  };
  return (
    <div>
      <Wave
        fill="#f79902"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
      <div className="mb-40 bg-[#f79902] mt-[-10px] lg:px-20">
        <div className="text-center text-white text-6xl font-extrabold ">
          trivia
        </div>
        <div className="flex items-center lg:flex-row flex-col">
          <img
            src="/images/offer/pikachu.png"
            className=" w-2/3 lg:w-5/12"
            alt=""
          />
          <div className=" text-white lg:text-5xl text-2xl text-center">
            Can you guess which series this Funko POP! is from?
            <div className="grid grid-cols-2 mt-10 lg:gap-10 gap-4 pb-10 px-5 lg:text-3xl text-base">
              <button
                onClick={() => handleSubmit(1)}
                className="btn-pink"
              >
                Transformers
              </button>
              <button
                onClick={() => handleSubmit(2)}
                className="btn-pink"
              >
                Marvel
              </button>
              <button
                onClick={() => handleSubmit(3)}
                className="btn-pink"
              >
                Pokemon
              </button>
              <button
                onClick={() => handleSubmit(4)}
                className="btn-pink"
              >
                DC
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trivia;
