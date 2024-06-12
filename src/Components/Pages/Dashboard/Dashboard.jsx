import React from "react";
import { Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import AdminDashBoard from "./AdminDashBoard/AdminDashBoard";
import SellerDashBoard from "./SellerDashBoard/SellerDashBoard";
import UserDashBoard from "./UserDashBoard/UserDashBoard";
import useUser from "../../Hooks/useUser/useUser";

export default function Dashboard() {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  // const [isUser] = useUser();
  // console.log(isUser);

  return (
    <div className="grid  grid-cols-8 justify-center   gap-4 mr-20 min-h-screen">
      {isAdmin.admin && <AdminDashBoard></AdminDashBoard>}
      {isAdmin.users && <UserDashBoard></UserDashBoard>}

      {isAdmin.seller && <SellerDashBoard></SellerDashBoard>}

      <div className="col-span-6 ml-36">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
