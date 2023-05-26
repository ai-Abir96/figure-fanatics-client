import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../assets/Providers/AuthProvider";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";
import { UseTitle } from "../../utils/UseTitle";

const Login = () => {
  UseTitle("Login");
  const location = useLocation();
  const navigate = useNavigate();
  const { signUser, isLoading, logInWithGoogle, logInWithGit } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  if (isLoading) {
    return (
      <div
        className="flex justify-center items-center w-full"
        style={{ background: "#F6EADE", height: "70vh" }}
      >
        <ReactLoading type="spin" color="white" />
      </div>
    );
  }

  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then((user) => {
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setError(
        `Please Enter a valid Email. \n Example: Abc.123@xyz.com, Abc_123@xyz.com, Abc123@xyz.com`
      );
      return;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      setError(
        `Password must contain minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character:`
      );
      return;
    }

    signUser(email, password)
      .then((currentUser) => {
        Swal.fire({
          title: "Congratulations",
          text: `Successfully Logged In`,
          icon: "success",
          timer: 1500,
          timerProgressBar: true,
        });
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-teal-700 to-teal-300 opacity-100 lg:h-[700px] rounded">
        <div className=" flex flex-col items-center justify-center lg:mr-48  text-white">
          <img
            src="/images/onepicece.jpeg"
            className="mb-3 rounded-full lg:w-80 w-60 mx-auto mt-5 lg:mt-0"
          />
          <h1 className="mb-3 font-bold lg:text-6xl text-5xl text-center gradient-text">
            Hi ?<br />
            Welcome Back
          </h1>
        </div>

        <div className="flex justify-center mb-10 pb-10 lg:pb-0 lg:mb-0">
          <div className="p-12 bg-gray-300 mx-auto rounded-2xl w-100 ">
            <div className="mb-4 text-center">
              <h3 className="font-semibold text-2xl text-gray-800">
                Sign In
              </h3>
              <p className="text-gray-500">
                Please sign in to your account.
              </p>
            </div>
            <div className="space-y-5">
              <form onSubmit={handleLogin}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="email"
                    name="email"
                    placeholder="abc@xyz.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="password"
                    name="password"
                    placeholder="Abc@1234"
                  />
                </div>
                <p className=" text-red-700 my-4">{error}</p>
                <div>
                  <button
                    type="submit"
                    className="w-full mt-5 flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div>
                Don't have an Account? Please{" "}
                <span className=" font-bold text-cyan-500 pl-2">
                  <Link to="/register">Register</Link>
                </span>
              </div>

              <div>
                <p className=" text-center">or</p>
              </div>
              <div>
                <div>
                  <button
                    onClick={handleGoogleLogIn}
                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    <div className="flex items-center justify-center">
                      <div>
                        <FontAwesomeIcon
                          icon={faGoogle}
                          className=" text-xl mr-2"
                        />
                      </div>
                      <div>Sign in with Google</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
