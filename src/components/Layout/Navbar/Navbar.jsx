import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../assets/Providers/AuthProvider";
import Loading from "../../utils/Loading/Loading";

const Navbar = () => {
  const { user, logout, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePhotoError = (event) => {
    event.target.src =
      "https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg?w=2000";
  };
  const handleLogOut = () => {
    if (isLoading) {
      return <Loading />;
    }

    logout()
      .then(() => {
        return navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lg:mx-8 lg:px-8 my-4  ">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start items-center w-[90%] lg:w-[50%] ">
          <div className="dropdown w-[25%]">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-compact dropdown-content mt-3 p-2 bg-[#090046]  rounded-box w-52 "
            >
              <li>
                <NavLink to="/" className="font-extrabold text-white">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/all-toys"
                  className="font-extrabold text-white"
                >
                  All Toys
                </NavLink>
              </li>
              {user ? (
                <li>
                  <NavLink
                    to="/add-toy"
                    className="font-extrabold text-white"
                  >
                    Add a Toy
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/add-toy"
                    className="font-extrabold text-white hidden"
                  >
                    Add a Toy
                  </NavLink>
                </li>
              )}
              {user ? (
                <li>
                  <NavLink
                    to={`/toys/my-toys`}
                    className="font-extrabold text-white"
                  >
                    My Toys
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink className="font-extrabold gradient-tex hidden">
                    My Toys
                  </NavLink>
                </li>
              )}

              <li>
                <NavLink
                  to="/blogs"
                  className="font-extrabold text-white"
                >
                  Blogs
                </NavLink>
              </li>
              {user ? (
                <li>
                  <button onClick={handleLogOut} className="btn">
                    Log Out
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn hidden"
                  >
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="cursor-pointer">
              <Link className=" text-[#ADEFD1FF]" to="/">
                <img
                  src="/images/site-logo.png"
                  className="lg:h-[70px] h-[50px] rounded-full"
                  alt=""
                />
              </Link>
            </div>
            <div className="cursor-pointer ml-5 text-2xl font-extrabold font-navTitle">
              <Link className=" text-white" to="/">
                <div> Action Figure</div>
                <div>Fanatics</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex lg:items-center lg:justify-center ">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink to="/" className="font-extrabold text-white">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/all-toys"
                className="font-extrabold text-white"
              >
                All Toys
              </NavLink>
            </li>
            {user ? (
              <li>
                <NavLink
                  to="/add-toy"
                  className="font-extrabold text-white"
                >
                  Add a Toy
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/add-toy"
                  className="font-extrabold text-white hidden"
                >
                  Add a Toy
                </NavLink>
              </li>
            )}
            {user ? (
              <li>
                <NavLink
                  to={`/toys/my-toys`}
                  className="font-extrabold text-white"
                >
                  My Toys
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink className="font-extrabold gradient-tex hidden">
                  My Toys
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to="/blogs"
                className="font-extrabold text-white"
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className=" flex items-center justify-center">
              <div
                className="tooltip text-white"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  className=" rounded-full lg:mr-8 h-14 w-14"
                  onError={() => handlePhotoError()}
                />
              </div>
              <button
                onClick={handleLogOut}
                className="btn hidden lg:flex"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
