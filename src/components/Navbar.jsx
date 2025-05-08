import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ loggedIn, username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutAndNavigate = () => {
    onLogout();
    navigate("/");
  };
  return (
    <nav className="bg-blue-800 p-8 flex justify-between items-center">
      <h1 className="flex justify-center items-center text-white text-lg md:text-3xl font-bold cursor-pointer">
        {" "}
        <Link className="ml-9" to="/">
          Guess my Nationality
        </Link>
      </h1>

      {!loggedIn && (
        <div className="flex items-center gap-4">
          <Link to="/login">
            <button className="  md:px-4 py-2 md:w-30 md:text-lg text-base text- w-20 rounded text-white cursor-pointer bg-blue-400">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className=" md:px-4 py-2  md:w-30 w-20 md:text-lg text-base rounded text-white cursor-pointer bg-blue-400">
              Register
            </button>
          </Link>
        </div>
      )}

      {loggedIn && (
        <div className="flex items-center gap-4">
          <span className="text-blue-50 text-lg">Welcome, {username}!</span>
          <Link to="/">
            <button
              onClick={handleLogoutAndNavigate}
              className="md:px-4 py-2  md:w-30  w-20 rounded md:text-lg text-base text-white cursor-pointer  bg-blue-400"
            >
              Logout
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
