import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

export default function Root() {
  const location = useLocation();
  const noHeaderFooter = location?.pathname.includes("signIn");
  const noHeaderFooter2 = location?.pathname.includes("signUp");
  return (
    <div className="max-w-screen-xl mx-auto">
      {noHeaderFooter || noHeaderFooter2 || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || noHeaderFooter2 || <Footer></Footer>}
    </div>
  );
}
