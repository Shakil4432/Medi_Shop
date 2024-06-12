import React from "react";
import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";

const PaymentManagement = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });
  console.log(payments);

  const handleStatus = (id) => {
    axiosSecure
      .patch(`/payments/${id}`)
      .then((res) => {
        refetch();
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className=" max-w-screen-lg mx-auto mt-12">
      <div>
        <div className="border-b border-r border-l">
          <div className="flex flex-col justify-evenly ">
            <h2 className="text-3xl py-6 rounded-md text-center text-white font-bold w-full bg-[#169F84]">
              Users Payment
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="text-lg">
                  <th>Serial</th>
                  <th>Paid Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={payment._id}>
                    <th>{index + 1}</th>
                    <td>{payment.price} TK</td>

                    <td>{new Date(payment.date).toLocaleString()}</td>
                    <td
                      className={`${
                        payment.status === "pending"
                          ? "text-orange-300"
                          : "text-green-500"
                      } `}
                    >
                      {payment.status}
                    </td>
                    <td>
                      <button
                        onClick={() => handleStatus(payment._id)}
                        className="btn btn-sm btn-outline"
                      >
                        Accept
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentManagement;
