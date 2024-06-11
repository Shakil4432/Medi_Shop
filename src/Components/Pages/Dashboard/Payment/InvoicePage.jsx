import React from "react";

import { useQuery } from "@tanstack/react-query";
import { useReactToPrint } from "react-to-print";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";

const InvoicePage = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="pt-36 max-w-screen-md mx-auto">
      <div ref={componentRef}>
        <div className="border-b border-r border-l">
          <div className="flex flex-col justify-evenly my-6">
            <Link
              to="/"
              className=" text-center -mt-2 rounded-md bg-[#16A085] border-none  text-white font-bold text-xl"
            >
              <span className="text-2xl p-2 rounded-full bg-gray-100 text-[#16A085]">
                BD
              </span>
              PHARMA
            </Link>
            <h2 className="text-3xl py-6 rounded-md text-center text-white font-bold w-full bg-[#169F84]">
              User Email: {user.email}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="text-lg">
                  <th>Serial</th>
                  <th>Paid Amount</th>
                  <th>TransactionId</th>
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
      <button onClick={handlePrint} className="btn btn-primary mt-4">
        Print Invoice
      </button>
    </div>
  );
};

export default InvoicePage;
