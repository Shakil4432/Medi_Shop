import React from "react";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function PaymentHistory() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className=" max-w-screen-lg mx-auto mt-12">
      <div>
        <div className="border-b border-r border-l">
          <div className="flex flex-col justify-evenly ">
            <h2 className="text-3xl py-6 rounded-md text-center text-white font-bold w-full bg-[#169F84]">
              Payment History
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="text-lg">
                  <th>Serial</th>
                  <th>Paid Amount</th>
                  <th>TransactionID</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={payment._id}>
                    <th>{index + 1}</th>
                    <td>{payment.price} TK</td>
                    <td>{payment.transactionId}</td>
                    <td>{new Date(payment.date).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
