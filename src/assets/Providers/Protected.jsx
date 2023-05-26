import React, { useContext } from "react";
import ReactLoading from "react-loading";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="text-center">
        <ReactLoading type="balls" color="red" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      state={{ form: location }}
      to="/login"
      replace
    ></Navigate>
  );
};

export default Protected;
