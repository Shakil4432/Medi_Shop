import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

export default function Banner() {
  const axiosSecure = useAxiosSecure();
  const { data: categories = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosSecure.get("/category");
      return res.data;
    },
  });

  console.log(categories);
  return (
    <div className="pt-24 rounded-md bg-[#16A085]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide>
            <section className="p-6 dark:text-blue-400 bg--50 rounded-b-md">
              <div className="grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full flex flex-col gap-6 items-center justify-center overflow-hidden text-gray-50 bg-[#16A085] sm:space-y-2 lg:px-6  rounded-md sm:px-12 md:px-16 xl:col-span-2">
                  <h1 className="text-2xl lg:text-5xl font-extrabold">
                    {category.categoryName}
                  </h1>
                  <p className="lg:my-4">
                    <span className="font-medium ">{category.description}</span>
                  </p>

                  <button className="btn btn-outline text-white border-b-4 border-b-gray-200 dark:text-blue-400 mt-10">
                    View Details
                  </button>
                </div>
                <img
                  src={category.categoryImage}
                  className="object-cover h-[28vh] bg-[#16A085] lg:h-[70vh] w-full rounded-md xl:col-span-3"
                />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
