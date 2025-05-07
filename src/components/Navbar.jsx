import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="my-5 h-10 w-full">
        <ul className="fixed w-full">
          <div className="float-left">
            <li className="ml-9">
              <Link className="ml-9" to="/">
                Home
              </Link>
            </li>
          </div>
          <div className="inline-flex items-center justify-between float-right">
            <li className="ml-9 ">
              <Link className="ml-9" to="/login">
                Login
              </Link>
            </li>
            <li className="mx-9">
              <Link className=" mx-9" to="/register">
                Register
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
