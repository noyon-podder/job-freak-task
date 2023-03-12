import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaPhone, FaUserAlt } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-indigo-600 text-base-content">
            {/* website logo  [mobile device hidden]*/}
            <Link to="/">
              {" "}
              <h3 className="text-white text-3xl font-bold hidden lg:block mb-8 cursor-pointer">
                JOB<span className="italic">Freak</span>
              </h3>
            </Link>

            {/* link part start here  */}

            <Link to="/" className="text-xl text-white flex items-center mb-5">
              <AiFillHome className="mr-4" /> Home
            </Link>
            <Link
              to="/about"
              className="text-xl text-white flex items-center mb-5"
            >
              <FaUserAlt className="mr-4" /> About
            </Link>
            <Link
              to="/contact"
              className="text-xl text-white flex items-center mb-5"
            >
              <FaPhone className="mr-4"></FaPhone> Contact
            </Link>
            {/* link part end here  */}
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
