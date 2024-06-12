import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function HealthTips() {
  const axiosSecure = useAxiosSecure();
  const { data: healthTips = [] } = useQuery({
    queryKey: ["healthTips"],
    queryFn: async () => {
      const res = await axiosSecure.get("/healthTips");
      return res.data;
    },
  });

  console.log(healthTips);
  return (
    <div>
      <div className="text-4xl font-bold text-center p-10">Health Tips</div>
      <div className="grid lg:grid-cols-2 items-center justify-center gap-10 ">
        {healthTips.map((healthTip) => (
          <div
            key={healthTip._id}
            className="max-w-3xl  px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                {healthTip.publishedDate}
              </span>
            </div>

            <div className="mt-2">
              <a
                href="#"
                className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                tabindex="0"
                role="link"
              >
                {healthTip.title}
              </a>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {healthTip.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                tabindex="0"
                role="link"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
