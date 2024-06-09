import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function HomeCategory() {
  const axiosSecure = useAxiosSecure();
  const { data: homeCategory = [], refetch } = useQuery({
    queryKey: ["homeCategory"],
    queryFn: async () => {
      const result = await axiosSecure.get("/homeCategory");
      return result.data;
    },
  });
  console.log(homeCategory);
  return (
    <div className="mt-10 ">
      <div className="text-4xl font-bold text-center p-10">
        Medicine Category
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {homeCategory.map((item) => (
          <Link
            to={`/spacific-category/${item.name}`}
            className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div
              key={item._id}
              className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              <img
                className="object-cover w-56 h-56 hover:scale-110 transition-all mx-auto"
                src={item.image}
                alt="avatar"
              />

              <div className="py-5 text-center">
                <h1
                  className="block text-xl font-bold text-gray-800 dark:text-white"
                  tabindex="0"
                >
                  {item.name}
                </h1>
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  {<span>Quantity : {item.quantity}</span>}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
