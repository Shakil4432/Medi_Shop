import React from "react";
import { NavLink } from "react-router-dom";

export default function UserDashBoard() {
  return (
    <div>
      <aside className="flex static  col-span-2 flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <NavLink
          to="/"
          className="  bg-[#0A9A73] border-none  text-white font-bold text-xl rounded-l-full rounded-r-full p-3"
        >
          <span className="text-2xl p-1 rounded-full bg-gray-100 text-[#0A9A73]">
            BD
          </span>
          PHARMA
        </NavLink>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-3 ">
            <NavLink
              to="/dashboard"
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">Payment History</span>
            </NavLink>
          </nav>
        </div>
      </aside>
    </div>
  );
}
