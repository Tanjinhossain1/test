import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = (
    <>
      <li className="text-xl">
        <Link to="/">Home</Link>
      </li>

      <li className="text-xl">
        <Link to="/">Dashboard</Link>
      </li>

      <li className="text-xl">
        <Link to="/">Shop</Link>
      </li>
      <div class="dropdown  dropdown-hover hidden xl:flex ">
        <label tabindex="0" class="text-xl">
          Pages{" "}
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu xl:mt-72 p-2 shadow bg-base-100 rounded-box w-48"
        >
          <li className="text-xl text-black">
            <Link to="/">ManageProducts</Link>
          </li>
          <li className="text-xl text-black">
            <Link to="/">My Profile</Link>
          </li>
          <li className="text-xl text-black">
            <Link to="/">Add Review</Link>
          </li>
          <li className="text-xl text-black">
            <Link to="/">Blog</Link>
          </li>
          <li className="text-xl text-black">
            <Link to="/">MyPortfolio</Link>
          </li>
        </ul>
      </div>
      <li className="text-xl">
        <Link to="/">Orders</Link>
      </li>

      <li className="text-xl">
        <Link to="/">Add Product</Link>
      </li>
      <>
        <li className="text-xl block xl:hidden">
          <Link to="/">My Profile</Link>
        </li>
        <li className="text-xl block xl:hidden">
          <Link to="/">Add Review</Link>
        </li>
        <li className="text-xl block xl:hidden">
          <Link to="/">Blog</Link>
        </li>
        <li className="text-xl block xl:hidden">
          <Link to="/">MyPortfolio</Link>
        </li>
      </>

      <li className="text-xl">
        <Link to="/">Contact Us</Link>
      </li>
      <li className="text-xl">
        <Link to="/">Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="">
              <label tabIndex="0" className="btn btn-ghost xl:hidden">
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
            </div>
            <ul
              tabIndex="0"
              className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>{navItems}</li>
            </ul>
          </div>
          <Link to="/home" className="btn btn-ghost normal-case text-xl">
            Test-Task
          </Link>
        </div>
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal p-0 font-bold text-white">
            <li> {navItems} </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
