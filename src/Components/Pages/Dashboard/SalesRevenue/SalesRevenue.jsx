import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const SalesRevenue = () => {
  const axiosSecure = useAxiosSecure();
  const [overview, setOverview] = useState({
    totalSales: 0,
    paidTotal: 0,
    pendingTotal: 0,
  });

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const response = await axiosSecure.get("/overview");
        setOverview(response.data);
        console.log(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchTotal();
  }, []);

  console.log(overview.totalSales);

  return (
    <div className="pt-36 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sales Revenue</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-green-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Total Sales</h3>
            <p className="text-2xl font-bold">{overview.totalSales} TK</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Paid Total</h3>
            <p className="text-2xl font-bold">{overview.paidTotal} TK</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Pending Total</h3>
            <p className="text-2xl font-bold">{overview.pendingTotal}TK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesRevenue;
