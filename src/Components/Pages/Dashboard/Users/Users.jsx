import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaTrashAlt, FaUsers, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

export default function Users() {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");
      return result.data;
    },
  });

  const updateUserRole = (user, newRole) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`, { role: newRole })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now a ${newRole}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error updating role:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error updating role",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="border-b border-r border-l">
        <div className="flex justify-evenly my-6">
          <h2 className="text-3xl py-6 rounded-md text-center text-white font-bold w-full bg-[#0A9A73]">
            Total Users: {users.length}
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Role Actions</th>
                <th>Delete Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.role !== "admin" && (
                      <button
                        onClick={() => updateUserRole(user, "admin")}
                        className="btn btn-sm bg-[#0A9A73] text-white"
                      >
                        Make Admin
                      </button>
                    )}
                    <br />
                    {user.role !== "seller" && (
                      <button
                        onClick={() => updateUserRole(user, "seller")}
                        className="btn bg-green-500 btn-sm text-white ml-2"
                      >
                        Make Seller
                      </button>
                    )}

                    {user.role === "seller" && (
                      <button
                        onClick={() => updateUserRole(user, "user")}
                        className="btn bg-yellow-500 btn-sm text-white ml-2"
                      >
                        Make User
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost btn-lg ml-2"
                    >
                      <FaTrashAlt className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
