import React from "react";
import { FaAngleDown, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-[#0A9A73]">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 font-semibold text-gray-50 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/language"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Language
                </NavLink>
                <ul className="p-2">
                  <li>
                    <NavLink
                      to="/language/bangla"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      Bangla
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/language/english"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      English
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="  bg-[#0A9A73] border-none  text-white font-bold text-xl"
          >
            <span className="text-2xl p-2 rounded-full bg-gray-100 text-[#0A9A73]">
              BD
            </span>
            PHARMA
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-50 font-semibold text-lg space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Shop
              </NavLink>
            </li>
            <li className="mt-1 relative">
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <FaShoppingCart />
                <div className="badge bg-[#0A9A73] border-none text-white -top-2 right-0 absolute">
                  0
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-hover mr-3">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 btn-outline text-white border-none text-lg hover:bg-[#07be8d] bg-[#0A9A73]"
            >
              Language <FaAngleDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/language/bangla"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Bangla
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/language/english"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  English
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/signIn">
            <button className="btn">Join Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
