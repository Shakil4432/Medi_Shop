import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function DiscountSlider() {
  const axiosSecure = useAxiosSecure();

  const { data: discountProducts = [] } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/allCategory`);
      const discountData = result.data.filter((item) => item.discount);
      return discountData;
    },
  });
  console.log(discountProducts);

  return (
    <div className="my-10 max-w-screen-lg mx-auto py-6">
      <div className="text-4xl font-bold text-center p-10">
        Discount Products
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {discountProducts.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="flex max-w-md p-6 overflow-hidden bg-white  shadow-lg dark:bg-gray-800">
              <div className="w-1/3 bg-cover">
                <img
                  className="object-cover h-32 w-32  hover:scale-110 transition-all mx-auto"
                  src={item.image}
                  alt="avatar"
                />
              </div>

              <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                  {item.name}
                </h1>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                  Discount : {item.discount}
                </h1>
                <div className="flex justify-between mt-3 item-center">
                  <h1 className="text-xs font-bold text-gray-700 dark:text-gray-200 ">
                    Unit Price : {item.price} TK
                  </h1>
                  <p className="text-xs font-bold   transition-colors duration-300 transform  rounded dark:bg-gray-700  dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                    Quantity : {item.quantity}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
