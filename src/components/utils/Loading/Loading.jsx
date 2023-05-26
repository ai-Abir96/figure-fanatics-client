import React from "react";
import ReactLoading from "react-loading";
const Loading = () => {
  return (
    <div
      className="flex justify-center items-center w-full"
      style={{ background: "#F6EADE", height: "70vh" }}
    >
      <ReactLoading type="balls" color="red" />
    </div>
  );
};

export default Loading;
